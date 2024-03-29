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

// export const CardI=({item})=>{ 
//     const {name, imageUrl, price, quantity} =item;
//     const dispatch=useDispatch();


//     const handleIncrement =()=>{
//         dispatch(addItemToCart(item))
//     }
//     const handleDecrement=()=>{
//         dispatch(decrementFromCart(item))
//     }
//     return(
//   <React.Fragment>
//     <CardContent sx={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
//         <CardMedia
//             sx={{width:'30%'}}
//             height='100'
//             width='100'
//             component='img'
//             image={imageUrl}
//         />
//       <Typography sx={{ fontSize: 14,padding:'20px' }} color="text.primary">
//         {name}
//       </Typography>
//         <CardActions>
//             <KeyboardArrowLeftIcon sx={{cursor:'pointer'}} onClick={()=>handleDecrement()}/>
//             <Typography sx = {{fontSize: 14}} color = "text.primary" >{price}</Typography>
//             <KeyboardArrowRightIcon sx={{cursor:'pointer'}} onClick={()=>handleIncrement()}/>
//         </CardActions>
      
//       <Typography  sx = {{fontSize: 14,padding: '20px'}} color = "text.primary">
//         {quantity}
//       </Typography>
//       <Typography  sx ={{fontSize: 14,padding: '20px'}} color = "text.primary" >
//         {quantity*price}
//       </Typography>
//     </CardContent>
    
//   </React.Fragment>
// )};

export default function CheckOutCard({item}) {
  const dispatch=useDispatch();  
  const {name, imageUrl, price, quantity}=item
    const cartItems = useSelector(cartItemSelector);
    const [isOpen,setIsOpen] = React.useState(false);
    const amount = useSelector(totalAmount);
    console.log(amount)

    const handleIncrement =()=>{
        dispatch(addItemToCart(item))
    }
    const handleDecrement=()=>{
        dispatch(decrementFromCart(item))
    }

    return (
    <div className='flex  py-4 border-b-2'>
        <div className='basis-2/4 flex justify-around items-center'>
            <img className='w-14 h-14 rounded-full object-cover' src={imageUrl}/>
            <p className='text-lg font-semibold'>{name}</p>
        </div>
        
        <div className='basis-1/4 flex flex-row items-center justify-center'>
          <button onClick={()=>handleDecrement()}><KeyboardArrowLeftIcon/></button>
          <p className='text-lg font-semibold'>{quantity}</p>
          <button onClick={()=>handleIncrement()}><KeyboardArrowRightIcon/></button>
        </div>
        <div className='basis-1/4 flex justify-around items-center'>
          <p className='text-lg font-semibold'>{price}</p>
          <p className='text-lg font-semibold'>{price*quantity}</p>
        </div>
        
    </div>
  );
}