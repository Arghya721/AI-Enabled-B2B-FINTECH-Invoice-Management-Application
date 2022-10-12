import logo from './Abc_products.jpg';
import logo1 from './highradius.jpg';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <div className="menu">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>  
                <Grid item xs={3}>
                <img src={logo} alt="logo" className="logo" />
                </Grid>
                <Grid item xs={6}>
                <img src={logo1} alt="logo" className="logo" />
                </Grid>
            </Grid>
          </Box>
          <Grid container>  
            <Grid item xs={2}>
                    <h5>Invoice Details</h5>
            </Grid>
          </Grid>          
            </div>
            
        </div>
    )
};