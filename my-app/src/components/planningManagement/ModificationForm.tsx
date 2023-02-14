import React from "react";
import { Box, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { IPersonAssignmentList } from "../../utils/personAssignmentList";
import { DateSelector } from "./DateSelector";
import CreateIcon from "@mui/icons-material/Create";
import { useForm } from "react-hook-form";
import { IPersonAssignment } from "../PersonAssignement";
import { ScheduleService } from "../../services/scheduleService";

interface IModificationForm {
  personAssignmentData?: IPersonAssignmentList[];
  setAddedItem: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModificationForm = (props: IModificationForm) => {
  let createUser = new ScheduleService("http://localhost:3008");
  const { setAddedItem } = props;
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    createUser.makeSchedule(data);
    setAddedItem((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid xs={12} item>
                <DateSelector control={control} />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="nameMicroG"
                  placeholder="name of person micro gauche"
                  fullWidth
                  required
                  {...register("nameMicroG")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="nameMicroD"
                  placeholder="name of person micro droite"
                  fullWidth
                  required
                  {...register("nameMicroD")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="microPodium"
                  placeholder="name of person for micro podium"
                  fullWidth
                  required
                  {...register("microPodium")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="usher"
                  placeholder="name of person for acceuil"
                  fullWidth
                  required
                  {...register("usher")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="sono"
                  placeholder="name of person for the sono"
                  fullWidth
                  required
                  {...register("sono")}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  color="primary"
                  startIcon={<CreateIcon />}
                  variant="outlined"
                  fullWidth
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
};
