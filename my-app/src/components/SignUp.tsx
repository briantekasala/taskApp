import { Box } from "@mui/material";
import { FillInForm } from "./FillInForm";
import { NavigationLink } from "./NavigationLink";

export const SignUp = () => {
  return (
    <Box>
      <NavigationLink navigationText="home" />
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "35%",
          width: 500,
          height: 500,
        }}
      >
        <FillInForm type="sign Up" formTitle="Sign up" />
      </Box>
    </Box>
  );
};
