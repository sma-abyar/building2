import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  columnGap:'150px',
  height:'100%'
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [ww, setww] = React.useState('50px');

  const handleDrawerOpen = () => {
    setOpen(true);
    setww('200px')
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setww('500px')
  };



  return (
    <div style={{backgroundColor:'#FFFFFF' , height:'100%' , width:ww , borderRadius:'12px'}}>
            <button open={open} style={{border:'none' , backgroundColor:'transparent'}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                style={{ ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            </button>
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
            <Typography>salam</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
                <ListItemText primary='salam' />
        </List>
      </Drawer>
    </div>
  );
}
