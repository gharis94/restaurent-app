import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogBox from '../DialogBox/DialogBox';
import {useSelector} from 'react-redux';
import {getMenu} from '../../redux/menuSlice/menuSelector';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
 
  const menu = useSelector(getMenu);
  console.log(menu)
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            ITEMS ON MENU
          </Typography>
          <Demo>
            <List dense>
              {menu.length>0 && menu.map(item=>(
                  <ListItem key={item.id} secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }>
                  <ListItemAvatar>
                    <Avatar src={item.imageUrl}/>
                  </ListItemAvatar>
                  <ListItemText primary={item.name}/>
                    <ListItemText primary={item.category}/>
                    <ListItemText primary={`PKR ${item.price}`}/>
                </ListItem>
              ))}
                
              
            </List>
            
          </Demo>
          <DialogBox/>
        </Grid>
    </Box>
  );
}