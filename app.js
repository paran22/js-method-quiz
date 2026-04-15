const container = document.getElementById('quizContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resetBtn = document.getElementById('resetBtn');
const categoryBtns = document.querySelectorAll('.category-btn');

let revealedSet = new Set();

// ── Render ──

function renderQuizzes() {
  container.innerHTML = quizzes.map(buildCard).join('');
  bindEvents();
  updateProgress();
}

function buildCard(quiz) {
  const isRevealed = revealedSet.has(quiz.id);
  const revealedClass = isRevealed ? ' revealed' : '';
  const isExecutable = quiz.executable !== false;

  const codeHtml = renderCode(quiz, isRevealed);

  const runBtnHtml = isExecutable && !isRevealed
    ? `<button class="run-btn" data-id="${quiz.id}">실행하기</button>`
    : '';

  const revealBtnLabel = isRevealed ? '정답 확인 완료' : '정답 보기';
  const revealBtnClass = isRevealed ? ' revealed' : '';
  const retryBtnHtml = isRevealed
    ? `<button class="retry-btn" data-id="${quiz.id}">다시 풀기</button>`
    : '';

  const explanationHtml = isRevealed
    ? `<div class="explanation show">
        <h4>${quiz.explanation.title}</h4>
        <ul>${quiz.explanation.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`
    : '';

  return `
    <div class="quiz-card${revealedClass}" data-id="${quiz.id}">
      <span class="quiz-number">${quiz.categoryLabel} #${quiz.id}</span>
      <p class="quiz-question">${quiz.question}</p>
      <div class="code-block"><code>${codeHtml}</code></div>
      <div class="console-output" id="console-${quiz.id}"></div>
      <div class="btn-group">
        ${runBtnHtml}
        <button class="reveal-btn${revealBtnClass}" data-id="${quiz.id}">${revealBtnLabel}</button>
        ${retryBtnHtml}
      </div>
      ${explanationHtml}
    </div>`;
}

function renderCode(quiz, isRevealed) {
  let blankIdx = 0;
  return escapeHtml(quiz.code).replace(/&lt;blank&gt;/g, () => {
    const answer = quiz.blanks[blankIdx];
    const idx = blankIdx++;
    if (isRevealed) {
      return `<span class="blank-filled">${escapeHtml(answer)}</span>`;
    }
    const width = Math.max(answer.length * 0.65 + 1.5, 3);
    return `<input type="text" class="blank-input" data-quiz="${quiz.id}" data-idx="${idx}" placeholder="?" autocomplete="off" spellcheck="false" style="width:${width}em">`;
  });
}

// ── Events ──

function bindEvents() {
  document.querySelectorAll('.run-btn').forEach(btn => {
    btn.addEventListener('click', () => runQuiz(Number(btn.dataset.id)));
  });

  document.querySelectorAll('.reveal-btn:not(.revealed)').forEach(btn => {
    btn.addEventListener('click', () => revealQuiz(Number(btn.dataset.id)));
  });

  document.querySelectorAll('.retry-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const quizId = Number(btn.dataset.id);
      revealedSet.delete(quizId);
      renderQuizzes();
    });
  });

  document.querySelectorAll('.blank-input').forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const quizId = Number(input.dataset.quiz);
        const quiz = quizzes.find(q => q.id === quizId);
        if (quiz?.executable === false) {
          checkAnswers(quizId);
        } else {
          runQuiz(quizId);
        }
      }
    });
  });
}

// ── Run Code ──

function runQuiz(quizId) {
  const quiz = quizzes.find(q => q.id === quizId);
  if (!quiz) return;

  const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
  const values = Array.from(inputs).map(inp => inp.value.trim());

  // 빈칸 체크
  if (values.some(v => v === '')) {
    showConsole(quizId, '빈칸을 모두 채워주세요!', 'warn');
    return;
  }

  // 정답 체크 표시
  let allCorrect = true;
  inputs.forEach((inp, i) => {
    const correct = values[i] === quiz.blanks[i];
    inp.classList.remove('correct', 'incorrect');
    inp.classList.add(correct ? 'correct' : 'incorrect');
    if (!correct) allCorrect = false;
  });

  // 전부 정답이면 바로 정답 보기로 전환
  if (allCorrect) {
    revealQuiz(quizId);
    return;
  }

  // 코드 조립 & 실행
  let idx = 0;
  const assembled = quiz.code.replace(/<blank>/g, () => values[idx++]);
  const result = executeCode(assembled);

  if (result.success) {
    showConsole(quizId, result.output || '(출력 없음)', 'success');
  } else {
    showConsole(quizId, result.output, 'error');
  }
}

function checkAnswers(quizId) {
  const quiz = quizzes.find(q => q.id === quizId);
  if (!quiz) return;

  const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
  let allCorrect = true;

  inputs.forEach((inp, i) => {
    const userVal = inp.value.trim();
    const correct = userVal.toLowerCase() === quiz.blanks[i].toLowerCase();
    inp.classList.remove('correct', 'incorrect');
    if (userVal === '') return;
    inp.classList.add(correct ? 'correct' : 'incorrect');
    if (!correct) allCorrect = false;
  });

  if (allCorrect && Array.from(inputs).every(inp => inp.value.trim() !== '')) {
    showConsole(quizId, '정답입니다!', 'success');
  }
}

function executeCode(code) {
  const logs = [];
  const mockConsole = {
    log: (...args) => logs.push(args.map(formatVal).join(' ')),
    dir: (...args) => logs.push(args.map(formatVal).join(' ')),
    warn: (...args) => logs.push(args.map(formatVal).join(' ')),
    error: (...args) => logs.push(args.map(formatVal).join(' ')),
  };

  try {
    const fn = new Function('console', code);
    fn(mockConsole);
    return { success: true, output: logs.join('\n') };
  } catch (err) {
    return { success: false, output: `${err.name}: ${err.message}` };
  }
}

function formatVal(val) {
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'number') return String(val);
  if (typeof val === 'string') return val;
  try {
    return JSON.stringify(val);
  } catch {
    return String(val);
  }
}

// ── Reveal ──

function revealQuiz(quizId) {
  revealedSet.add(quizId);

  const quiz = quizzes.find(q => q.id === quizId);
  if (!quiz) return;

  // 정답으로 코드 실행해서 결과 보여주기
  if (quiz.executable !== false) {
    let idx = 0;
    const assembled = quiz.code.replace(/<blank>/g, () => quiz.blanks[idx++]);
    const result = executeCode(assembled);
    renderQuizzes();
    if (result.success && result.output) {
      showConsole(quizId, result.output, 'success');
    }
  } else {
    renderQuizzes();
  }
}

// ── Console Output ──

function showConsole(quizId, text, type) {
  const el = document.getElementById(`console-${quizId}`);
  if (!el) return;

  const prefix = type === 'error' ? '> ' : type === 'warn' ? '> ' : '> ';
  el.className = `console-output show ${type}`;
  el.textContent = prefix + text.split('\n').join('\n  ');
}

// ── Progress ──

function updateProgress() {
  const total = quizzes.length;
  const done = revealedSet.size;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${done} / ${total} 완료`;
}

// ── Utils ──

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Category Scroll ──

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    if (category === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 해당 카테고리의 첫 번째 퀴즈 찾기
    const firstQuiz = quizzes.find(q => q.category === category);
    if (!firstQuiz) return;

    const card = document.querySelector(`.quiz-card[data-id="${firstQuiz.id}"]`);
    if (!card) return;

    const offset = 80; // 헤더 높이만큼 여유
    const top = card.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Reset ──

resetBtn.addEventListener('click', () => {
  if (revealedSet.size === 0) return;
  revealedSet.clear();
  renderQuizzes();
});

// ── Intro Reveal ──

document.getElementById('revealIntroBtn').addEventListener('click', () => {
  document.getElementById('introAnswer').classList.add('show');
  document.getElementById('revealIntroBtn').classList.add('hidden');
});

// ── Init ──

renderQuizzes();
