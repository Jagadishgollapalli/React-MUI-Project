import React from 'react';
import Box from '@mui/material/Box';
import { CardContent } from '@mui/material';

function Picture() {
    return (
        <div>
<CardContent
        component="img"
        sx={{
          height: 300,
          width: 400,
          float: 'right',
          maxHeight: { xs: 250, md: 200 },
          maxWidth: { xs: 400, md: 260 },
        }}        
        src="house.png"
      />
        </div>
    );
}

export default Picture;


{/* <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  fontFamily: "segoe ui",
                  margin: "2% 35%",
                  borderLeft: "3px solid orange",
                }}
              >
                &nbsp;63 Vacant
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  fontFamily: "segoe ui",
                  margin: "1% 35%",
                  borderLeft: "3px solid skyblue",
                }}
              >
                &nbsp;32 Occupied
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  fontFamily: "segoe ui",
                  margin: "2% 35%",
                  borderLeft: "3px solid purple",
                }}
              >
                &nbsp;31 Unlisted
              </Typography> */}


{/* <div>
            <CardContent
                component="img"
                sx={{
                  height: 210,
                  width: 250,
                  float: "right",
                  margin: "-20% 0 -6% -12%",
                }}
                src="house.png"
              />
              <Typography sx={{ fontFamily: "segoe ui", margin: "2% 0 0% 3%" }}>
                Last updated : 3 days ago
              </Typography>
        </div> */}


        // <div>
        //   <div>
        //         <div style={{width: "20%" , borderRight:"3px solid black"}} sx={{ background: "#ffebee", width:"25%", marginTop: "10px"}}>
        //         <Typography sx={{ fontFamily: "calibri", margin: "20px"}}>Property total</Typography>
        //         <Typography variant="h3" sx={{ fontFamily: "calibri", margin: "20px" }}>126</Typography>
        //         <div style={{width: "20%" , borderRight:"3px solid black", float:"left"}} sx={{ background: "#ffebee", width:"25%", marginTop: "10px"}}>
        //         <Typography sx={{ fontFamily: "calibri", margin: "20px"}}>Property total</Typography>
        //         <Typography variant="h3" sx={{ fontFamily: "calibri", margin: "20px" }}>126</Typography>
        //        </div>
        //        </div>
        //   </div>
        // </div>



        
        //      {/* 2nd time  */}
        //      <div style={{float:"left", width:"20%", height:"10%"}}>
        //      <p style={{margin:"20px", borderRight:"2px solid black"}}>property total<h1>126</h1></p>
        //  </div> 

        //  <div style={{float:"left",  width:"15%", height:"10%"}} >
        //  <p style={{borderRight:"2px solid black"}}>
        //      <h6 style={{margin:"20px", borderLeft:"3px solid orange"}}>&nbsp;63 <span style={{color:"#ACA5A4"}}>Vacant</span></h6>
        //      <h6 style={{margin:"20px", borderLeft:"3px solid skyblue"}}>&nbsp;32 <span style={{color:"#ACA5A4"}}>Occupied</span></h6>
        //      <h6 style={{margin:"20px", borderLeft:"3px solid purple"}}>&nbsp;31 <span style={{color:"#ACA5A4"}}>Unlisted</span></h6>
        //  </p>
        //  </div>