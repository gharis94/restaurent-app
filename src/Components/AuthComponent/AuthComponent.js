import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AuthComponent({set,state,handleSubmit,log}) {
  const {email,password} = state;
  
  const handleChange =(e)=>{
    const {name,value} = e.target;
    set({...state,[name]:value})
  }
  return (
    <div>
      <Dialog open={log} >
        <DialogTitle>Authentication</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign to access the admin console
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            name="email"
            value={email}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>handleChange(e)}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="password"
            value={password}
            label="Passwords"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit' onClick={(e)=>handleSubmit(e)}>Sign In</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}