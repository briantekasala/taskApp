import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export interface INavigation {
    navigationText: string;
}
export const NavigationLink = (props :INavigation)=> {
    const {navigationText} = props
    return (
        <Box sx={{ float: "right", margin: 10, cursor: "pointer" }}>
        <Link to={`/${navigationText}`}> {navigationText}</Link>
      </Box>
    )
}