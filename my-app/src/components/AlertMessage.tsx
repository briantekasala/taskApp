import { Alert, AlertTitle, Box } from "@mui/material";
import { NavigationLink } from "./NavigationLink";
import React from "react";

export interface ISuccessMessage {
  navigationText: string;
  floatValue: string;
  text: string;
  fillInCorrect: boolean;
  userName: string;
  setCompletedForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertMessage = (props: ISuccessMessage) => {
  const {
    navigationText,
    floatValue,
    text,
    fillInCorrect,
    userName,
    setCompletedForm,
  } = props;
  return (
    <Box>
      {!fillInCorrect ? (
        <Box>
          <Alert severity="error">
            <AlertTitle>Login Fail</AlertTitle>
            The user that your are trying to login doesn't exist. {""}
            Try to login again. {""}
            <strong> click to Login!</strong>
          </Alert>
          <Box
            sx={{
              float: `${floatValue}`,
              cursor: "pointer",
              backgroundColor: "rgba(104, 85, 224, 1)",
              border: 0,
              borderRadius: "4px",
              fontWeight: 600,
              margin: "10px 10px",
              width: "200px",
              padding: "10px 0",
              boxShadow: "0 0 20px rgba(104,85,224,0.2)",
              transition: "0.4s",
              textAlign: "center",
              textTransform: "uppercase",
              color:"white"
            }}
            onClick={() => setCompletedForm((prevState) => !prevState)}
          >
            Login
          </Box>
        </Box>
      ) : (
        <Box>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            You have successfully signed {""}
            <strong> click to {text}!</strong>
          </Alert>
          <NavigationLink
            navigationText={navigationText}
            floatValue={floatValue}
            userName={userName}
          />
        </Box>
      )}
    </Box>
  );
};
