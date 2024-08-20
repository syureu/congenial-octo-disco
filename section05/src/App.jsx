import "./App.css";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button text={"메일"} color={"red"} a={1} b={2} c={3} />
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
