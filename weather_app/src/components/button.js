const Button = (props) => {
  
    return (
      <button className={props.class}style={props.style} onClick={props.handleClick}>{props.buttonname}</button>
    );
  };
  
  export default Button; 
