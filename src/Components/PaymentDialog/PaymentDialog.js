import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {addToOrders} from '../../redux/orderSlice/orderSlice'
import { useSelector,useDispatch } from 'react-redux';
import { totalAmount,cartItemSelector } from '../../redux/cartSlice/cartSelector';
import { setCartToDefault } from '../../redux/cartSlice/cartSlice';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../../Components/PaymentForm/PaymentForm';


export default function PaymentDialog({open,setOpen}) {
  const amount = useSelector(totalAmount);
  const data =useSelector(cartItemSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [controle,setControle] =useState('cash')
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOrder = ()=>{
    if(controle !== 'cash') return;
    let newData = {
        data,
        amount
    }
    dispatch(addToOrders(newData));
    // handleClose();
     navigate('/');
     dispatch(setCartToDefault())


  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Mode of payment"}
        </DialogTitle>
        {controle ==='card'?(
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Please Insert Card Details.
          </DialogContentText>
            <PaymentForm/>  
          </DialogContent>
        ):(
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please chose mode of payment.
          </DialogContentText>
          <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="card"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="card" control={<Radio />} label="Card" onChange={()=>setControle('card')} />
                    <FormControlLabel value="cash" control={<Radio />} label="Cash" onChange={()=>setControle('cash')} />
                    
                </RadioGroup>
            </FormControl>
        </DialogContent>
        )}
        
        <DialogActions>
          <Button onClick={()=>handleOrder()} autoFocus>
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}