import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  const test = 34;
  const value = false;
  return (
    <div>
      <div className="container">
        {/* <h4 style={{ color: "red", fontSize: "25px" }}>App component</h4>
        <h4 className="header">App component</h4>  */}

        <h4>App component</h4>

        <Navbar title ="user app"/>

        <User 
        
        name="Busra"
        departman="eğitim"
        maas="8k"
        
        />

      </div>
    </div>
  );
}

export default App;
