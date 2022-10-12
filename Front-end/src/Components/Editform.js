import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from '@mui/material/styles';
import './Addform.css';


import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from "@mui/material/Grid";
import * as React from "react";


export default function Editform(props) {
  const [open, setOpen] = React.useState(false);
  const [invoice_currency, setInvoice_currency] = React.useState(props.invoice);
  const [cust_payment_terms, setCust_payment_terms] = React.useState(props.cust);
 
  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    let headersList = {

    }
    const id = props.edit[0];
    fetch(`http://localhost:8080/hrc_crud_pojo/editData?sl_no=${id}&invoice_currency=${invoice_currency}&cust_payment_terms=${cust_payment_terms}`, { 
      method: "POST",
      headers: headersList
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      console.log(data);
    })
    setOpen(false);
  };



  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
   
      setInvoice_currency(props.invoice);
      setCust_payment_terms(props.cust);

  }, [props.invoice, props.cust]);



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} style={{ 'width': '900rs' }} maxWidth='md'>
        <DialogTitle style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>Edit</DialogTitle>
        <DialogContent style={{ 'color': 'white' , 'backgroundColor': '#283a46' }}>
        <Box sx={{ flexGrow: 20 , width:"100%" , maxWidth:"1500px" }}>
            <Grid container spacing={10}>  
              <Grid item xs={6}>
                <TextField  className="inputRounded" 
                  autoFocus
                
                  margin="dense"
                  id="invoice_currency"
                  label="Invoice Currency"
                  type="text"
                  fullWidth
                  value={invoice_currency}
                  variant="outlined"
                  onChange={(e) => setInvoice_currency(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="cust_payment_terms"
                  label="Customer Payment Terms"
                  type="text"
                  fullWidth
                  value={cust_payment_terms}
                  variant="outlined"
                  onChange={(e) => setCust_payment_terms(e.target.value)}
                />
              </Grid>
              
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>
          <Button onClick={handleClose}  variant="outlined" style={{ borderColor:"white",color: "white", height: 30,width: 450 }}>Cancel</Button>
          <Button  onClick={handleOpen} variant="outlined" style={{ borderColor:"white",color: "white", height: 30,width: 450 }} disabled={
            props.edit.length === 1 ? false : true 
          }>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
