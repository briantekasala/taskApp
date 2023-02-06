import { Box } from "@mui/material";
import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { TaskInformation } from "./TaskInformation";
import React from "react";

interface ITaskDisplay {
  userName: string;
  taskData: IPersonAssignmentList[];
  nextWeekTaskData: IPersonAssignmentList[];
}

export const TaskView = (props: ITaskDisplay) => {
  const { userName, taskData, nextWeekTaskData } = props;
  const getUserTask = (data: IPersonAssignmentList[]) => {
    let taskOfUser = "";
    data.forEach((task) => {
      const entries = Object.entries(task);
      for (const [key, value] of entries) {
        if (value === userName) {
          if (key === "nameMicroG") {
            return (taskOfUser = "microG");
          }
          if (key === "nameMicroD") {
            return (taskOfUser = "microD");
          }
          if (key === "usher") {
            return (taskOfUser = "acceuil");
          }
          taskOfUser = key;
        }
      }
    });
    return taskOfUser;
  };
  getUserTask(taskData);

  const task =
    getUserTask(taskData).charAt(0).toUpperCase() +
    getUserTask(taskData).slice(1);
  const nextWeekTask =
    getUserTask(nextWeekTaskData).charAt(0).toUpperCase() +
    getUserTask(nextWeekTaskData).slice(1);
  return (
    <Box>
      <TaskInformation
        key={`${userName}-Information-1`}
        data={taskData}
        task={task}
        userName={userName}
      />
      <TaskInformation
        key={`${userName}-Information-2`}
        data={nextWeekTaskData}
        task={nextWeekTask}
        userName={userName}
      />
    </Box>
  );
};
