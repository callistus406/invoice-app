
import { styled } from '@mui/material/styles';
import "./InvoiceHeader.css"
import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MoreVert } from '@mui/icons-material';
import { NewInvoiceBtn } from '../Buttons/Buttons';
const StyledContainer = styled("div")({
    // height:"5rem",
    width:"100%",
    border:"1px solid blue",
    display:"flex",
    margin:"auto"
})
const StyledIconButtonContainer= styled("div")({
display:"flex",
// justifyContent:"center",
alignItems:"center"
})
const StyledIconButton= styled(IconButton)({
    color:"#7C5DFA"
})
const InvoiceHeader = () => {
  return (
    <StyledContainer>

        <div className='invoice__display__title'>
            <div>

            <h1>Invoices</h1>
            <p>There are 7 total invoices</p>
            </div>
        </div>
        <div className='invoice__display__actions'>
        <IconDropdown />
        <NewInvoiceBtn />
        
     </div>
    </StyledContainer>
  )
}

export default InvoiceHeader





const IconDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <StyledIconButtonContainer>
<h5>
    Filter By Status
</h5>

      <StyledIconButton onClick={handleMenuOpen} >
     

        <ExpandMoreIcon />
      </StyledIconButton>
        </StyledIconButtonContainer>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
};

