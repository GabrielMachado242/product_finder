import React from "react";
import './styles.css';

import Facebook from "../../img/facebook.png";
import Whatsapp from "../../img/whatsapp.png";

function Footer(){
    return(
            <footer>
                <p>Product Finder Todos os direitos reservados ©</p>
                <p>productfinder@gmail.com</p>
                
                <img className="logos" src={Facebook} /> 
                <img className="logos" src={Whatsapp} /> 
            </footer>
    );
};

export default Footer;