import { styled } from '@mui/material/styles';
import ImageIllustration from "../../assets/illustration-empty.svg"
import "./InvoiceNotFound.css"
const StyledContainer = styled("div")({
    backgroundColor: '#F8F8FB',
    // color: 'white', 
    // padding: '10px',
    // height:"3rem",
    // borderRadius:"23px",
    // width:"7.688rem"
    // display:"flex",
    justifyContent:"center",
    alignContent:"center",
    flexDirection:"column",
    // maxHeight:"300px",
    
    // border:"1px solid blue"
    
  });  

const InvoiceNotFound = () => {
  return (
    <StyledContainer>


    <img src={ImageIllustration} alt="no content"  />
        <div className="content__message">
        <h3>There is nothing here</h3>
        <span>Create an invoice by clicking the </span>
        <span> <b> New Invoice</b> button and get started</span>
        </div>
    </StyledContainer>
  )
}

export default InvoiceNotFound