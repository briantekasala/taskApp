import { Box } from "@mui/material";
import { ModificationForm } from "./ModificationForm";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

export const CreatePlanning = () => {
  const [addedItem, setAddedItem] = useState<boolean>(false);
  console.log(addedItem);
  return (
    <Box>
      {!addedItem ? (
        <ModificationForm setAddedItem={setAddedItem} />
      ) : (
        <Box>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            user's has been add in the list —{" "}
            <strong>click to create new planning!</strong>
          </Alert>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={() => {
              setAddedItem((prevState) => !prevState);
            }}
          > Create </Button>
        </Box>
      )}
    </Box>
  );
};
