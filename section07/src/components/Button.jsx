function Button({ onClick, controllNumber }) {
  return (
    <button
      onClick={() => {
        onClick(controllNumber);
      }}
    >
      {controllNumber > 0 ? "+" + controllNumber : controllNumber}
    </button>
  );
}

export default Button;
