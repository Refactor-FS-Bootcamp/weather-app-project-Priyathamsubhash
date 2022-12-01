import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import CustomLayout from "./components/CustomLay";

function App() {
  return (
    <div className="App">
      <CustomLayout />
      <AppRoutes />
    </div>
  );
}
export default App;
