import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';



import './Addform.css';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteForm(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = () => {
    while(props.del.length){
      let headersList = {

      }
      var id = props.del.pop();
      fetch(`http://localhost:8080/hrc_crud_pojo/delData?sl_no=${id}`, { 
        method: "POST",
        headers: headersList
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
      })
  }
  handleClose();
}

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} >
        Delete
      </Button>
      <Dialog
        fullScreen={fullScreen} open={open} onClose={handleClose} style={{ 'width': '900rs' }} maxWidth='md'
      >
        <DialogTitle style={{ 'backgroundColor': '#283a46', 'color': 'white' }} >{"Delete Records ?"}</DialogTitle>
        <DialogContent style={{ 'color': 'white' , 'backgroundColor': '#283a46' }}>
          <DialogContentText style={{color:'white'}} id="alert-dialog-slide-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>
          <Button onClick={handleClose} variant="outlined" style={{ borderColor:"white",color: "white", height: 30,width: 450 }}>Cancel</Button>
          <Button onClick={handleClick} variant="outlined" style={{ borderColor:"white",color: "white", height: 30,width: 450 }} disabled={
            props.del.length > 0 ? false : true 
          } >Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
