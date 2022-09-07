import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

export const Footer2 = () => {
  return (
    
    <CDBFooter className="shadow" >
       
      <CDBBox
        
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <small className="ml-2"> </small>
        </CDBBox>
        <CDBBox display="flex" alignItems="center">
          <small className="ml-3"> 
            <p>&copy; Product Finder Todos os direitos reservados</p>
            <p>productfinder@gmail.com</p>
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="fa-brands fa-google" />
          </CDBBtn>
       
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer2;