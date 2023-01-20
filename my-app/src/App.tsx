import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { NavigationLink } from "./components/NavigationLink";

function App() {
  return (
    <div>
     <NavigationLink navigationText="sign up"/>
      <div>
      <Login />
      </div>
     
    </div>
  );
}

export default App;
