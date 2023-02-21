import { Box } from "@mui/material";
import { FillInForm } from "../components/FillInForm";
import { NavigationLink } from "../components/NavigationLink";
import React, { useState } from "react";
import { AlertMessage } from "../components/AlertMessage";

export const SignUp = () => {
  const [completedForm, setCompletedForm] = useState<boolean>(false);
  const [fillInCorrect, setFillInCorrect] = useState<boolean>(false);
  const [userName , setUserName] = useState<string>("");
  return (
    <Box>
      {!completedForm ? (
        <Box>
          <NavigationLink navigationText="Login" floatValue="right" userName="" />
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "35%",
              width: 500,
              height: 500,
            }}
          >
            <FillInForm
              type="sign Up"
              formTitle="Sign up"
              setCompletedForm={setCompletedForm}
              setFillInCorrect={setFillInCorrect}
              setUserName={setUserName}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: 500, justifyContent: "center", margin: "auto auto" }}>
          <AlertMessage
            navigationText="Login"
            floatValue=""
            text="Login"
            fillInCorrect={fillInCorrect}
            setCompletedForm={setCompletedForm}
            userName={userName}
          />
        </Box>
      )}
    </Box>
  );
};
