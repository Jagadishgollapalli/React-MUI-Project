import React from "react";
// import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';

const Analytics = () => {
  
    // Sample data
    const data = [
      { argument:'vacant', value:63 },
      { argument:'occupied', value:32 },
      { argument:'unlisted', value:31 }
    ];
    return (
        <Chart
          data={data}
          options={{
            width: '10%',
            height: '10%'
          }}
        >
          <PieSeries valueField="value" 
            argumentField="argument" 
            innerRadius={0.8} 
            />
          <Title text="Properties data"/>
        </Chart>
    );
    }
      
    export default Analytics;