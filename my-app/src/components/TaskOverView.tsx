import { Box, Grid } from "@mui/material";
import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { TaskView } from "./TaskView";
import React from "react";

interface ITaskOverView {
  scheduleData: IPersonAssignmentList[];
}
export const TaskOverView = (props: ITaskOverView) => {
  let scheduleData: IPersonAssignmentList[] = props.scheduleData;
  const getWednesdayDate = () => {
    const today = new Date();
    let wednesday;
    const dayNumber = today.getDay() === 0 ? 7 : today.getDay();

    //guard Clauses
    if (dayNumber < 3) {
      const numberToAdd = 3 - dayNumber;
      today.setDate(today.getDate() + numberToAdd);
      wednesday = today;
      return wednesday;
    }

    if (dayNumber > 3) {
      const numberToSubtract = dayNumber - 3;
      today.setDate(today.getDate() - numberToSubtract);
      wednesday = today;
      return wednesday;
    }
    return today;
  };
  const getSundayDate = () => {
    const today = new Date();
    let sunday;
    const dayNumber = today.getDay() === 0 ? 7 : today.getDay();

    if (dayNumber < 7) {
      const numberToAdd = 7 - dayNumber;
      today.setDate(today.getDate() + numberToAdd);
      sunday = today;
      return sunday;
    }

    return today;
  };

  const getTodayTasks = (date: Date) => {
    const day = date.toDateString();
    const taskData = scheduleData.filter(
      (data) => new Date(data.day).toDateString() === day
    );

    return taskData;
  };
  const getNextWeekTask = (date: Date) => {
    date.setDate(date.getDate() + 7);
    let nextWeekTask = date;
    const nextWeekTaskData = scheduleData.filter(
      (data) =>
        new Date(data.day).toDateString() === nextWeekTask.toDateString()
    );
    return nextWeekTaskData;
  };
  const wednesday = getWednesdayDate();
  const sunday = getSundayDate();
  return (
    <Box>
      <Grid container sx={{ padding: "15px" }}>
        <Grid
          item
          xs={6}
          sx={{
            padding: "15px",
            borderRadius: "10px",
            border: "8px solid",
            borderImage:
              "linear-gradient(to left,rgba(104, 85, 224, 1),#e055b1)1 0",
          }}
        >
          <TaskView
            taskData={getTodayTasks(wednesday)}
            nextWeekTaskData={getNextWeekTask(wednesday)}
            userName="Brian Teka Sala"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            padding: "15px",
            borderRadius: "10px",
            border: "8px solid",
            borderImage:
              "linear-gradient(to left,rgba(104, 85, 224, 1),#e055b1)1 0",
          }}
        >
          <TaskView
            userName="Brian Teka Sala"
            taskData={getTodayTasks(sunday)}
            nextWeekTaskData={getNextWeekTask(sunday)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
