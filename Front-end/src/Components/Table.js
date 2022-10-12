import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './Table.css';
import './Addform.css';
import Addform from './Addform';
import Editform from './Editform';
import DeleteForm from './DeleteForm';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from '@mui/material/DialogContentText';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);




const columns: GridColDef[] = [
    { field: 'sl_no', headerName: 'Sl No',width: 80},
    { field: 'business_code',headerName: 'Business Code', width: 150 },
    { field: 'cust_number', headerName: 'Custumer Number' , width: 150 },
    { field: 'clear_date', headerName: 'Clear Date' , width: 100 },
    { field: 'buisness_year', headerName: 'Buisness Year' , width: 130 },
    { field: 'doc_id', headerName: 'Doc Id' , width: 100 },
    { field: 'posting_date', headerName: 'Posting Date' , width: 100 },
    { field: 'document_create_date', headerName: 'Document Create Date',width: 170 },
    { field: 'due_in_date', headerName: 'Due In Date' , width: 100 },
    { field: 'invoice_currency', headerName: 'Invoice Currency' , width: 130 },
    { field: 'document_type', headerName: 'Document Type' , width: 125 },
    { field: 'posting_id', headerName: 'Posting Id' , width: 80 },
    { field: 'total_open_amount', headerName: 'Total Open Amount',width: 150 },
    { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 150 },
    { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 180 },
    { field: 'invoice_id', headerName: 'Invoice Id' , width: 100 },
];


const Table = (props) => {

    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [pageSize, setPageSize] = React.useState(20);
    const [select, setSelect] = React.useState([]);
    const [invoice_currency, setInvoice_currency] = React.useState('');
    const [cust_payment_terms, setCust_payment_terms] = React.useState('');
    const [cust_id, setCust_id] = React.useState('');
    const [search, setSearch] = React.useState([]);

    const [cust_number, setCust_number] = React.useState('');
    const [buisness_year, setBuisness_year] = React.useState('');
    const [doc_id, setDoc_id] = React.useState('');
    const [invoice_id, setInvoice_id] = React.useState('');
    const [isadv, setIsadv] = React.useState(true);
    const [ispredict, setIspredict] = React.useState(false);
    const [predictData, setPredictData] = React.useState([]);
    const [prebuisness_year, setPrebuisness_year] = React.useState('');
    const [precust_number, setPrecust_number] = React.useState('');
    const [predoc_id, setPredoc_id] = React.useState('');
    const [precust_payment_terms, setPrecust_payment_terms] = React.useState('');
    const [prebaseline_create_date, setPrebaseline_create_date] = React.useState('');
    const [predue_in_date, setPredue_in_date] = React.useState('');
    const [preclear_date, setPreclear_date] = React.useState('');
    const [preposting_date, setPreposting_date] = React.useState('');
    const [pretotal_open_amount, setPretotal_open_amount] = React.useState('');
    const [prebusiness_code, setPrebusiness_code] = React.useState('');

    const [success, setSuccess] = React.useState(false);

    const [analyticOpen, setanalyticOpen] = React.useState(false);


    const [usd, setUsd] = React.useState(0);
    const [cad, setcad] = React.useState(0);

    const [clear_date1, setClear_date1] = React.useState(new Date());
    const [clear_date2, setClear_date2] = React.useState(new Date());
    const [due_in_date1, setDue_in_date1] = React.useState(new Date());
    const [due_in_date2, setDue_in_date2] = React.useState(new Date());
    const [baseline_create_date1, setBaseline_create_date1] = React.useState(new Date());
    const [baseline_create_date2, setBaseline_create_date2] = React.useState(new Date());
    const [graphload, setGraphload] = React.useState(false);


    const analytic = () => {
        setanalyticOpen(true);
    }



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIspredict(false);
        setSuccess(false);
        setanalyticOpen(false);
        setGraphload(false);
    };

    const predictrequest = async () => {
        let headersList = {
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "buisness_year": prebuisness_year,
            "cust_number": 1,
            "business_code": prebusiness_code,
            "doc_id": predoc_id,
            "cust_payment_terms": precust_payment_terms,
            "name_customer": "arghya",
            "baseline_create_date": prebaseline_create_date,
            "clear_date": preclear_date,
            "posting_date": preposting_date,
            "due_in_date": predue_in_date,
            "converted_usd": pretotal_open_amount
        });

        const response = await fetch("http://127.0.0.1:5000/", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        const json = await response.json();
        setPredictData(json);
        console.log(json);

        setIspredict(false);
        setSuccess(true);
    }


    const handleOpen = async () => {
        const response = await fetch(`http://localhost:8080/hrc_crud_pojo/advSearch?doc_id=${doc_id}&invoice_id=${invoice_id}&cust_number=${cust_number}&buisness_year=${buisness_year}`);
        const json = await response.json();
        setSearch(json);
        setOpen(false);
        setIsadv(false);
    };

    const handlePredictOpen = () => {
        setIspredict(true);
    }



    const searchdata = async (cust) => {
        const response = await fetch(`http://localhost:8080/hrc_crud_pojo/searchData?cust_number=` + cust);
        const json = await response.json();
        setSearch(json);
    }

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/hrc_crud_pojo/servelet');
        const json = await response.json();
        setData(json);
        setCust_number('');
        setBuisness_year('');
        setDoc_id('');
        setInvoice_id('');
        setIsadv(true);
    }


    function convertDate(date) {
        var newDate = new Date(date);
        var dd = String(newDate.getDate()).padStart(2, '0');
        var mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = newDate.getFullYear();
    
        newDate = yyyy + '-' + mm + '-' + dd;
    
        return newDate;
      }

    const graphloader = async () => {

        var cl_dt1 = convertDate(clear_date1);
        var cl_dt2 = convertDate(clear_date2);
        var due_dt1 = convertDate(due_in_date1);
        var due_dt2 = convertDate(due_in_date2);
        var bl_dt1 = convertDate(baseline_create_date1);
        var bl_dt2 = convertDate(baseline_create_date2);




        const response = await fetch(`http://localhost:8080/hrc_crud_pojo/graph?clear_date1=${cl_dt1}&clear_date2=${cl_dt2}&due_date1=${due_dt1}&due_date2=${due_dt2}&baseline_date1=${bl_dt1}&baseline_date2=${bl_dt2}`);
        const json = await response.json();
        //console.log(json);
        var curr = json.split(",");
        setUsd(curr[0]);
        setcad(curr[1]);
        setGraphload(true);
        setanalyticOpen(false);
    }



    const values = {
        datasets: [{
            data: [usd, cad],
            backgroundColor: [
                'red',
                'blue',
                'yellow'
            ]
        },
        ],
        labels: [
            'usd',
            'cad'
        ],
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <nav style={{ 'backgroundColor': '#283a46', height: 90, paddingTop: '40px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={10}>
                        <Grid item xs={4}>
                            <Button variant="contained" style={{ color: "white" }} onClick={handlePredictOpen} >Predict</Button>

                            <Dialog
                                open={ispredict}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Predict ?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Predict Option gives you the value of aging bucket for the customer.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={predictrequest} disabled={
                                        select.length === 1 ? false : true
                                    } autoFocus>
                                        Predict
                                    </Button>
                                </DialogActions>
                            </Dialog>


                            {success === true ?
                                <Dialog
                                    open={success}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Predicted Result"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Aging Bucket : {predictData[0].aging_bucket}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Close</Button>

                                    </DialogActions>
                                </Dialog> : ""}


                            <Button variant="outlined" style={{ color: "white" }} onClick={analytic}>Analytic View</Button>

                            <Dialog fullScreen={fullScreen} open={analyticOpen} onClose={handleClose} style={{ 'width': '900rs' }} maxWidth='sm'>
                                <DialogTitle style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>ANALYTICS VIEW</DialogTitle>
                                <DialogContent style={{ 'color': 'white', 'backgroundColor': '#283a46' }}>
                                    <Box sx={{ flexGrow: 10, width: "100%" }}>
                                        <h4>Clear Date</h4>
                                        <Grid container spacing={2}>

                                            <Grid item xs={6}>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                    <DesktopDatePicker
                                                        label="Clear Date"
                                                        inputFormat="dd/MM/yyyy"
                                                        fullWidth
                                                        autoFocus
                                                        value={clear_date1}
                                                        onChange={(e) => setClear_date1(e)}
                                                        renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                                                    />
                                                </LocalizationProvider>

                                            </Grid>

                                            <Grid item xs={6}>
                                                <h4 style={{ marginTop: -40 }}>Due In Date</h4>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                    <DesktopDatePicker
                                                        label="Due In Date"
                                                        inputFormat="dd/MM/yyyy"
                                                        fullWidth
                                                        autoFocus
                                                        value={due_in_date1}
                                                        onChange={(e) => setDue_in_date1(e)}
                                                        renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                    <DesktopDatePicker
                                                        label="Clear Date"
                                                        inputFormat="dd/MM/yyyy"
                                                        fullWidth
                                                        autoFocus
                                                        value={clear_date2}
                                                        onChange={(e) => setClear_date2(e)}
                                                        renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                    <DesktopDatePicker
                                                        label="Due In Date"
                                                        inputFormat="dd/MM/yyyy"
                                                        fullWidth
                                                        autoFocus
                                                        value={due_in_date2}
                                                        onChange={(e) => setDue_in_date2(e)}
                                                        renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <h4>Baseline Create Date</h4>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                    <DesktopDatePicker
                                                        label="Baseline Create Date"
                                                        inputFormat="dd/MM/yyyy"
                                                        fullWidth
                                                        autoFocus
                                                        value={baseline_create_date1}
                                                        onChange={(e) => setBaseline_create_date1(e)}
                                                        renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <h4 >Invoice Currency</h4>
                                                <TextField className="inputRounded" style={{ 'width': 210, marginTop: -2 }}
                                                    autoFocus
                                                    margin="dense"
                                                    id="invoice_currency"
                                                    placeholder="Invoice Currency"
                                                    type="text"
                                                    fullWidth
                                                    variant="outlined"
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                    <DesktopDatePicker
                                                        label="Baseline Create Date"
                                                        inputFormat="dd/MM/yyyy"
                                                        fullWidth
                                                        autoFocus
                                                        value={baseline_create_date2}
                                                        onChange={(e) => setBaseline_create_date2(e)}
                                                        renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>


                                        </Grid>
                                    </Box>
                                </DialogContent>
                                <DialogActions style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>
                                    <Button onClick={graphloader} variant="outlined" style={{ borderColor: "white", color: "white", height: 30, width: 450 }}>Submit</Button>
                                    <Button onClick={handleClose} variant="outlined" style={{ borderColor: "white", color: "white", height: 30, width: 450 }}>Cancel</Button>
                                </DialogActions>
                            </Dialog>








                        {graphload === true ? 
                            <Dialog
                                open={graphload}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Predicted Result"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <Doughnut data={values} />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Close</Button>

                                </DialogActions>
                            </Dialog>
                            : null}




                            <Button variant="outlined" style={{ color: "white" }} onClick={handleClickOpen}>Advanced Search</Button>


                            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} style={{ 'width': '900rs' }} maxWidth='md'>
                                <DialogTitle style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>Advance Search</DialogTitle>
                                <DialogContent style={{ 'color': 'white', 'backgroundColor': '#283a46' }}>
                                    <Box sx={{ flexGrow: 20, width: "100%", maxWidth: "1500px" }}>
                                        <Grid container spacing={2}>

                                            <Grid item xs={6}>
                                                <TextField className="inputRounded"
                                                    autoFocus
                                                    margin="dense"
                                                    id="doc_id"
                                                    label="Doc Id"
                                                    type="text"
                                                    fullWidth
                                                    value={doc_id}
                                                    variant="outlined"
                                                    onChange={(e) => {
                                                        setDoc_id(e.target.value);

                                                    }}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField className="inputRounded"
                                                    autoFocus
                                                    margin="dense"
                                                    id="invoice_id"
                                                    label="Invoice Id"
                                                    type="text"
                                                    value={invoice_id}
                                                    fullWidth
                                                    variant="outlined"
                                                    onChange={(e) => {
                                                        setInvoice_id(e.target.value)

                                                    }}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField className="inputRounded"
                                                    autoFocus
                                                    margin="dense"
                                                    id="cust_number"
                                                    label="Cust Number"
                                                    type="text"
                                                    value={cust_number}
                                                    fullWidth
                                                    variant="outlined"
                                                    onChange={(e) => {
                                                        setCust_number(e.target.value)

                                                    }}
                                                />
                                            </Grid>


                                            <Grid item xs={6}>
                                                <TextField className="inputRounded"
                                                    autoFocus
                                                    margin="dense"
                                                    id="buisness_year"
                                                    label="Buisness Year"
                                                    type="text"
                                                    value={buisness_year}
                                                    fullWidth
                                                    variant="outlined"
                                                    onChange={(e) => {
                                                        setBuisness_year(e.target.value)

                                                    }}
                                                />
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </DialogContent>
                                <DialogActions style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>
                                    <Button onClick={handleOpen} variant="outlined" style={{ borderColor: "white", color: "white", height: 30, width: 450 }}>Search</Button>
                                    <Button onClick={handleClose} variant="outlined" style={{ borderColor: "white", color: "white", height: 30, width: 450 }}>Cancel</Button>
                                </DialogActions>
                            </Dialog>


                            <Button variant="outlined" style={{ marginRight: '50px', color: "white", height: 35, width: 10 }} className="btnplaylist" onClick={fetchData}></Button>

                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                autoFocus

                                margin="dense"
                                id="cust_id"
                                label="Search Customer Id"
                                type="text"
                                style={{ backgroundColor: "white", height: 55, width: 150, borderRadius: 7 + 'px' }}
                                fullWidth
                                value={cust_id}
                                variant="outlined"
                                onChange={(e) => {
                                    setCust_id(e.target.value);
                                    searchdata(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Addform />
                                </Grid>
                                <Grid item xs={4}>
                                    <Editform edit={select} invoice={invoice_currency} cust={cust_payment_terms} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DeleteForm del={select} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </nav>

            <div style={{ height: 1000, width: '100%', color: 'white', marginBottom: '40px' }}>
                <DataGrid style={{ backgroundColor: '#2c4250', color: 'white' }}
                    getRowId={(data) => data.sl_no}
                    columns={columns}
                    rows={
                        cust_id === '' && isadv === true ? data : search
                    }

                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[20, 50, 100]}
                    pagination
                    checkboxSelection
                    onCellClick={(e) => {
                        if (select.includes(e.id)) {
                            const index = select.indexOf(e.id);
                            if (index > -1) {
                                select.splice(index, 1);
                            }
                        }
                        else {
                            select.push(e.id);

                            setInvoice_currency(e.row.invoice_currency);
                            setCust_payment_terms(e.row.cust_payment_terms);

                            setPrebuisness_year(e.row.buisness_year);
                            setPrecust_number(e.row.cust_number);
                            setPrebusiness_code(e.row.business_code);
                            setPredoc_id(e.row.doc_id);
                            setPrecust_payment_terms(e.row.cust_payment_terms);
                            setPrebaseline_create_date(e.row.baseline_create_date);
                            setPreclear_date(e.row.clear_date);
                            setPreposting_date(e.row.posting_date);
                            setPredue_in_date(e.row.due_in_date);
                            setPretotal_open_amount(e.row.total_open_amount);
                        }
                    }}
                />
            </div>
        </>
    );

}


export default Table;