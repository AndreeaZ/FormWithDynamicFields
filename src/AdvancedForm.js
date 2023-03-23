import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField, Checkbox, InputLabel, FormControlLabel } from '@mui/material';
import { ManualForm } from './ManualForm';

export const AdvancedForm = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {

  }

  return (  
      <FormControl fullWidth>
        <ManualForm />
        <TextField id="outlined-basic" label="Server Path" variant="outlined" placeholder="/calendars/user/"/>
        <div>
        <FormControlLabel
          id='port'
          control={
            <TextField id="outlined-basic" label="Port " variant="outlined" placeholder=""/>
            }
          label="Port"
          labelPlacement="start"
        />
        &nbsp;
         <FormControlLabel
          id='ssl'
          value="Yes"
          control={
            <Checkbox 
                color="primary" 
                checked={checked}
                onChange={handleChange}/>
            }
          label="SSL"
          labelPlacement="start"
        />
        </div>
      </FormControl>
  );
}
