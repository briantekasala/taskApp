import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <Box sx={{ float: "right", margin: 10, cursor: "pointer" }}>
        <Link to="/signup">Create Account </Link>
      </Box>
      <div>
      <Login />
      </div>
     
    </div>
  );
}

export default App;
