import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SchedulingOverview } from "../components/SchedulingOverview";
import { TaskOverView } from "../components/TaskOverView";
import { ScheduleService } from "../services/scheduleService";
import { IPersonAssignmentList } from "../utils/personAssignmentList";

export const Schedule = () => {
  const api: string = "http://localhost:3008";
  const [dbSchedule, setDbSchedule] = useState<IPersonAssignmentList[]>([]);
  const location = useLocation()
  const {user}=location.state
  
  useEffect(() => {
    const getScheduleList = async () => {
      const scheduleList = new ScheduleService(api);
      setDbSchedule(await scheduleList.getScheduleService());
    };
    getScheduleList();
  }, []);
  return (
    <Box>
      <Box>
        <SchedulingOverview scheduleData={dbSchedule} />
        <TaskOverView scheduleData={dbSchedule} user={user} />
      </Box>
    </Box>
  );
};
