import React from 'react'
import { styled } from '@mui/material/styles';
import SideBar from '../../components/Sidebar/SideBar';
import "./Invoice.css"
import InvoiceHeader from '../../components/InvoiceHeader/InvoiceHeader';
import InvoiceCard from '../../components/Invoice/InvoiceCard';
import InvoiceNotFound from '../../components/Message/InvoiceNotFound';
import DisplayInvoice from '../DisplayInvoice/DisplayInvoice';
import EditInvoice from '../EditInvoice/EditInvoice';
import { useSelector, useDispatch } from "react-redux";
import { toggleEditInvoice } from '../../Redux/features/pages/pageSlice';

const StyledInvoiceContainer = styled("div")({
  backgroundColor: '#F8F8FB',
  // border:"1px solid blue",
  display: "flex"

});

let isTrue = 0
const Invoice = () => {
  const toggleEditInvoiceState = useSelector((state: any) => state.toggleEditInvoiceState)
  console.log(toggleEditInvoiceState);

  return (
    <StyledInvoiceContainer>
      <div className="side__bar__container">
        < SideBar />
        {toggleEditInvoiceState && <EditInvoice />}
      </div>
      <div className="invoice__content__container" >
        <div className="invoice__content" id='style-2' >

          {/* <InvoiceHeader /> */}

          {
            isTrue === 1 ? (<div className="invoice-cards">
              {[1, 2, 3, 4, 5, 6].map((card, index) => <InvoiceCard key={index} />)}
            </div>) : <div className='invoice__not__found'>

              <InvoiceHeader />
            </div>

          }
        </div>
      </div>
    </StyledInvoiceContainer>
  )
}

export default Invoice