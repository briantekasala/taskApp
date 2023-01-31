import { Box } from "@mui/material";
import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { TaskInformation } from "./TaskInformation";

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
        key={`${userName}-Information`}
        data={taskData}
        task={task}
        userName={userName}
      />
      <TaskInformation
        key={`${userName}-Information`}
        data={nextWeekTaskData}
        task={nextWeekTask}
        userName={userName}
      />
    </Box>
  );
};
