import { Box, Typography } from "@mui/material";

interface ITaskDisplay {
  userName: string;
}

export const TaskDisplay = (props: ITaskDisplay) => {
  const { userName } = props;
  return (
    <Box>
      <Typography>{userName}</Typography>
    </Box>
  );
};
