import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import zIndex from "@mui/material/styles/zIndex";
// import Analytics from './Analytics';
//import Grid from "@mui/material/Grid";

function App() {

  // const [count, setCount] = useState(0);


  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <Card sx={{ background: "#c3f7eb", margin: "10% 25%" }}> 
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5" sx={{ fontFamily: "segoe ui black" }}>
              welcome back, stark
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontFamily: "segoe ui " }}
            >
              This is your property portfolio report
            </Typography>
            <Card style={{marginTop:"15px", background: "#fbf9f3"}} elevation="10">              
            <div style={{float:"left", width:"20%", height:"5%"}}>
                <p style={{margin:"20px"}}>Property total<h1 style={{marginTop:"12px"}} >0</h1></p>
            </div> 
              
             <div style={{float:"left",  width:"12%", height:"10%"}} >
            <p>
                <h6 style={{margin:"20px 0 -2px 2px", borderLeft:"3px solid #002e00"}} >&nbsp;54 <span style={{color:"#939393"}}>Vacant</span></h6>
                <h6 style={{margin:"20px 0 -2px 2px", borderLeft:"3px solid #00a8a8"}} >&nbsp;32 <span style={{color:"#939393"}}>Occupied</span></h6>
            </p>
            </div>
            <div style={{float:"left", width:"20%", height:"5%"}}>
                <p style={{margin:"20px", paddingLeft:"8px" ,borderLeft:"2px solid #99a799"}}>Property total<h1 style={{marginTop:"12px"}} >100</h1></p>
            </div> 
              
             <div style={{float:"left",  width:"12%", height:"10%"}} >
            <p style={{}}>
                <h6 style={{margin:"20px 0 -2px 2px", borderLeft:"3px solid #00ad00"}} >&nbsp;63 <span style={{color:"#939393"}}>Vacant</span></h6>
                <h6 style={{margin:"20px 0 -2px 2px", borderLeft:"3px solid #00002e"}} >&nbsp;78<span style={{color:"#939393"}}>Occupied</span></h6>
                <h6 style={{margin:"20px 0 -2px 2px", borderLeft:"3px solid purple"}} >&nbsp;31 <span style={{color:"#939393"}}>Unlisted</span></h6>
            </p>
            </div>   
            <div>
            <CardContent
                component="img"
                sx={{
                  position:"absolute",
                  height: 270,
                  width: 250,
                  float: "right",
                  margin: "-5% 1%"
                }}
                src="building.png"
              />
        </div>
        </Card>
        <div style={{margin: "7px 10px -20px 2px"}}><p>Last updated : 3 days ago</p></div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;


