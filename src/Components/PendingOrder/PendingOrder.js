import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {useSelector,useDispatch} from 'react-redux';
import {orderSelector} from '../../redux/orderSlice/orderSelector';
import TaskIcon from '@mui/icons-material/Task';
import {updateOrder} from '../../redux/orderSlice/orderSlice';

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const dispatch = useDispatch();
  const [state,setState] = React.useState(true);
  const orders = useSelector(orderSelector);
    
    const handleupdate =(data)=>{
        dispatch(updateOrder(data));
    }

  return(
    <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
        {   orders.length>0 && orders.filter(item=>item.status===false).map((value) =>{
            const labelId = `checkbox-list-label-${value}`;

            return (
            <ListItem
            key={value.id}
            secondaryAction={
              <IconButton disabled={!state} edge="end" aria-label="comments" onClick={()=>handleupdate(value)}>
                
                <TaskIcon  color={state?'primary':'secondary'}/>
              </IconButton>
            }
            disablePadding
            >
                <ListItemText primary={`${value.amount} PKR`}/>
                <ListItemText id={labelId} primary={value.items.map(item=>(
                    <p key={item.itemId}>
                        <span style={{fontWeight:'bold'}}>
                            Order:
                        </span>
                        {`${item.name}`}
                        <span style={{fontWeight:'bold'}}>
                            Qty:
                        </span>{`${item.quantity}`}
                    </p>
                )
                )}/>
            
            </ListItem>
            );
        }
       )}
    </List>
    )
};