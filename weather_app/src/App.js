import Nav from "./components/nav";
import Sider from "./components/sider";
import "./App.css";

export default function App() {
  const sider_data=[
    {
      Name:"Home"
    },
    {
      Name:"Cities"
   }
  ]
  return (
    <div className="App">
      
      <Sider sider_data={sider_data} />
      <Nav />

    </div> 
  );
}
