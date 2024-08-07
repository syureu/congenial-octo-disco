// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
const Main = () => {
  const number = 9;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {10}
      {number}
      {[1, 2, 3]}
      {true}
      {undefined}
      {null}
      {/* {obj} */}
      {obj.a}
    </main>
  );
};

export default Main;
