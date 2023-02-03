import { Box } from "@mui/material";
import "./App.css";
import { Login } from "./pages/Login";
import { NavigationLink } from "./components/NavigationLink";
import { DateSelector } from "./components/planningManagement/BasicDatePicker";

const App = () => {
  return (
    <Box>
      <NavigationLink navigationText="sign up" />
      <Box>
        <Login />
      </Box>
    </Box>
  );
};

export default App;
