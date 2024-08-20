const Button = (props) => {
  console.log(props);
  return (
    <button style={{ color: props.color }}>
      {props.text} - {props.color.toUpperCase()}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: "black",
};
