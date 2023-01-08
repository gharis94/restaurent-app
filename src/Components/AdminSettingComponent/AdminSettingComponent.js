import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AdminSettingComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          maxWidth:800,
          maxHeight:400,
          minHeight:300,
          minWidth:400,
          borderRadius:'15px',
        },
      }}
    >
      <Paper elevation={3} >
        <h4>Admin Setting</h4>
      </Paper>
    </Box>
  );
}
