import './Buttons.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from "../../assets/icon-plus.svg"
import Stack from '@mui/material/Stack';




const StyledButton = styled(Button)({
  backgroundColor: '#7C5DFA',
  // color: 'white', 
  padding: '10px',
  height: "3rem",
  borderRadius: "23px",
  // width:"7.688rem"
});
const StyledAddButton = styled(Button)({
  width: "100%",
  borderRadius: "16px",
  // height: "20px"
  background: "#F9FAFE",
  height: "40px",
  fontWeight: "500"

});
const StyledACancelButton = styled(Button)({
  padding: '6px 26px',
  borderRadius: "23px",
  // height: "40px",
  background: "#F9FAFE",
  // height: "40px",
  fontWeight: "500",
  fontSize: "0.5rem",


});
const StyledSaveButton = styled(Button)({
  padding: '6px 26px',
  borderRadius: "23px",
  // height: "40px",
  background: "#7C5DFA",
  // height: "40px",
  fontWeight: "500",
  fontSize: "0.5rem",


});

const StyledDeleteButton = styled(Button)({
  backgroundColor: '#EC5757',
  // color: 'white', 
  padding: '6px 26px',
  height: "3rem",
  borderRadius: "23px",
  fontSize: "0.5rem",
  fontWeight: "bolder",
  textTransform: "capitalize",
  // width:"7.688rem"}
  "&:hover": {
    background: "#d84646"
  }
});

const StyledEditButton = styled(StyledDeleteButton)(
  {
    background: "#edf0fb",
    "&:hover": {
      background: "#ecedf2",
      borderColor: "#F9FAFE"

    },
    borderColor: "#F9FAFE",
  }
)
const StyledPaidButton = styled(StyledDeleteButton)(
  {
    background: "#7C5DFA",
    color: "#fff",
    "&:hover": {
      background: "#7459e1",
      borderColor: "#7459e1"

    },
    borderColor: "#7C5DFA",
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  }
)

export const NewInvoiceBtn = () => {
  return (
    <StyledButton variant="contained" startIcon={<AddCircleIcon style={{ fontSize: 30 }} sx={{ fontSize: '6rem', borderRadius: "50%", color: "#fff" }} />}  >
      New Invoice
    </StyledButton>
  )
}

export const DeleteButton = () => {
  return (
    <StyledDeleteButton variant="contained" disableElevation >
      <h2> Delete</h2>
    </StyledDeleteButton>
  )
}
export const EditButton = () => {
  return (
    <StyledEditButton variant="outlined" disableElevation >
      <h2>Edit</h2>
    </StyledEditButton>
  )
}
export const PaidButton = () => {
  return (
    <StyledPaidButton variant="outlined" disableElevation >
      <h2>Mark as paid</h2>
    </StyledPaidButton>
  )
}

export const AddButton = () => {
  return (
    <StyledAddButton variant="text"  >
      <h5>+ Add New Item</h5>
    </StyledAddButton>
  )
}
export const CancelButton = () => {
  return (
    <StyledACancelButton variant="text"  >
      <h2>Cancel</h2>
    </StyledACancelButton >
  )
}
export const SaveButton = () => {
  return (
    <StyledSaveButton variant="contained" disableElevation >
      <h2>Save Changes</h2>
    </StyledSaveButton >
  )
}


