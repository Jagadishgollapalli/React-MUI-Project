import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function UtOperator() {
  
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">UT Operator</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        >
          <MenuItem value="">
             <em>None</em>
          </MenuItem>
          <MenuItem >Ten</MenuItem>
          <MenuItem >Twenty</MenuItem>
          <MenuItem >Thirty</MenuItem>
        </Select>
      </FormControl>
</div>
);
}
