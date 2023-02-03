import React from "react";
import { Box, Card, CardContent, Grid, TextField } from "@mui/material";
import { IPersonAssignmentList } from "../../utils/personAssignmentList";
import { DateSelector } from "./BasicDatePicker";

interface IModificationForm {
  personAssignmentData?: IPersonAssignmentList[];
}

export const ModificationForm = (props: IModificationForm) => {
  return (
    <Box>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid xs={12} item>
              <DateSelector />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="nameMicroG"
                placeholder="name of person micro gauche"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="nameMicroD"
                placeholder="name of person micro droite"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="microPodium"
                placeholder="name of person for micro podium"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="usher"
                placeholder="name of person for acceuil"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="sono"
                placeholder="name of person for the sono"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
