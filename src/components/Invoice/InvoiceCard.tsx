import React from 'react'
import "./InvoiceCard.css"
import ArrowForward  from "../../assets/icon-arrow-right.svg"
const InvoiceCard = () => {
  return (
    <div className='invoice__container'>

        <div className="content__partition_one">


            <span> <span className='pound__sign'>#</span> SD3234</span>
            <span>Due 19 Aug 2021</span>
            <span>Jensen Hauang</span>
    </div>
      
        <div className="content__partition_two">
        <span>$1,800.90</span>
            <span> <div className='indicator'></div> Paid</span>
         
        <span className="icon__container">
            <img src={ArrowForward} alt="expand"  />
        </span>
        </div>

    </div>
  )
}

export default InvoiceCard