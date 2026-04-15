const quizzes = [
  // ─── 문자열 ───
  {
    id: 1,
    category: 'string',
    categoryLabel: '문자열',
    question: '원하는 결과를 만들려면 어떤 메서드를 써야 할까요?',
    code:
`const str = '  Hello, JavaScript!  ';

console.log(str.<blank>());           // → Hello, JavaScript!
console.log('hello'.<blank>());       // → HELLO
console.log('HELLO'.<blank>());       // → hello

// 그런데 원본은?
console.log(str);  // → ?`,
    blanks: ['trim', 'toUpperCase', 'toLowerCase'],
    explanation: {
      title: '문자열 변환 메서드',
      points: [
        '<code>trim()</code> → 앞뒤 공백 제거. 사용자 입력값 정리할 때 필수',
        '<code>toUpperCase()</code> / <code>toLowerCase()</code> → 대소문자 변환',
        '마지막 줄에서 <code>str</code>은 여전히 <code>"  Hello, JavaScript!  "</code> — <strong>원본은 절대 안 바뀐다!</strong>',
        '새 값을 쓰려면 반드시 변수에 저장해야 한다: <code>const cleaned = str.trim();</code>',
      ],
    },
  },
  {
    id: 2,
    category: 'string',
    categoryLabel: '문자열',
    question: '문자열을 검색하고 잘라내는 메서드를 채워보세요.',
    code:
`const email = 'codeit@gmail.com';

console.log(email.<blank>('gmail'));     // → true
console.log(email.<blank>('@'));         // → 6
console.log(email.<blank>(0, 6));       // → codeit
console.log(email.<blank>('@'));         // → ['codeit', 'gmail.com']`,
    blanks: ['includes', 'indexOf', 'slice', 'split'],
    explanation: {
      title: '검색 & 추출 메서드',
      points: [
        '<code>includes()</code> → 포함 여부를 <code>true</code> / <code>false</code>로 반환',
        '<code>indexOf()</code> → 위치(인덱스)를 반환. 없으면 <code>-1</code>',
        '<code>slice(시작, 끝)</code> → 시작부터 끝 <strong>직전</strong>까지 잘라냄',
        '<code>split(구분자)</code> → 문자열을 배열로 쪼갠다. 배열의 <code>join()</code>과 반대!',
      ],
    },
  },
  {
    id: 3,
    category: 'string',
    categoryLabel: '문자열',
    question: '문자열을 치환하는 메서드를 맞혀보세요.',
    code:
`const msg = 'apple banana apple grape';

console.log(msg.<blank>('apple', 'orange'));
// → orange banana apple grape

console.log(msg.<blank>('apple', 'orange'));
// → orange banana orange grape

console.log('ha'.<blank>(3));
// → hahaha`,
    blanks: ['replace', 'replaceAll', 'repeat'],
    explanation: {
      title: '치환 & 반복 메서드',
      points: [
        '<code>replace()</code> → <strong>첫 번째</strong> 일치만 치환',
        '<code>replaceAll()</code> → <strong>전부</strong> 치환',
        '<code>repeat(n)</code> → 문자열을 n번 반복한 새 문자열 반환',
        '셋 다 원본은 변경하지 않는다',
      ],
    },
  },

  // ─── 배열 ───
  {
    id: 4,
    category: 'array',
    categoryLabel: '배열',
    question: '배열의 앞/뒤에 요소를 추가하는 메서드는?',
    code:
`const arr = ['b', 'c', 'd'];

// 맨 뒤에 'e' 추가
arr.<blank>('e');
console.log(arr);  // → ['b','c','d','e']

// 맨 앞에 'a' 추가
arr.<blank>('a');
console.log(arr);  // → ['a','b','c','d','e']`,
    blanks: ['push', 'unshift'],
    explanation: {
      title: 'push / unshift — 추가',
      points: [
        '<code>push()</code> → 맨 <strong>뒤</strong>에 추가',
        '<code>unshift()</code> → 맨 <strong>앞</strong>에 추가',
        '둘 다 <strong>원본 배열을 직접 변경</strong>한다',
        '반환값은 변경된 배열의 <strong>새 길이</strong>(숫자)',
      ],
    },
  },
  {
    id: 5,
    category: 'array',
    categoryLabel: '배열',
    question: '배열의 앞/뒤에서 요소를 제거하는 메서드는?',
    code:
`const arr = ['a', 'b', 'c', 'd', 'e'];

// 맨 뒤 요소 제거
console.log(arr.<blank>());  // → e
console.log(arr);             // → ['a','b','c','d']

// 맨 앞 요소 제거
console.log(arr.<blank>());  // → a
console.log(arr);             // → ['b','c','d']`,
    blanks: ['pop', 'shift'],
    explanation: {
      title: 'pop / shift — 제거',
      points: [
        '<code>pop()</code> → 맨 <strong>뒤</strong> 요소 제거',
        '<code>shift()</code> → 맨 <strong>앞</strong> 요소 제거',
        '둘 다 <strong>제거된 요소를 반환</strong>한다',
        '둘 다 <strong>원본 배열을 직접 변경</strong>한다',
      ],
    },
  },
  {
    id: 6,
    category: 'array',
    categoryLabel: '배열',
    question: '둘 다 배열을 잘라내는데, 원본이 바뀌는 건 어느 쪽?',
    code:
`const arr = ['a', 'b', 'c', 'd', 'e'];

// 원본 유지하면서 잘라내기
console.log(arr.<blank>(1, 3));  // → ['b','c']
console.log(arr);                 // → ['a','b','c','d','e'] (그대로!)

// 원본에서 직접 제거
arr.<blank>(1, 2);
console.log(arr);  // → ['a','d','e'] (바뀜!)`,
    blanks: ['slice', 'splice'],
    explanation: {
      title: 'slice vs splice',
      points: [
        '<code>slice(시작, 끝)</code> → 원본 유지, 새 배열 반환 (안전)',
        '<code>splice(시작, 개수)</code> → <strong>원본을 직접 변경</strong> (위험!)',
        '외우기: sli<strong>c</strong>e = <strong>c</strong>opy (복사), spli<strong>c</strong>e = 수술(잘라냄)',
      ],
    },
  },
  {
    id: 7,
    category: 'array',
    categoryLabel: '배열',
    question: '배열을 문자열로 합치거나, 포함 여부를 확인하려면?',
    code:
`const colors = ['red', 'green', 'blue'];

// 배열을 문자열로 합치기
console.log(colors.<blank>(' - '));  // → red - green - blue

// 포함 여부 확인
console.log(colors.<blank>('green'));  // → true
console.log(colors.<blank>('pink'));   // → false`,
    blanks: ['join', 'includes', 'includes'],
    explanation: {
      title: 'join / includes',
      points: [
        '<code>join(구분자)</code> → 배열의 요소를 구분자로 연결해 <strong>문자열</strong>로 반환',
        '<code>join()</code>은 <code>split()</code>의 반대: 배열→문자열 / 문자열→배열',
        '<code>includes(값)</code> → 포함 여부를 <code>true</code> / <code>false</code>로 반환',
        '둘 다 원본을 변경하지 않는다',
      ],
    },
  },
  {
    id: 8,
    category: 'array',
    categoryLabel: '배열',
    question: '정렬·뒤집기·합치기 메서드를 맞혀보세요.',
    code:
`// 숫자 오름차순 정렬 (비교 함수 필수!)
console.log([3, 1, 11, 2].<blank>((a, b) => a - b));
// → [1, 2, 3, 11]

// 순서 뒤집기
console.log(['a', 'b', 'c'].<blank>());
// → ['c', 'b', 'a']

// 두 배열 합치기
console.log([1, 2].<blank>([3, 4]));
// → [1, 2, 3, 4]`,
    blanks: ['sort', 'reverse', 'concat'],
    explanation: {
      title: '정렬 & 합치기',
      points: [
        '<code>sort()</code>는 기본이 <strong>문자열 비교</strong> — 숫자는 반드시 <code>(a, b) => a - b</code>',
        '왜 <code>a - b</code>? → 비교 함수가 <strong>음수</strong>를 반환하면 a를 앞에, <strong>양수</strong>면 b를 앞에 놓는다. 예: <code>1 - 3 = -2</code>(음수) → 1이 3보다 앞으로 간다 → 오름차순!',
        '<code>sort()</code>와 <code>reverse()</code>는 <strong>원본을 변경</strong>한다',
        '<code>concat()</code>은 원본을 변경하지 않고 새 배열을 반환 (안전)',
      ],
    },
  },

  {
    id: 9,
    category: 'array',
    categoryLabel: '배열',
    question: '상품 목록을 가격 오름차순/내림차순으로 정렬해보세요.',
    code:
`const products = [
  { name: '키보드', price: 50000 },
  { name: '모니터', price: 350000 },
  { name: '마우스', price: 30000 },
];

// 가격 오름차순 (싼 것부터)
products.<blank>((a, b) => a.price <blank> b.price);
console.log(products.map(p => p.name));
// → ['마우스','키보드','모니터']

// 가격 내림차순 (비싼 것부터)
products.<blank>((a, b) => b.price <blank> a.price);
console.log(products.map(p => p.name));
// → ['모니터','키보드','마우스']`,
    blanks: ['sort', '-', 'sort', '-'],
    explanation: {
      title: '객체 배열 정렬 — 숫자 프로퍼티 기준',
      points: [
        '비교 함수가 <strong>음수</strong>를 반환하면 a가 앞, <strong>양수</strong>면 b가 앞',
        '오름차순: <code>a.price - b.price</code> → 작은 값이 앞으로',
        '내림차순: <code>b.price - a.price</code> → 큰 값이 앞으로',
        '주의: <code>sort()</code>는 <strong>원본 배열을 직접 변경</strong>한다!',
      ],
    },
  },
  {
    id: 10,
    category: 'array',
    categoryLabel: '배열',
    question: '한글/영문 이름을 사전순으로 정렬하려면 어떤 메서드를 써야 할까요?',
    code:
`const names = ['다영', '나리', '라희', '마준'];

names.sort((a, b) => a.<blank>(b));
console.log(names);
// → ['나리','다영','라희','마준']

const fruits = ['banana', 'apple', 'cherry'];

fruits.sort((a, b) => a.<blank>(b));
console.log(fruits);
// → ['apple','banana','cherry']`,
    blanks: ['localeCompare', 'localeCompare'],
    explanation: {
      title: 'localeCompare — 문자열 정렬의 정석',
      points: [
        '<code>a.localeCompare(b)</code> → 사전순으로 a가 앞이면 음수, 같으면 0, 뒤면 양수',
        '한글, 영문, 특수문자 등 <strong>언어에 맞는 정렬</strong>을 해준다',
        '<code>sort()</code>만 쓰면 유니코드 순서라 한글 정렬이 이상해질 수 있다',
        '내림차순: <code>b.localeCompare(a)</code>로 순서만 바꾸면 된다',
      ],
    },
  },
  {
    id: 11,
    category: 'array',
    categoryLabel: '배열',
    question: '게시글을 최신순으로 정렬해보세요. 날짜 비교도 뺄셈으로!',
    code:
`const posts = [
  { title: '첫 번째 글', date: new Date('2025-03-15') },
  { title: '세 번째 글', date: new Date('2025-07-20') },
  { title: '두 번째 글', date: new Date('2025-05-10') },
];

// 최신순 (새 글이 위로)
posts.<blank>((a, b) => b.date <blank> a.date);
console.log(posts.map(p => p.title));
// → ['세 번째 글','두 번째 글','첫 번째 글']`,
    blanks: ['sort', '-'],
    explanation: {
      title: '날짜 정렬 — Date 객체도 뺄셈 가능',
      points: [
        'Date 객체끼리 빼면 <strong>밀리초 차이</strong>(숫자)가 나온다',
        '최신순(내림차순): <code>b.date - a.date</code> → 최근 날짜가 앞으로',
        '오래된 순(오름차순): <code>a.date - b.date</code>',
        '게시판, 댓글, 알림 목록 등에서 가장 흔한 정렬 패턴',
      ],
    },
  },
  // ─── map / filter / reduce ───
  {
    id: 12,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '"변환한 새 배열"이 필요하면? vs "실행만" 하고 싶으면?',
    code:
`const nums = [1, 2, 3, 4, 5];

// 각 요소를 2배로 변환한 새 배열이 필요할 때
const doubled = nums.<blank>(n => n * 2);
console.log(doubled);  // → [2, 4, 6, 8, 10]

// 그런데 원본은?
console.log(nums);     // → ?

// 그냥 실행만 하고 싶을 때 (반환값 없음)
const result = nums.<blank>(n => console.log(n));
console.log('반환값:', result);  // → 반환값: undefined`,
    blanks: ['map', 'forEach'],
    explanation: {
      title: 'map vs forEach',
      points: [
        '<code>map</code> → 변환 결과를 <strong>새 배열로 반환</strong>한다. 원본 <code>nums</code>는 <code>[1,2,3,4,5]</code> 그대로!',
        '<code>forEach</code> → 실행만 한다. <strong>반환값이 없다</strong> (undefined)',
        '새 배열이 필요하면 → <code>map</code>',
        '<code>map</code>, <code>filter</code>, <code>reduce</code> 등 고차 함수는 전부 <strong>원본을 변경하지 않는다</strong>',
      ],
    },
  },
  {
    id: 13,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '조건에 맞는 요소를 "전부" 찾을 때 vs "하나만" 찾을 때?',
    code:
`const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];

const adults = users.<blank>(u => u.age >= 20);
console.log(adults);
// → [{name:'Alice',age:25}, {name:'Charlie',age:30}]

const firstAdult = users.<blank>(u => u.age >= 20);
console.log(firstAdult);
// → {name:'Alice', age:25}`,
    blanks: ['filter', 'find'],
    explanation: {
      title: 'filter vs find',
      points: [
        '<code>filter</code> → 조건에 맞는 <strong>전부</strong>를 <strong>배열</strong>로 반환',
        '<code>find</code> → 조건에 맞는 <strong>첫 번째 하나</strong>만 반환 (배열 아님!)',
        '<code>find</code>는 못 찾으면 <code>undefined</code>',
        '하나만 필요하면 <code>find</code>가 효율적 (찾는 즉시 멈춤)',
      ],
    },
  },
  {
    id: 14,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: 'find로 못 찾으면 어떻게 될까요?',
    code:
`const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
];

// 이름이 'Dan'인 유저 찾기 — 없다!
const dan = users.<blank>(u => u.name === 'Dan');
console.log(dan);  // → undefined

// filter로 못 찾으면?
const result = users.<blank>(u => u.name === 'Dan');
console.log(result);  // → []`,
    blanks: ['find', 'filter'],
    explanation: {
      title: 'find vs filter — 못 찾았을 때의 차이',
      points: [
        '<code>find</code>는 못 찾으면 <code>undefined</code> → <code>undefined.age</code> 하면 <strong>TypeError!</strong>',
        '<code>filter</code>는 못 찾으면 <code>[]</code> (빈 배열) → 에러는 안 나지만 빈 배열',
        'API에서 데이터를 찾을 때 항상 "없을 수도 있다"를 고려해야 한다',
        '안전한 처리 방법은 뒤에서 <code>?.</code>와 <code>??</code>를 배울 때 다시 다룹니다!',
      ],
    },
  },
  {
    id: 15,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '"하나라도 만족?" vs "전부 만족?" 을 검사하려면?',
    code:
`const scores = [85, 92, 78, 65, 95];

// 90점 이상이 하나라도 있나요?
console.log(scores.<blank>(s => s >= 90));   // → true

// 전부 60점 이상인가요?
console.log(scores.<blank>(s => s >= 60));   // → true`,
    blanks: ['some', 'every'],
    explanation: {
      title: 'some vs every',
      points: [
        '<code>some</code> → <strong>하나라도</strong> 만족하면 <code>true</code>',
        '<code>every</code> → <strong>전부</strong> 만족해야 <code>true</code>',
        '팁: <code>some</code> = "있어?", <code>every</code> = "다 그래?"',
        '빈 배열: <code>[].some()</code>은 <code>false</code>, <code>[].every()</code>는 <code>true</code>',
      ],
    },
  },
  {
    id: 16,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '배열을 하나의 값으로 합치는 메서드는?',
    code:
`const nums = [10, 20, 30, 40];

// 전체 합계
const sum = nums.<blank>((acc, cur) => acc + cur, 0);
console.log(sum);  // → 100

// 최댓값
const max = nums.<blank>((acc, cur) => cur > acc ? cur : acc, nums[0]);
console.log(max);  // → 40`,
    blanks: ['reduce', 'reduce'],
    explanation: {
      title: 'reduce — 누적 계산',
      points: [
        '<code>reduce((누적값, 현재값) => 계산, 초기값)</code>',
        '매 반복마다 <code>return</code>한 값이 다음 <code>acc</code>(누적값)가 된다',
        '합계, 최댓값, 평균 등 "배열 → 단일 값" 변환에 사용',
        '초기값은 항상 넣는 것이 안전 (빈 배열 에러 방지)',
      ],
    },
  },
  {
    id: 17,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '체이닝으로 "재고 있는 상품의 이름"을 뽑아보세요.',
    code:
`const products = [
  { name: '키보드', price: 50000, inStock: true },
  { name: '마우스', price: 30000, inStock: true },
  { name: '모니터', price: 350000, inStock: false },
  { name: '헤드셋', price: 80000, inStock: true },
];

const names = products
  .<blank>(p => p.inStock)
  .<blank>(p => p.name);
console.log(names);  // → ['키보드','마우스','헤드셋']`,
    blanks: ['filter', 'map'],
    explanation: {
      title: '체이닝: filter + map',
      points: [
        '<code>filter</code>가 새 배열을 반환하므로 바로 <code>.map()</code>을 이어쓸 수 있다',
        '순서: 먼저 <strong>걸러내고</strong>(filter) → <strong>변환</strong>(map)',
        'filter를 먼저 하면 처리할 양이 줄어서 효율적',
      ],
    },
  },
  {
    id: 18,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '체이닝으로 "재고 있는 상품의 총 가격"을 구해보세요.',
    code:
`const products = [
  { name: '키보드', price: 50000, inStock: true },
  { name: '마우스', price: 30000, inStock: true },
  { name: '모니터', price: 350000, inStock: false },
  { name: '헤드셋', price: 80000, inStock: true },
];

const total = products
  .<blank>(p => p.inStock)
  .<blank>((sum, p) => sum + p.price, 0);
console.log(total);  // → 160000`,
    blanks: ['filter', 'reduce'],
    explanation: {
      title: '체이닝: filter + reduce',
      points: [
        '먼저 <code>filter</code>로 재고 있는 상품만 걸러내고 → <code>reduce</code>로 가격 합산',
        '<code>reduce</code>의 초기값 <code>0</code>부터 시작해서 가격을 누적',
        '결과: 50000 + 30000 + 80000 = 160000',
      ],
    },
  },

  {
    id: 19,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: 'API 응답 배열을 id로 바로 찾을 수 있는 객체로 변환해보세요.',
    code:
`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// 배열 → { id: 유저 } 객체로 변환
const userMap = users.<blank>((acc, user) => {
  acc[user.id] = user;
  return acc;
}, <blank>);

// 변환 결과 확인
console.log(userMap);
// → { 1: {id:1,name:'Alice'}, 2: {id:2,name:'Bob'}, 3: {id:3,name:'Charlie'} }

// id로 바로 찾기 — find 없이!
const targetId = 2;
console.log(userMap[targetId].name);  // → Bob`,
    blanks: ['reduce', '{}'],
    explanation: {
      title: 'reduce로 배열 → 객체 변환',
      points: [
        '초기값을 빈 객체 <code>{}</code>로 시작해서 하나씩 채워 넣는 패턴',
        '1회차: <code>acc = {}</code> → <code>acc[1] = {id:1, name:"Alice"}</code> → <code>{ 1: {...} }</code> 반환',
        '2회차: <code>acc = { 1: {...} }</code> → <code>acc[2] = {id:2, name:"Bob"}</code> → <code>{ 1: {...}, 2: {...} }</code> 반환',
        '변환 후 <code>userMap[2]</code>로 바로 접근 — 배열을 매번 <code>find</code>하는 것보다 빠르다',
        'API 응답을 받아서 state에 저장할 때 자주 사용하는 패턴',
      ],
    },
  },
  {
    id: 20,
    category: 'hof',
    categoryLabel: 'map/filter/reduce',
    question: '주문 목록을 카테고리별로 그룹핑해보세요.',
    code:
`const orders = [
  { item: '아메리카노', type: '음료' },
  { item: '크로와상', type: '베이커리' },
  { item: '라떼', type: '음료' },
  { item: '케이크', type: '베이커리' },
];

const grouped = orders.<blank>((acc, order) => {
  const key = order.type;
  if (!acc[key]) acc[key] = <blank>;
  acc[key].<blank>(order);
  return acc;
}, {});

console.log(grouped);
// → { 음료: [{...}, {...}], 베이커리: [{...}, {...}] }`,
    blanks: ['reduce', '[]', 'push'],
    explanation: {
      title: 'reduce로 그룹핑',
      points: [
        '초기값 <code>{}</code>에서 시작 → 카테고리 키가 없으면 빈 배열 <code>[]</code>로 초기화',
        '<code>push</code>로 해당 카테고리에 추가',
        '게시판 카테고리별 분류, 날짜별 일정 묶기 등에 활용',
      ],
    },
  },

  // ─── 변환 ───
  {
    id: 21,
    category: 'convert',
    categoryLabel: '변환',
    question: '객체의 키, 값, 키-값 쌍을 배열로 바꾸려면?',
    code:
`const product = { name: '키보드', price: 50000, brand: '코드잇' };

// 키만 배열로
const keys = Object.<blank>(product);
console.log(keys);    // → ['name','price','brand']

// 값만 배열로
const values = Object.<blank>(product);
console.log(values);  // → ['키보드',50000,'코드잇']

// [키, 값] 쌍을 배열로
const entries = Object.<blank>(product);
console.log(entries);
// → [['name','키보드'],['price',50000],['brand','코드잇']]`,
    blanks: ['keys', 'values', 'entries'],
    explanation: {
      title: 'Object.keys / values / entries',
      points: [
        '<code>Object.keys()</code> → 키 배열, <code>Object.values()</code> → 값 배열',
        '<code>Object.entries()</code> → <code>[키, 값]</code> 쌍의 2차원 배열',
        '배열로 바꾸면 <code>map</code>, <code>filter</code>, <code>forEach</code> 등을 쓸 수 있다!',
        'API 응답 객체를 순회하거나, 폼 데이터를 처리할 때 필수',
      ],
    },
  },
  {
    id: 22,
    category: 'convert',
    categoryLabel: '변환',
    question: '유사 배열이나 Set을 진짜 배열로 바꾸려면?',
    code:
`// 유사 배열 (Array-Like) — DOM에서 자주 만남
const nodeList = document.querySelectorAll('button');
// nodeList.map() → TypeError! (배열이 아니라서)

// 진짜 배열로 변환
const buttons = Array.<blank>(nodeList);
console.log(Array.isArray(buttons));  // → true

// 문자열 → 배열
const chars = Array.<blank>('hello');
console.log(chars);  // → ['h','e','l','l','o']

// Set → 배열 (Spread로도 가능!)
const uniqueSet = new Set([1, 2, 2, 3]);
const arr = Array.<blank>(uniqueSet);
console.log(arr);  // → [1, 2, 3]`,
    blanks: ['from', 'from', 'from'],
    explanation: {
      title: 'Array.from — 뭐든 배열로',
      points: [
        '<code>Array.from()</code>은 유사 배열, Set, 문자열 등 <strong>반복 가능한 것</strong>을 배열로 바꾼다',
        'DOM의 <code>querySelectorAll</code>은 NodeList를 반환 — 배열 메서드를 쓰려면 변환 필요',
        'Set → 배열은 <code>[...set]</code>이나 <code>Array.from(set)</code> 둘 다 가능',
        '두 번째 인자로 map 함수도 넘길 수 있다: <code>Array.from({length: 5}, (_, i) => i)</code>',
      ],
    },
  },

  // ─── Set ───
  {
    id: 23,
    category: 'convert',
    categoryLabel: '변환',
    question: '배열에서 중복을 제거하려면?',
    code:
`const fruits = ['사과', '바나나', '사과', '포도', '바나나'];

// Set은 중복을 허용하지 않는다!
const uniqueSet = new <blank>(fruits);
console.log(uniqueSet.size);  // → 3

// Set → 다시 배열로 변환
const uniqueArr = [<blank>uniqueSet];
console.log(uniqueArr);
// → ['사과','바나나','포도']`,
    blanks: ['Set', '...'],
    explanation: {
      title: 'Set — 중복 제거의 정석',
      points: [
        '<code>new Set(배열)</code>로 만들면 중복이 자동으로 제거된다',
        '<code>[...set]</code> 또는 <code>Array.from(set)</code>으로 다시 배열로 변환',
        '한 줄로 중복 제거: <code>[...new Set(arr)]</code>',
        '태그 목록, 카테고리 필터 등 "고유한 값 목록"이 필요할 때 유용',
      ],
    },
  },

  // ─── Destructuring ───
  {
    id: 24,
    category: 'destructuring',
    categoryLabel: '구조 분해',
    question: '구조 분해를 쓰면 뭐가 좋을까요? 두 코드를 비교해보세요.',
    code:
`const product = { name: '키보드', price: 50000, brand: '코드잇' };

// 구조 분해 없이 — product. 을 계속 반복
console.log(product.name + ' (' + product.brand + ') - ' + product.price + '원');

// 구조 분해 사용 — 필요한 것만 꺼내서 깔끔하게
const { <blank>, <blank>, <blank> } = product;
console.log(name + ' (' + brand + ') - ' + price + '원');`,
    blanks: ['name', 'price', 'brand'],
    executable: false,
    explanation: {
      title: '구조 분해를 쓰는 이유',
      points: [
        '<code>product.</code>을 매번 반복하지 않아도 된다 — 코드가 짧고 읽기 쉬워진다',
        '필요한 프로퍼티만 골라서 꺼낼 수 있다 — "이 코드가 뭘 쓰는지" 한눈에 보인다',
        'API 응답처럼 객체가 클수록 효과가 커진다',
        '특히 콜백 안에서 <code>item.price</code>, <code>item.name</code> 반복 쓰는 걸 줄여준다',
      ],
    },
  },
  {
    id: 25,
    category: 'destructuring',
    categoryLabel: '구조 분해',
    question: '객체에서 값을 꺼내려면 — 빈칸에 프로퍼티 이름을 넣어보세요.',
    code:
`const user = {
  name: '코드잇',
  age: 20,
  email: 'hi@codeit.kr'
};

// 구조 분해로 name, age 꺼내기
const { <blank>, <blank> } = user;
console.log(name);   // → 코드잇
console.log(age);    // → 20`,
    blanks: ['name', 'age'],
    explanation: {
      title: '객체 Destructuring 기본',
      points: [
        '프로퍼티 이름과 <strong>같은 이름</strong>의 변수를 자동 생성',
        '<code>const { name, age } = user</code>는 <code>const name = user.name</code>과 같다',
        '필요한 프로퍼티만 골라서 꺼낼 수 있다',
        '순서는 상관없다 — 객체는 <strong>이름으로 매칭</strong>',
      ],
    },
  },
  {
    id: 26,
    category: 'destructuring',
    categoryLabel: '구조 분해',
    question: '구조 분해의 반대 — 변수로 객체를 만들 때 줄여쓸 수 있다면?',
    code:
`const name = '코드잇';
const age = 20;

// 기존 방식 — 변수명과 키가 같은데 두 번씩 쓴다
const userA = { name: name, age: age };

// 단축 속성명 — 변수명과 키가 같으면 생략!
const userB = { <blank>, <blank> };
console.log(userB);  // → {name: '코드잇', age: 20}

// 함수에서 객체 반환할 때도 유용
function createUser(name, age) {
  return { <blank>, <blank> };
}
const user = createUser('Alice', 25);
console.log(user);  // → {name: 'Alice', age: 25}`,
    blanks: ['name', 'age', 'name', 'age'],
    explanation: {
      title: '단축 속성명 (Shorthand Property)',
      points: [
        '<code>{ name: name }</code>을 <code>{ name }</code>으로 줄여쓸 수 있다',
        '구조 분해가 "객체 → 변수"라면, 단축 속성명은 "변수 → 객체"',
        '함수에서 객체를 반환하거나, API에 보낼 데이터를 만들 때 매우 자주 사용',
        '뒤에서 배울 reduce + 구조 분해 조합에서도 이 문법이 등장한다',
      ],
    },
  },
  {
    id: 27,
    category: 'destructuring',
    categoryLabel: '구조 분해',
    question: '별칭과 중첩 구조 분해 — 어떤 프로퍼티를 지정해야 할까요?',
    code:
`const user = {
  name: '코드잇',
  address: { city: '서울' }
};

// name을 userName이라는 변수로 받으려면?
const { <blank>: userName } = user;
console.log(userName);  // → 코드잇

// address 안의 city만 꺼내려면?
const { <blank>: { city } } = user;
console.log(city);  // → 서울`,
    blanks: ['name', 'address'],
    explanation: {
      title: '별칭 & 중첩 구조 분해',
      points: [
        '별칭: <code>{ 원래이름: 새이름 }</code> → 다른 변수명으로 받기',
        '중첩: <code>{ outer: { inner } }</code> → 안쪽 값만 꺼내기',
        '콜론(<code>:</code>) 왼쪽은 "어떤 프로퍼티를 꺼낼지" 지정하는 것',
        '별칭 + 기본값 동시도 가능: <code>{ name: userName = "익명" }</code>',
      ],
    },
  },
  {
    id: 28,
    category: 'destructuring',
    categoryLabel: '구조 분해',
    question: '배열 나머지 모으기 + 함수 파라미터 구조 분해를 채워보세요.',
    code:
`const fruits = ['사과', '바나나', '포도', '딸기'];

// 첫 번째만 꺼내고 나머지를 배열로 모으기
const [first, <blank>rest] = fruits;
console.log(first);  // → 사과
console.log(rest);   // → ['바나나','포도','딸기']

// 함수 파라미터에서 바로 구조 분해
function greet({ <blank>, <blank> }) {
  console.log('안녕, ' + name + '! ' + age + '살이구나');
}
greet({ name: 'Alice', age: 25 });
// → 안녕, Alice! 25살이구나`,
    blanks: ['...', 'name', 'age'],
    explanation: {
      title: 'Rest 문법 + 파라미터 구조 분해',
      points: [
        '<code>...변수명</code>은 나머지를 배열로 모으는 <strong>Rest 문법</strong>',
        'Rest는 항상 <strong>마지막</strong>에만 올 수 있다',
        '함수 파라미터에서도 <code>{ }</code>로 바로 구조 분해 가능',
        '호출 시 어떤 값을 넘기는지 이름으로 보여서 가독성이 좋다',
      ],
    },
  },

  {
    id: 29,
    category: 'destructuring',
    categoryLabel: '구조 분해',
    question: '#19에서 만든 reduce + 구조 분해를 조합하면 더 깔끔해집니다.',
    code:
`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// 구조 분해 없이
const mapA = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// 파라미터에서 구조 분해로 깔끔하게!
const mapB = users.reduce((acc, { <blank>, <blank> }) => {
  acc[id] = { id, name };
  return acc;
}, {});

console.log(mapB);
// → { 1: {id:1,name:'Alice'}, 2: {id:2,name:'Bob'}, 3: {id:3,name:'Charlie'} }`,
    blanks: ['id', 'name'],
    explanation: {
      title: 'reduce + 구조 분해 조합',
      points: [
        '콜백의 두 번째 파라미터 <code>user</code>를 <code>{ id, name }</code>으로 바로 분해',
        '<code>user.id</code>, <code>user.name</code> 대신 <code>id</code>, <code>name</code>으로 짧게 사용',
        '<code>{ id, name }</code>은 <code>{ id: id, name: name }</code>의 축약형 (단축 속성명)',
        'map, filter, forEach 등 모든 콜백에서 같은 방식으로 활용 가능',
      ],
    },
  },

  // ─── Spread / Rest ───
  {
    id: 30,
    category: 'spread',
    categoryLabel: 'Spread/Rest',
    question: '배열과 객체를 복사·합치는 문법을 채워보세요.',
    code:
`const arr = [1, 2, 3];

// 배열 복사 (독립적인 새 배열)
const copy = [<blank>arr];
console.log(copy);  // → [1, 2, 3]

// 배열 합치기
const merged = [<blank>arr, 4, 5];
console.log(merged);  // → [1, 2, 3, 4, 5]

// 객체 복사 + 새 프로퍼티 추가
const obj = { a: 1, b: 2 };
const newObj = { <blank>obj, c: 3 };
console.log(newObj);  // → {a:1, b:2, c:3}`,
    blanks: ['...', '...', '...'],
    explanation: {
      title: 'Spread — 펼치기',
      points: [
        '<code>...</code>은 배열이나 객체를 <strong>펼쳐서</strong> 개별 요소로 만든다',
        '<code>[...arr]</code>은 새 배열 → 원본과 <strong>독립적</strong>',
        '주의: <code>const ref = arr</code>은 복사가 아니라 <strong>참조</strong> — 같이 바뀜!',
        '객체도 동일: <code>{ ...obj }</code>로 새 객체 생성',
      ],
    },
  },
  {
    id: 31,
    category: 'spread',
    categoryLabel: 'Spread/Rest',
    question: '두 객체를 합치는 문법을 채우고 실행해보세요. 겹치는 키는 어떻게 될까요?',
    code:
`const defaults = { theme: 'light', lang: 'ko', fontSize: 16 };
const custom = { theme: 'dark', fontSize: 20 };

// 두 객체 합치기
const settings = { <blank>defaults, <blank>custom };
console.log(settings);
// 겹치는 키(theme, fontSize)는 어느 쪽 값이 될까요?`,
    blanks: ['...', '...'],
    explanation: {
      title: '객체 Spread — 뒤에 오는 게 이긴다',
      points: [
        '같은 키가 겹치면 <strong>뒤에 오는 값이 덮어쓴다</strong>',
        '<code>theme</code>: defaults의 light → custom의 <strong>dark</strong>로 덮어씀',
        '<code>lang</code>: custom에 없으므로 defaults의 <strong>ko</strong> 유지',
        '순서를 바꾸면 결과도 달라진다!',
      ],
    },
  },

  {
    id: 32,
    category: 'spread',
    categoryLabel: 'Spread/Rest',
    question: '원본을 바꾸지 않고 정렬된 새 배열을 만들려면?',
    code:
`const original = [3, 1, 4, 1, 5];

// 1. 먼저 복사본 만들기
const copied = [<blank>original];

// 2. 복사본을 정렬
const sorted = copied.<blank>((a, b) => a - b);

console.log(sorted);    // → [1, 1, 3, 4, 5]
console.log(original);  // → [3, 1, 4, 1, 5] (그대로!)`,
    blanks: ['...', 'sort'],
    explanation: {
      title: 'Spread + sort — 안전한 정렬',
      points: [
        '<code>sort()</code>는 원본을 변경하므로, React 등에서 state를 직접 정렬하면 안 된다',
        '<code>[...arr].sort()</code>로 복사본을 만들어 정렬하면 원본이 안전',
        '<code>slice().sort()</code>도 같은 효과',
        'React에서 목록 정렬 시 이 패턴은 필수!',
      ],
    },
  },

  // ─── Optional Chaining / Nullish Coalescing ───
  {
    id: 33,
    category: 'modern',
    categoryLabel: '?. ??',
    question: 'API 응답에 데이터가 없을 수도 있을 때, 안전하게 접근하려면?',
    code:
`// API에서 유저 정보를 받아옴 — 주소가 없는 유저도 있다!
const userA = { name: '코드잇', address: { city: '서울' } };
const userB = { name: 'Bob', address: null };

// userB.address.city 라고 쓰면 → TypeError!

// 안전하게 접근하기
const cityA = userA.address<blank>city;
console.log(cityA);  // → 서울

const cityB = userB.address<blank>city;
console.log(cityB);  // → undefined (에러 안 남!)`,
    blanks: ['?.', '?.'],
    explanation: {
      title: 'Optional Chaining (?.)',
      points: [
        '왜 TypeError? → <code>null</code>과 <code>undefined</code>는 객체가 아니라서 <code>.</code>으로 프로퍼티를 읽을 수 없다',
        '<code>?.</code>는 앞이 <code>null</code> 또는 <code>undefined</code>이면 에러 대신 <code>undefined</code>를 반환해준다',
        '<code>userB.address</code>가 <code>null</code> → <code>null.city</code>는 <strong>TypeError</strong>, <code>null?.city</code>는 <code>undefined</code>',
        'API 응답은 항상 같은 구조라는 보장이 없다 — 없을 수 있는 필드에는 <code>?.</code> 필수',
        '메서드 호출에도 사용 가능: <code>obj.method?.()</code>',
      ],
    },
  },
  {
    id: 34,
    category: 'modern',
    categoryLabel: '?. ??',
    question: '값이 없을 때 기본값을 넣으려면 어떤 연산자를 쓸까요?',
    code:
`// API에서 유저 설정을 받아옴 — 값이 없으면 null
const savedTheme = null;
const savedLang = undefined;
const savedName = '코드잇';

// 값이 없으면(falsy) 기본값 넣기
const theme = savedTheme <blank> 'light';
console.log(theme);  // → light

const lang = savedLang <blank> 'ko';
console.log(lang);   // → ko

const name = savedName <blank> '익명';
console.log(name);   // → 코드잇 (값이 있으니 그대로!)`,
    blanks: ['||', '||', '||'],
    explanation: {
      title: '|| 로 기본값 설정',
      points: [
        '<code>||</code>는 앞의 값이 <strong>falsy</strong>면 뒤의 값을 반환한다',
        'falsy 값: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code> — 이 6개뿐!',
        '주의: <code>[]</code>(빈 배열)과 <code>{}</code>(빈 객체)는 truthy다 — 비어있어도 "값이 있는 것"으로 본다',
        '값이 있으면(truthy) 앞의 값을 그대로 사용한다',
        '간편하지만 함정이 있다 — <code>0</code>이나 <code>""</code>도 falsy라서 사라진다! (다음 문제에서 확인)',
      ],
    },
  },
  {
    id: 35,
    category: 'modern',
    categoryLabel: '?. ??',
    question: '그런데 || 에는 함정이 있다! 0과 빈 문자열을 유지하려면?',
    code:
`const count = 0;
const empty = null;

// ||는 0도 대체해버린다!
console.log(count || 10);          // → 10 (0이 사라짐!)

// 0은 유지하고 null만 대체하려면?
console.log(count <blank> 10);     // → 0
console.log(empty <blank> '기본'); // → 기본`,
    blanks: ['??', '??'],
    explanation: {
      title: '|| vs ?? — falsy vs nullish',
      points: [
        '<code>||</code>는 <strong>falsy</strong> 전부 대체: <code>0</code>, <code>""</code>, <code>false</code>, <code>null</code>, <code>undefined</code>',
        '<code>??</code>는 <code>null</code>과 <code>undefined</code><strong>만</strong> 대체',
        '<code>0</code>이나 <code>""</code>이 의미 있는 값이면 → <code>??</code> 사용',
        '<code>null</code>일 때는 둘 다 같은 결과',
      ],
    },
  },
  {
    id: 36,
    category: 'modern',
    categoryLabel: '?. ??',
    question: '?. 와 ?? 를 조합해서 "있으면 쓰고 없으면 기본값" 패턴을 만들어보세요.',
    code:
`const config = {
  display: { theme: 'dark' },
  sound: null
};

// display.theme이 있으면 쓰고, 없으면 'light'
const displayTheme = config.display<blank>theme;
const theme = displayTheme <blank> 'light';
console.log(theme);  // → dark

// sound가 null → 안전하게 접근 + 기본값
const soundLevel = config.sound<blank>level;
const volume = soundLevel <blank> 50;
console.log(volume);  // → 50`,
    blanks: ['?.', '??', '?.', '??'],
    explanation: {
      title: '?. + ?? 조합 패턴',
      points: [
        '<code>?.</code>로 안전하게 접근 → 없으면 <code>undefined</code> → <code>??</code>로 기본값',
        '읽는 순서: "있으면 쓰고(<code>?.</code>), 없으면 기본값(<code>??</code>)"',
        '<code>config.sound?.level</code> → <code>null?.level</code> → <code>undefined</code> → <code>?? 50</code> → <code>50</code>',
        '이 패턴은 설정값, API 응답 처리에서 매우 자주 사용된다',
        '<code>||</code>를 써도 될까? → 대부분 같지만, <code>theme: ""</code>이나 <code>level: 0</code>처럼 falsy한 값이 들어오면 <code>||</code>는 기본값으로 덮어쓴다. <code>??</code>가 더 안전!',
      ],
    },
  },
  {
    id: 37,
    category: 'modern',
    categoryLabel: '?. ??',
    question: 'find로 못 찾았을 때 ?. 와 ?? 로 안전하게 처리해보세요.',
    code:
`const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
];

// 이름이 'Dan'인 유저 찾기 — 없다!
const dan = users.find(u => u.name === 'Dan');
console.log(dan);  // → undefined

// dan.age 라고 쓰면 → TypeError!
// 안전하게 나이를 꺼내고, 없으면 0으로 처리하려면?
const danAge = dan<blank>age;
const safeDanAge = danAge <blank> 0;
console.log(safeDanAge);  // → 0

// 있는 유저도 같은 패턴으로!
const alice = users.find(u => u.name === 'Alice');
const aliceAge = alice<blank>age;
const safeAliceAge = aliceAge <blank> 0;
console.log(safeAliceAge);  // → 25`,
    blanks: ['?.', '??', '?.', '??'],
    explanation: {
      title: 'find + ?. + ?? — 실전 조합',
      points: [
        '<code>find</code>는 못 찾으면 <code>undefined</code> → 바로 프로퍼티 접근하면 <strong>TypeError</strong>',
        '<code>?.</code>로 안전하게 접근: <code>undefined?.age</code> → <code>undefined</code> (에러 안 남)',
        '<code>??</code>로 기본값: <code>undefined ?? 0</code> → <code>0</code>',
        'API 응답에서 데이터를 찾아 쓸 때 이 패턴은 거의 필수!',
      ],
    },
  },

  // ─── 종합 ───
  {
    id: 38,
    category: 'final',
    categoryLabel: '종합',
    question: '종합 — API 응답에서 서울 거주 유저의 이름 목록을 만들어보세요.',
    code:
`// API에서 받아온 유저 목록
const users = [
  { id: 1, name: 'Alice', address: { city: '서울' } },
  { id: 2, name: 'Bob', address: null },
  { id: 3, name: 'Charlie', address: { city: '부산' } },
  { id: 4, name: 'Dan', address: { city: '서울' } },
];

// 1. 주소가 있는 유저만 걸러내기 (address가 null일 수 있음!)
const hasAddress = users.<blank>(u => u.address !== null);

// 2. 서울 거주자만 걸러내기
const seoulUsers = hasAddress.<blank>(u => u.address.city === '서울');

// 3. 이름만 뽑기
const names = seoulUsers.<blank>(u => u.name);
console.log(names);  // → ['Alice','Dan']`,
    blanks: ['filter', 'filter', 'map'],
    explanation: {
      title: '종합 — API 응답 데이터 가공',
      points: [
        '1단계: <code>filter</code>로 address가 null인 유저 제거 — 안 하면 다음 단계에서 TypeError',
        '2단계: <code>filter</code>로 서울 거주자만 걸러내기',
        '3단계: <code>map</code>으로 이름만 뽑아서 새 배열 만들기',
        '변수에 각 단계를 저장하면 디버깅도 쉽고 의도도 명확하다',
      ],
    },
  },
  {
    id: 39,
    category: 'final',
    categoryLabel: '종합',
    question: '종합 — API 응답에서 유저 프로필 카드 데이터를 만들어보세요.',
    code:
`const users = [
  { id: 1, name: 'Alice', age: 25, address: { city: '서울' } },
  { id: 2, name: 'Bob', age: null, address: null },
  { id: 3, name: 'Charlie', age: 30, address: { city: '부산' } },
];

// 각 유저를 프로필 카드 형태로 변환
const profiles = users.<blank>(({ <blank>, <blank>, <blank> }) => {
  const safeAge = age <blank> '나이 미공개';
  const safeCity = address<blank>city <blank> '지역 미공개';
  return { name, age: safeAge, city: safeCity };
});

console.log(profiles);
// → [
//   {name:'Alice', age:25, city:'서울'},
//   {name:'Bob', age:'나이 미공개', city:'지역 미공개'},
//   {name:'Charlie', age:30, city:'부산'}
// ]`,
    blanks: ['map', 'name', 'age', 'address', '??', '?.', '??'],
    explanation: {
      title: '종합 — 구조 분해 + ?. + ?? + map',
      points: [
        '<code>map</code> 콜백에서 구조 분해로 필요한 필드만 꺼냄',
        '<code>age ?? "나이 미공개"</code> → null이면 기본값',
        '<code>address?.city ?? "지역 미공개"</code> → null 안전 접근 + 기본값',
        '실제 웹 서비스에서 API 응답을 UI에 맞게 가공하는 전형적인 패턴!',
      ],
    },
  },
];
