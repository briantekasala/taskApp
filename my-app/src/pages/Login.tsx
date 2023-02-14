import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import { FillInForm } from "../components/FillInForm";
import React, { useState } from "react";

import { AlertMessage } from "../components/AlertMessage";

export const Login = () => {
  const [completedForm, setCompletedForm] = useState<boolean>(false);
  const [fillInCorrect, setFillInCorrect] = useState<boolean>(false);
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
      {!completedForm ? (
        <FillInForm
          type="login"
          formTitle="Login"
          setCompletedForm={setCompletedForm}
          setFillInCorrect={setFillInCorrect}
        />
      ) : (
        <AlertMessage
          navigationText="planning"
          floatValue=""
          text="see the planning"
          fillInCorrect={fillInCorrect}
          setCompletedForm={setCompletedForm}
        />
      )}
    </Box>
  );
};
