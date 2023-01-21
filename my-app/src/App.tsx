import { Box } from "@mui/material";
import "./App.css";
import { Login } from "./components/Login";
import { NavigationLink } from "./components/NavigationLink";

function App() {
  return (
    <Box>
     <NavigationLink navigationText="sign up"/>
      <Box>
      <Login />
      </Box>
    </Box>
  );
}

export default App;
