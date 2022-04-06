import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
// import Card from "@mui/material/Card";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Shift from "./Shift";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
import DataTable from "./DataTable"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#14213D",
    color: theme.palette.common.white,
    textAlign: "center",
    borderTop: "none",
    borderLeft: "1px solid white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: "nowrap",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Size,
  TreadIdentification,
  Lot,
  Quantity,
  Weight,
  compoundCode,
  pullScaleReading,
  screwRPM,
  ConveyorMpm,
  OnlineWeight,
  BookingTime,
  DieNo,
  UTDetails,
  UT2Details,
  UT3Details,
  UT4Details
) {
  return {
    Size,
    TreadIdentification,
    Lot,
    Quantity,
    Weight,
    compoundCode,
    pullScaleReading,
    screwRPM,
    ConveyorMpm,
    OnlineWeight,
    BookingTime,
    DieNo,
    UTDetails,
    UT2Details,
    UT3Details,
    UT4Details,
  };
}

const rows = [
  createData(
    "Frozen",
    159,
    6.0,
    24,
    4.0,
    59,
    63,
    37,
    22,
    3,
    49,
    5,
    99,
    48,
    35.88,
    34,
    12
  ),
  createData(
    "Ice cream",
    237,
    9.0,
    37,
    4.3,
    237,
    9.0,
    37,
    4.3,
    237,
    9.0,
    237,
    9.0,
    37,
    4.3,
    2
  ),
  createData(
    "Eclair",
    262,
    16.0,
    24,
    6.0,
    24,
    4.0,
    59,
    63,
    37,
    22,
    3,
    49,
    24,
    4.0,
    59
  ),
  createData(),
  createData(),
];

export default function NormalTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          marginTop: "-80px",
          width: "95%",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Table aria-label="customized table">
          <TableHead style={{ whiteSpace: "nowrap" }}>
            <TableRow>
              <StyledTableCell>Size</StyledTableCell>
              <StyledTableCell>Tread Identification</StyledTableCell>
              <StyledTableCell>Lot no</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Weight</StyledTableCell>
              <StyledTableCell>Compound Code</StyledTableCell>
              <StyledTableCell>Pull scale reading</StyledTableCell>
              <StyledTableCell>Screw RPM</StyledTableCell>
              <StyledTableCell>Conveyor MPM</StyledTableCell>
              <StyledTableCell>Online Weight</StyledTableCell>
              <StyledTableCell>Booking Time</StyledTableCell>
              <StyledTableCell>Die no</StyledTableCell>
              <StyledTableCell>UT Details</StyledTableCell>
              <StyledTableCell>UT2 Details</StyledTableCell>
              <StyledTableCell>UT3 Details</StyledTableCell>
              <StyledTableCell>UT4 Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow>
                <StyledTableCell>{row.Size}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.TreadIdentification}
                </StyledTableCell>
                <StyledTableCell>{row.Lot}</StyledTableCell>
                <StyledTableCell>{row.Quantity}</StyledTableCell>
                <StyledTableCell>{row.Weight}</StyledTableCell>
                <StyledTableCell>{row.compoundCode}</StyledTableCell>
                <StyledTableCell>{row.pullScaleReading}</StyledTableCell>
                <StyledTableCell>{row.screwRPM}</StyledTableCell>
                <StyledTableCell>{row.ConveyorMpm}</StyledTableCell>
                <StyledTableCell>{row.OnlineWeight}</StyledTableCell>
                <StyledTableCell>{row.BookingTime}</StyledTableCell>
                <StyledTableCell>{row.DieNo}</StyledTableCell>
                <StyledTableCell>{row.UTDetails}</StyledTableCell>
                <StyledTableCell>{row.UT2Details}</StyledTableCell>
                <StyledTableCell>{row.UT3Details}</StyledTableCell>
                <StyledTableCell>{row.UT4Details}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DataTable/>
    </>
  );
}
