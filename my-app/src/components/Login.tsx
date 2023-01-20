import { Box } from "@mui/material";
import { From } from "./From";

export const Login = () => {
  return (
    <Box
      sx={{
        position:"absolute",
        top:"25%",
        left:"35%",
        border: "solid 5px",
        width: 500,
        height: 500,
      }}
    >
      <From type="login" />
    </Box>
  );
};
