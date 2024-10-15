import { useState } from "react";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능

const HookExam = () => {
  const state = useState();

  return <div>hookexam</div>;
};

export default HookExam;
