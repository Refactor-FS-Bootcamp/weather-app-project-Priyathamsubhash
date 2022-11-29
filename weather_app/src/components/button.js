const Button = (props) => {
    const {data} = props;
  
    return (
      <button className="btn-container" >
        {data}
      </button>
    );
  };
  
  export default Button; 