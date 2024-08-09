import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


export default function Task({task , onDelete}) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
    <Avatar sx={{ bgcolor: '#F3F3F3' , height:'51px' , width:'51px'}} onClick={() => {setOpen(true);}}> </Avatar>
      <Dialog
        sx={{
            backgroundColor: 'transparent',
            '& .MuiPaper-elevation':
            {
            borderRadius:'12px',
            backgroundColor:'#FFFFFF',
            width:'305px',
            height:'359px',
            padding:'8px',
            position:'relative',
            },
        }}
        onClose={() => {setOpen(false);}}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <div style={{display: "flex" , alignItems:'center' , justifyContent:'space-between'}}>
            <CloseIcon onClick={() => {setOpen(false);}}/>
            <div style={{display:'flex' , columnGap:'10px',alignItems:'center'}}>
            <ModeEditIcon sx={{color:'#F15F2B'}}/>
            <DeleteIcon sx={{color:'#F15F2B'}} onClick={() => onDelete(task.id)}/>
            </div>
        </div>

        <DialogTitle sx={{textAlign:'center'}} id="customized-dialog-title">
            {task.title}
        </DialogTitle>
        <DialogContent dividers >
          <Typography gutterBottom>
            {task.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {setOpen(false);}}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}

