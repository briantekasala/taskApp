import { Box } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import { Link } from "react-router-dom";

export interface INavigation {
  navigationText: string;
}
export const NavigationLink = (props: INavigation) => {
  const { navigationText } = props;
  return (
    <Box
      sx={{
        float: "right",
        cursor: "pointer",
        backgroundColor: "rgba(104, 85, 224, 1)",
        border: 0,
        borderRadius: "4px",
        fontWeight: 600,
        margin: "10px 10px",
        width: "200px",
        padding: "10px 0",
        boxShadow: "0 0 20px rgba(104,85,224,0.2)",
        transition: "0.4s",
        textAlign: "center",
        textTransform: "uppercase"
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/${navigationText}`}
      >
        <Typography variant="body1">{navigationText}</Typography>
      </Link>
    </Box>
  );
};
