import { Card, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CreateIcon from "@mui/icons-material/Create";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormService } from "../services/formService";

interface IForm {
  type: string;
  formTitle: string;
  setCompletedForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFillInCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName:React.Dispatch<React.SetStateAction<string>>
}

export const FillInForm = (props: IForm) => {
  const { type, formTitle, setCompletedForm, setFillInCorrect,setUserName } = props;
  const formMethods = new FormService("http://localhost:3008");

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    if (type === "sign Up") {
      formMethods.signUp(data);
      setCompletedForm((prevState) => !prevState);
      setFillInCorrect((prevStateFillIn) => !prevStateFillIn);
    } else {
      let result = await formMethods.userLogin(data);
      if (result.length === 1) {
        setCompletedForm((prevCompletedFormState) => !prevCompletedFormState);
        setFillInCorrect((prevStateFillIn) => !prevStateFillIn);
        setUserName(result[0].user)
        
      } else {
        setCompletedForm((prevCompletedFormState) => !prevCompletedFormState);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {formTitle}
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            {formTitle} to see your task
          </Typography>
          <Grid container spacing={4}>
            <Grid xs={12} item>
              <TextField
                label="user name"
                placeholder="enter your username"
                fullWidth
                required
                {...register("user")}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="password"
                placeholder="enter your password"
                fullWidth
                required
                type={"password"}
                {...register("password")}
              />
            </Grid>
            {type === "login" ? (
              <Grid xs={12} item>
                <Button
                  type="submit"
                  color="primary"
                  startIcon={<LoginIcon />}
                  fullWidth
                  variant="outlined"
                >
                  Login
                </Button>
              </Grid>
            ) : (
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="email"
                  placeholder="enter your email address"
                  fullWidth
                  required
                  {...register("email")}
                />
              </Grid>
            )}
            {type === "sign Up" && (
              <Grid xs={12} item>
                <Button
                  type="submit"
                  color="primary"
                  startIcon={<CreateIcon />}
                  variant="outlined"
                  fullWidth
                >
                  Create
                </Button>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};
