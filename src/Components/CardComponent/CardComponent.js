import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../redux/cartSlice/cartSlice'

export default function CardComponent({item}) {
    const dispatch = useDispatch();
    const handleAdd =()=>{
      dispatch(addItemToCart(item));
    }
  return (
    <Card sx={{ maxWidth: 345, margin:'10px',objectFit:'contain' }}>
      <CardMedia
        component="img"
        height="140"
        width='140'
        image={item.imageUrl? item.imageUrl:null}
        alt="green iguana"
        object-fit='contain'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name && item.name.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`PKR ${item.price}/=`}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <Button size="medium" onClick={()=>handleAdd()}>Add</Button> 
      </CardActions>
    </Card>
  );
}
