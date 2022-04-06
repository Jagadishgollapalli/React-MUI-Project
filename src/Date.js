import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function Date() {
  return (
    <div>
      <FormControl>
        <TextField variant="outlined" color="primary" type="date" />
      </FormControl>
    </div>
  );
}

export default Date;
