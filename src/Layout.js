import React from "react";
import TextField from "@mui/material/TextField";
import Shift from "./Shift";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
//import TopBar from "./TopBar";



function Layout() {
  return (
    <>
    {/* <TopBar/> */}
      <div>
        <h2 style={{ textAlign: "center" }}>
          <b>HOT FEED EXTRUDER LOGBOOK</b>
        </h2>
      </div>
      <div id="boxes">
        <div style={{ float: "left", width: "15%", marginLeft: "135px" }}>
          <p>
            <TextField variant="outlined" color="primary" type="date" />
          </p>
        </div>

        <div style={{ float: "left", width: "30%" }}>
          <p>
            <Shift />
          </p>
        </div>
      </div>

      <Table border="1" cellspacing="0" align="center" style={{ width: "100%"}}>
        <TableRow style={{ backgroundColor: "#e1fbf2"}}>
          <TableCell rowspan="2" align="center" width="20%" height="5">
            Size
          </TableCell>
          <TableCell colspan="2" align="center" width="50" height="5">
            Tread identification
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Lot no
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Quantity
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Weight
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Compound Code
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Full Scale Reading
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Screw RPM
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Conveyor MPM
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Online Weight
          </TableCell>
          <TableCell colspan="2" align="center" width="50" height="5">
            Booking Time
          </TableCell>
          <TableCell rowspan="2" align="center" width="50" height="5">
            Die no
          </TableCell>
          <TableCell
            rowspan="1"
            colspan="3"
            align="center"
            width="150"
            height="5"
          >
            UT Details
          </TableCell>
        </TableRow>
        <TableRow style={{ backgroundColor: "#e1fbf2"}}>
          <TableCell align="center" width="50" height="5">
            Open side
          </TableCell>
          <TableCell align="center" width="50" height="5">
            Server side
          </TableCell>
          <TableCell align="center" width="50" height="5">
            FROM
          </TableCell>
          <TableCell align="center" width="50" height="5">
            TO
          </TableCell>
          <TableCell align="center" width="50" height="5">
            Compound Code
          </TableCell>
          <TableCell align="center" width="50" height="5">
            Width
          </TableCell>
          <TableCell align="center" width="50" height="5">
            Inch
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20">B</TableCell>
          <TableCell align="center" width="50" height="20">C</TableCell>
          <TableCell align="center" width="50" height="20">D</TableCell>
          <TableCell align="center" width="50" height="20">E</TableCell>
          <TableCell align="center" width="50" height="20">F</TableCell>
          <TableCell align="center" width="50" height="20">G</TableCell>
          <TableCell align="center" width="50" height="20">H</TableCell>
          <TableCell align="center" width="50" height="20">I</TableCell>
          <TableCell align="center" width="50" height="20">J</TableCell>
          <TableCell align="center" width="50" height="20">K</TableCell>
          <TableCell align="center" width="50" height="20">L</TableCell>
          <TableCell align="center" width="50" height="20">M</TableCell>
          <TableCell align="center" width="50" height="20">N</TableCell>
          <TableCell align="center" width="50" height="20">O</TableCell>
          <TableCell align="center" width="50" height="20">P</TableCell>
          <TableCell align="center" width="50" height="20">Q</TableCell>
        </TableRow>

        <TableRow>
        <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
        </TableRow>

        <TableRow>
        <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
        </TableRow>

        <TableRow>
        <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
        </TableRow>

        <TableRow>
          <TableCell align="center" width="50" height="30"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
          <TableCell align="center" width="50" height="20"></TableCell>
        </TableRow>
      </Table>
    </>
  );
}

export default Layout;
