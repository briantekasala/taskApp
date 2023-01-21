import { Box } from "@mui/system";
import { SchedulingOverview } from "../components/SchedulingOverview";
import { Task } from "../components/Taks";

export const Schedule = () => {
  return (
    <Box>
      <Box>
        <SchedulingOverview />
      </Box>
      <Task />
    </Box>
  );
};
