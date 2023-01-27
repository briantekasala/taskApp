import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { SchedulingOverview } from "../components/SchedulingOverview";
import { data } from "../utils/data";
import { IPersonAssignmentList } from "../utils/personAssignmentList";

export const Schedule = () => {
  const [dbSchedule, setDbSchedule] = useState<IPersonAssignmentList[]>([]);
  useEffect(() => {
    setDbSchedule(data);
  }, []);
  return (
    <Box>
      <Box>
        <SchedulingOverview scheduleData={dbSchedule} />
      </Box>
    </Box>
  );
};
