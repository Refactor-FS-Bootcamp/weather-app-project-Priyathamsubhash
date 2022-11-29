import Button from "./button";
const Nav = () => {
  return (
    <div>
    <div className="wrapper">
      <div className="Heading">
        <h2>My Favourite Cities</h2>
        <p>You have not selected any city as a favourite yet</p>
        </div>
      <div className="right-container">
        <div>
          <Button buttonname="Add New City" class="addnewcity"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;
