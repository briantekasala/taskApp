import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { CreatePlanning } from "../components/planningManagement/CreatePlanning";
import { UpdatePlanning } from "../components/planningManagement/UpdatePlanning";
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ textAlign: "center", padding: "15px" }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const PlanningManagement = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 500,
        margin: "auto auto",
        padding: "15px",
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ backgroundColor: "#e055b1" }}
        >
          <Tab
            icon={<AddBoxRoundedIcon />}
            sx={{ color: "white", focus: { color: "white" } }}
            label="create planning"
            {...a11yProps(0)}
          />
          <Tab
            icon={<ModeEditOutlineRoundedIcon />}
            sx={{ color: "white" }}
            label="update planning"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <CreatePlanning />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UpdatePlanning />
      </TabPanel>
    </Box>
  );
};
