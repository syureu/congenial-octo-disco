const Button = ({ text, color = "black", children }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;

// react-dom_client.js?v=bf77cf82:519 Warning: Button: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
// Button.defaultProps = {
//   color: "black",
// };
