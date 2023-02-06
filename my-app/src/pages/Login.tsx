import { Box } from "@mui/material";
import { FillInForm } from "../components/FillInForm";
import React from "react";

export const Login = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "25%",
        left: "35%",
        width: 500,
        height: 500,
      }}
    >
      <FillInForm type="login" formTitle="Login" />
    </Box>
  );
};
