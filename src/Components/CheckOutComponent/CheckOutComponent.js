import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { cartItemSelector } from '../../redux/cartSlice/cartSelector';
import {addItemToCart,decrementFromCart} from '../../redux/cartSlice/cartSlice'
import { useDispatch,useSelector } from 'react-redux';
import PaymentDialog from '../PaymentDialog/PaymentDialog';
import { totalAmount } from '../../redux/cartSlice/cartSelector';

export const CardI=({item})=>{ 
    const {name, imageUrl, price, quantity} =item;
    const dispatch=useDispatch();


    const handleIncrement =()=>{
        dispatch(addItemToCart(item))
    }
    const handleDecrement=()=>{
        dispatch(decrementFromCart(item))
    }
    return(
  <React.Fragment>
    <CardContent sx={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
        <CardMedia
            sx={{width:'30%'}}
            height='100'
            width='100'
            component='img'
            image={imageUrl}
        />
      <Typography sx={{ fontSize: 14,padding:'20px' }} color="text.primary">
        {name}
      </Typography>
        <CardActions>
            <KeyboardArrowLeftIcon sx={{cursor:'pointer'}} onClick={()=>handleDecrement()}/>
            <Typography sx = {{fontSize: 14}} color = "text.primary" >{price}</Typography>
            <KeyboardArrowRightIcon sx={{cursor:'pointer'}} onClick={()=>handleIncrement()}/>
        </CardActions>
      
      <Typography  sx = {{fontSize: 14,padding: '20px'}} color = "text.primary">
        {quantity}
      </Typography>
      <Typography  sx ={{fontSize: 14,padding: '20px'}} color = "text.primary" >
        {quantity*price}
      </Typography>
    </CardContent>
    
  </React.Fragment>
)};

export default function CheckOutCard() {
    const cartItems = useSelector(cartItemSelector);
    const [isOpen,setIsOpen] = React.useState(false);
    const amount = useSelector(totalAmount);
    console.log(amount)

    return (
    <Box sx={{ minWidth: 700, maxWidth:520 }}>
        {
           cartItems.length>0 ? 
           (<>
                {
                    cartItems.map(item=>(
                        <Card key={item.id}  variant="outlined">{<CardI item={item}/>}
                        </Card>))
                }
                <h4>{`Total Payable ${amount} PKR`}</h4>
                <Button size="small" onClick={()=>setIsOpen(!isOpen)}>Pay Now</Button>
                <PaymentDialog open={isOpen} setOpen={setIsOpen}/>       
           </>):
           <h4>Empty Bucket</h4>
            
        }
        
    </Box>
  );
}