import { useState, useEffect } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  // 의존성 배열 (dependency array), deps

  const onClickButton = (controllNumber) => {
    setCount(count + controllNumber);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
