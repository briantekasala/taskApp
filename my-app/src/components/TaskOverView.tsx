import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { TaskView } from "./TaskView";

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
      console.log(wednesday);
      return wednesday;
    }
    return today;
  };
  const getSundayDate = () => {
    const today = new Date(2023, 0, 30);
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
    const taskData = scheduleData.filter((data) => data.day === day);
    return taskData;
  };
  const getNextWeekTask = (date: Date) => {
    date.setDate(date.getDate() + 7);
    let nextWeekTask = date;
    const nextWeekTaskData = scheduleData.filter(
      (data) => data.day === nextWeekTask.toDateString()
    );
    return nextWeekTaskData;
  };
  const wednesday = getWednesdayDate();
  const sunday = getSundayDate();
  return (
    <Box>
      <Grid container>
        <Grid item xs={6} sx={{ padding:"15px"}}>
          <TaskView
            taskData={getTodayTasks(wednesday)}
            nextWeekTaskData={getNextWeekTask(wednesday)}
            userName="Brian Teka Sala"
          />
        </Grid>
        <Grid item xs={6} sx={{ padding:"15px"}}>
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
