import { Box, Typography } from "@mui/material";
import React from "react";

import { IPersonAssignmentList } from "../utils/personAssignmentList";

interface ITaksInfromation {
  data: IPersonAssignmentList[];
  task: string;
  userName: string;
}

export const TaskInformation = (props: ITaksInfromation) => {
  const { data, task, userName } = props;

  return (
    <>
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center", padding: "10px" }}>
          {data.map((day: IPersonAssignmentList) => {
            const dayOnScreen = new Date(day.day);
            return dayOnScreen.toDateString();
          })}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ textAlign: "center", padding: "5px" }}>
          {task === "" ? "u heeft geen taak" : `${task}:${userName}`}
        </Typography>
      </Box>
    </>
  );
};
