import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { IPersonAssignmentList } from "../utils/personAssignmentList";
import React from "react";
export interface IPersonAssignment {
  personAssignment: IPersonAssignmentList;
}
export const PersonAssignment = (props: IPersonAssignment) => {
  const { personAssignment } = props;
  const date = new Date(personAssignment.day);
  return (
    <Grid item>
      <List>
        <ListItem>{date.toDateString()}</ListItem>
        <ListItem sx={{ backgroundColor: "#4472C4", color: "white" }}>
          {personAssignment.nameMicroG}
        </ListItem>
        <ListItem sx={{ backgroundColor: "#f79646", color: "white" }}>
          {personAssignment.nameMicroD}
        </ListItem>
        <ListItem sx={{ backgroundColor: "#4bacc6", color: "white" }}>
          {personAssignment.microPodium}
        </ListItem>
        <ListItem sx={{ backgroundColor: "#9bbb59", color: "white" }}>
          {personAssignment.usher}
        </ListItem>
        <ListItem sx={{ backgroundColor: "#e66c7d", color: "white" }}>
          {personAssignment.sono}
        </ListItem>
      </List>
    </Grid>
  );
};
