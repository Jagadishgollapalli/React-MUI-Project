import React from "react";
import Card from "@mui/material/Card";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
import Shift from "./Shift";
import Date from "./Date";
import DataTable from "./DataTable";


function CompleteForm() {
  return (
    <>
      <Card
        style={{ backgroundColor: "#BEF794", height: "180px " }}
        elevation={20}
      >
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>HOT FEED EXTRUDER LOG BOOK</h2>
        </div>
        <div id="boxes">
          <div style={{ float: "left", width: "30%", marginLeft: "5%" }}>
            <Date/>
          </div>
          <div style={{ float: "left", width: "30%" }}>
            <Shift />
          </div>
          <div style={{ float: "left", width: "30%"}}>
            <Shift />
          </div>
        </div>
      </Card>
      <DataTable/>
    </>
  );
}

export default CompleteForm;
