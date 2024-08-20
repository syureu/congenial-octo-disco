const Button = ({ text, color }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: "black",
};
