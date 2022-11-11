import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import style from "../Rodape2/style.css";

export const Footer2 = () => {





  return (
    <footer class="footer2"> 
    <CDBFooter className=" shadow  bg-dark text-white " >
       
      <CDBBox
        
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-1 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <small className="m-1"> </small>
        </CDBBox>
        <CDBBox display="flex" alignItems="center">
          <small className="m-1"> 
            <p>&copy; Product Finder Todos os direitos reservados</p>
            
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <a >
            <CDBIcon  fab icon="fa-brands fa-google"  />
            </a>
            
          </CDBBtn>
       
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    </footer>
  );
};
export default Footer2;