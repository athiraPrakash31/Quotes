import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar light style={{backgroundColor:'purple'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/a2/14/a0/a214a0ae593b4f3aaba19dcab9e4a7df.jpg'
              height='40'
              width='80'
              alt=''
              loading='lazy'
            />
           <span className='text-light'>Quotes</span> 
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header