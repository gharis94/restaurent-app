import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { Input } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {uploadFile} from '../../utils/firebas'
import { useDispatch } from 'react-redux';
import { uploadMenu } from '../../redux/menuSlice/menuSlice';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const INITIAL_STATE={
    name:'',
    price:0,
    category:'',
    imageName:'',
    imageUrl:''
}
const categories=[
    {   label:'Break Fast',
        value:'breakfast'},
    {   label:'Main course',
        value:'main'},
    {   label:'Desert',
        value:'desert'},
    {   label:'Drink',
        value:'drink'},
        {label:'Lunch',
        value:'lunch'},
        {label:"Dinner",
        value:'dinner'}
]
export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [state,setState] =React.useState(INITIAL_STATE);
  const {name,category,price} = state;
  const [uploaded,setUploaded] = React.useState(false)
  const [file,setFile] = React.useState(null);
  
  const dispatch=useDispatch();
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('dispatch',state)
    dispatch(uploadMenu(state));
    handleClose();
  }
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setState(prev=>({...prev,[name]:value}));
  }
  const handleImage =(e)=>{
    setFile(e.target.files[0]);
    setState(prev=>({...prev,imageName:e.target.files[0].name}))
  }

  React.useEffect(()=>{
    if(file){
        const uploadImage = async () => {
            await uploadFile(file, setState, setUploaded)
        }
        uploadImage();
    }
    
  },[file])
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Item to menu
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          
          <Box
              component="form"
              sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
              noValidate
              autoComplete="off"
              
            >
              <FormControl>
                <TextField
                  
                  id="outlined-required"
                  label="Dish Name"
                  type='text'
                  name='name'
                  onChange={(e)=>handleChange(e)}
                  value={name}
                />
                <TextField
                  select
                  id="outlined-required"
                  label="Category"
                  name='category'
                  onChange={(e)=>handleChange(e)}
                  value={category}
                >
                    {categories.map(option=>(<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                </TextField>
                <TextField
                  required
                  id="outlined-required"
                  label="Price"
                  name='price'
                  onChange={(e)=>handleChange(e)}
                  value={price}
                />
                <Input
                  label="File"
                  type='file'
                  onChange={(e)=>handleImage(e)}
                />
                
              </FormControl>
              
            </Box>
        </DialogContent>
        <DialogActions>
          <Button type='submit' autoFocus disabled={!uploaded} onClick={(e)=>handleSubmit(e)}>
            Upload 
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}