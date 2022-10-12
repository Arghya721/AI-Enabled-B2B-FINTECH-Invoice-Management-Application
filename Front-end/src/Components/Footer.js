import React from "react";
const Footer = () => {
    return (
        <footer  className="footer" style={{backgroundColor:"#2c4250",position:"fixed" , width:"100%", bottom:"0" , color:"white" , fontSize:"15px", marginTop:"15px"}}>
            <div >
                <p style={{ color: "white", textAlign: "center" }}> <a href="" className="active" style={{ color: 'blue' }}>Privacy Policy</a>
                    © HighRadius Corporation 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;