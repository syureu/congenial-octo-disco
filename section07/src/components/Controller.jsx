import Button from "./Button";

function Controller({ onClickButton }) {
  return (
    <div>
      <Button onClick={onClickButton} controllNumber={-1} />
      <Button onClick={onClickButton} controllNumber={-10} />
      <Button onClick={onClickButton} controllNumber={-100} />
      <Button onClick={onClickButton} controllNumber={+100} />
      <Button onClick={onClickButton} controllNumber={+10} />
      <Button onClick={onClickButton} controllNumber={+1} />
    </div>
  );
}

export default Controller;
