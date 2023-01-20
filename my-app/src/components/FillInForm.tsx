import { Card, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CreateIcon from "@mui/icons-material/Create";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

interface IForm {
  type: string;
}

export const FillInForm = (props: IForm) => {
  const { type } = props;
  return (
    <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
      <CardContent>
        <Grid container spacing={4}>
          <Grid xs={12} item>
            <TextField
              label="user name"
              placeholder="enter your username"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="password"
              placeholder="enter your password"
              fullWidth
              required
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
  );
};
