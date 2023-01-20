import { FormControl, InputLabel, Input, Button, Card, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import CardContent from "@mui/material/CardContent";

interface IForm {
  type: string;
}

export const From = (props: IForm) => {
  const { type } = props;
  return (
   <Card>
    <CardContent>
      <TextField label="user name" placeholder="enter your username"/>
      <InputLabel/>
    </CardContent>
   </Card>
  );
};
