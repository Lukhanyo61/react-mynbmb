import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
export default function Beneficiary() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
      <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Beneficiary</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/About'>About</MDBNavbarLink>
            <MDBNavbarLink href='/Beneficiary'>Beneficiary</MDBNavbarLink>
            <MDBNavbarLink href='/Contact'>
              Contact
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    


    





<MDBContainer>
<MDBRow>
  <MDBCol size='md'>
  

<MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>  
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  
  </MDBCol>
  <MDBCol size='md'>
  <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>  
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

  <MDBCol size='md'>
    <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>  
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>

</MDBContainer>






</>
    
  );
}
 







  

   
 