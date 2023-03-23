import React from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

export const ManualForm = () => {

  return (  
      <FormControl fullWidth>
        <TextField required id="outlined-basic" label="User Name" variant="outlined" placeholder="name@example.com"/>
        <TextField required id="outlined-basic" type="Password" label="Password" variant="outlined" placeholder="Required"/>
        <TextField id="outlined-basic" label="Server Address" variant="outlined" placeholder="example.com"/>
      </FormControl>
  );
}
