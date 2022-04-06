import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Size", headerName: "Size", width: 130 },
  {
    field: "TreadIdentification",
    headerName: "Tread identification",
    width: 150,
  },
  { field: "LotNo", headerName: "Lot no", width: 70 },
  { field: "Quantity", headerName: "Quantity", width: 80 },
  { field: "Weight", headerName: "Weight", width: 80 },
  { field: "CompoundCode", headerName: "Compound code", width: 140 },
  { field: "PullScaleReading", headerName: "Pull scale reading", width: 140 },
  { field: "ScrewRPM", headerName: "Screw RPM", width: 110 },
  { field: "ConveyorMPM", headerName: "Conveyor MPM", width: 130 },
  { field: "OnlineWeight", headerName: "Online weight", width: 120 },
  { field: "BookingTime", headerName: "Booking Time", width: 120 },
  { field: "DieNo", headerName: "Die no", width: 70 },
  { field: "UTDetails", headerName: "UT Details", width: 110 },
];

const rows = [
  {
    id: 1,
    Size: "Snow",
    TreadIdentification: "Jon",
    LotNo: 35,
    Quantity: 10,
    Weight: 34,
    CompoundCode: "#123",
    PullScaleReading: "Ok",
    ScrewRPM: "200",
    ConveyorMPM: "100",
    OnlineWeight: 50,
    BookingTime: "12:00 IST",
    DieNo: 2,
    UTDetails: "None",
  },
  {
    id: 2,
    Size: "Fire",
    TreadIdentification: "dube",
    LotNo: 68,
    Quantity: 15,
    Weight: 55,
    CompoundCode: "#674",
    PullScaleReading: "Not Ok",
    ScrewRPM: "180",
    ConveyorMPM: "130",
    OnlineWeight: 10,
    BookingTime: "02:00 IST",
    DieNo: 8,
    UTDetails: "None",
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%", marginTop: "30px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
