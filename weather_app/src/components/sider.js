const Sider = ({sider_data}) => {
    return (
      <div className="sider">
        {sider_data.map((item) => {
        return (
          <div className="sider-content">
            {item.Name}
            <hr />
          </div>
        );
      })}
      </div>
    );
  };
  
  export default Sider;