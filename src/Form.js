import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import { InputLabel, Select, MenuItem, Button, FormControlLabel } from '@mui/material';
import { ManualForm } from './ManualForm'; 
import { AdvancedForm } from './AdvancedForm';

export const Form = () => {
  const [accountType, setAccountType] = useState("Advanced");

  const handleChange = (e) => {
      setAccountType(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('account type: ', event.target[0].value)
    console.log('username: ', event.target[2].value)
    console.log('password: ', event.target[4].value)
    console.log('server address: ', event.target[6].value)
    console.log('server path: ', event.target[8].value)
    console.log('port: ', event.target[10].value)
    console.log('ssl: ', event.target[12].value)
  }

  return (  
      <form onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accountType}
          label="Account Type"
          onChange={handleChange}
        >
          <MenuItem value={"Advanced"}>Advanced</MenuItem>
          <MenuItem value={"Manual"}>Manual</MenuItem>
        </Select>
        { accountType === "Manual" ? 
          <ManualForm /> :
          <AdvancedForm />  
        }
        <div>
          <FormControlLabel
            control={
              <button type="Submit">Submit</button>
            } 
          />
        </div>
        
      </form>
  );
}
