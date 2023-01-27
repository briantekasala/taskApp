import { Box, ListItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List/List";
import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { PersonAssignment } from "./PersonAssignement";

interface ISchedulingOverview {
  scheduleData: IPersonAssignmentList[];
}
export const SchedulingOverview = (props: ISchedulingOverview) => {
  const { scheduleData } = props;
  return (
    <Box>
      <Grid sx={{ border: "solid", padding: "10px" }} container spacing={2}>
        <Grid item>
          <List sx={{ fontWeight: "bold" }}>
            <ListItem>Datum</ListItem>
            <ListItem sx={{ backgroundColor: "#4472C4" }}>
              Micro Gauche
            </ListItem>
            <ListItem sx={{ backgroundColor: "#f79646" }}>
              Micro Droite
            </ListItem>
            <ListItem sx={{ backgroundColor: "#4bacc6" }}>
              Micro Poduim
            </ListItem>
            <ListItem sx={{ backgroundColor: "#9bbb59" }}>Acceuil</ListItem>
            <ListItem sx={{ backgroundColor: "#e66c7d" }}>Sono</ListItem>
          </List>
        </Grid>
        {scheduleData.map((data: IPersonAssignmentList) => {
          return <PersonAssignment personAssignment={data} />;
        })}
      </Grid>
    </Box>
  );
};
