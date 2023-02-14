import { Box } from "@mui/material";
import "./App.css";
import { Login } from "./pages/Login";
import { NavigationLink } from "./components/NavigationLink";
import React from "react";


const App = () => {
  return (
    <Box>
      <NavigationLink navigationText="sign up" floatValue="right" />
      <Box>
        <Login />
      </Box>
    </Box>
  );
};

export default App;
