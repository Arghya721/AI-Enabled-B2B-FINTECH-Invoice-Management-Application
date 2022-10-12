import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import './Addform.css';




import { useTheme } from '@mui/material/styles';


import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from "@mui/material/Grid";
import * as React from "react";


export default function Addform() {
  const [open, setOpen] = React.useState(false);
  const [business_code, setBusiness_code] = React.useState('');
  const [cust_number, setCust_number] = React.useState('');
  const [clear_date, setClear_date] = React.useState(new Date());
  const [buisness_year, setBuisness_year] = React.useState('');
  const [doc_id, setDoc_id] = React.useState('');
  const [posting_date, setPosting_date] = React.useState(new Date());
  const [document_create_date, setDocument_create_date] = React.useState(new Date());
  const [due_in_date, setDue_in_date] = React.useState(new Date());
  const [invoice_currency, setInvoice_currency] = React.useState('');
  const [document_type, setDocument_type] = React.useState('');
  const [posting_id, setPosting_id] = React.useState('');
  const [total_open_amount, setTotal_open_amount] = React.useState('');
  const [baseline_create_date, setBaseline_create_date] = React.useState(new Date());
  const [cust_payment_terms, setCust_payment_terms] = React.useState('');
  const [invoice_id, setInvoice_id] = React.useState('');

  //const [value, setValue] = React.useState(new Date());

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  function convertDate(date) {
    var newDate = new Date(date);
    var dd = String(newDate.getDate()).padStart(2, '0');
    var mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = newDate.getFullYear();

    newDate = yyyy + '-' + mm + '-' + dd;

    return newDate;
  }


  const handleOpen = () => {
    let headersList = {

    }
    var clear_dt = convertDate(clear_date);
    var posting_dt = convertDate(posting_date);
    var doc_create_dt = convertDate(document_create_date);
    var due_dt = convertDate(due_in_date);
    var baseline_dt = convertDate(baseline_create_date);
  
    
    console.log(business_code, cust_number, clear_dt, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id);
    fetch(`http://localhost:8080/hrc_crud_pojo/addData?business_code=${business_code}&cust_number=${cust_number}&clear_date=${clear_dt}&buisness_year=${buisness_year}&doc_id=${doc_id}&posting_date=${posting_dt}&document_create_date=${doc_create_dt}&due_in_date=${due_dt}&invoice_currency=${invoice_currency}&document_type=${document_type}&posting_id=${posting_id}&total_open_amount=${total_open_amount}&baseline_create_date=${baseline_dt}&cust_payment_terms=${cust_payment_terms}&invoice_id=${invoice_id}`, {
      method: "POST",
      headers: headersList
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      console.log(data);
    })
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} style={{ 'width': '900rs' }} maxWidth='md'>
        <DialogTitle style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>Add Invoice Details</DialogTitle>
        <DialogContent style={{ 'color': 'white' , 'backgroundColor': '#283a46' }}>
          <Box sx={{ flexGrow: 20 , width:"100%" , maxWidth:"1500px" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="business_code"
                  label="Business Code"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setBusiness_code(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="cust_number"
                  label="Cust Number"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setCust_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Clear Date"
                    inputFormat="dd/MM/yyyy"

                    fullWidth
                    autoFocus
                    value={clear_date}
                    onChange={(e) => setClear_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>

              </Grid>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="buisness_year"
                  label="Buisness Year"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setBuisness_year(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="doc_id"
                  label="Doc Id"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setDoc_id(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Posting Date"
                    inputFormat="dd/MM/yyyy"

                    fullWidth
                    autoFocus
                    value={posting_date}
                    onChange={(e) => setPosting_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Document Create Date"
                    inputFormat="dd/MM/yyyy"

                    fullWidth
                    autoFocus
                    value={document_create_date}
                    onChange={(e) => setDocument_create_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Due In Date"
                    inputFormat="dd/MM/yyyy"

                    fullWidth
                    autoFocus
                    value={due_in_date}
                    onChange={(e) => setDue_in_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="invoice_currency"
                  label="Invoice Currency"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setInvoice_currency(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="document_type"
                  label="Document Type"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setDocument_type(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="posting_id"
                  label="Posting Id"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setPosting_id(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                {" "}
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="total_open_amount"
                  label="Total Open Amount"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setTotal_open_amount(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                {" "}
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Baseline Create Date"
                    inputFormat="dd/MM/yyyy"

                    fullWidth
                    autoFocus
                    value={baseline_create_date}
                    onChange={(e) => setBaseline_create_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>

              </Grid>
              <Grid item xs={3}>
                {" "}
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="cust_payment_terms"
                  label="Cust Payment Terms"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setCust_payment_terms(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                {" "}
                <TextField className="inputRounded" 
                  autoFocus
                  margin="dense"
                  id="invoice_id"
                  label="Invoice Id"
                  type="text"
                  required
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setInvoice_id(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>
          <Button onClick={handleOpen} variant="outlined" style={{ borderColor:"white",color: "white", height: 30,width: 450 }}>Add</Button>
          <Button onClick={handleClose} variant="outlined" style={{borderColor:"white",color: "white", height: 30,width: 450  }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
