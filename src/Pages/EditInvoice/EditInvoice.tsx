import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import "./EditInvoice.css"
import { useEffect } from 'react';
import { Input } from '../../components/Imputs/Inputs';
import { toggleEditInvoice } from '../../Redux/features/pages/pageSlice';
import { AddButton, CancelButton, DeleteButton, SaveButton } from '../../components/Buttons/Buttons';
const StyledContainer = styled("div")((display) => ({
    // border: "1px solid blue",
    position: "fixed",
    top: "0",
    // left: ,
    width: "30.5rem",
    zIndex: "100",
    height: "100vh",
    backgroundColor: "#ffffff",
    transition: "all 0.7s ease",
    borderTopRightRadius: "16px",
    borderBottomRightRadius: "16px",
    paddingLeft: "8.438rem",
    paddingRight: "2.5rem",
    // overflowY: "auto",
    // overflowX: "hidden",
    // overflowX: "auto"
    // "& > div": {
    //     marginBottom: "20px"
    // }
}))

interface ComponentProps {
    display: boolean
}
const EditInvoice: React.FC = () => {


    const dispatch = useDispatch()


    // let drawerClasses = 'side-drawer';
    // if (toggleEditInvoiceState) {
    //     drawerClasses = 'side-drawer open';
    // }
    // useEffect(() => {
    // }, [toggleEditInvoiceState])
    return (
        <StyledContainer >
            <div className="edit__invoice_top_header" >
                <h2>Edit <span>#</span>XM9142 </h2>
            </div>
            <div className="edit_invoice_content" id='style-2'>


                <div className="bill__from_container">
                    <h3>Bill From</h3>

                    <Input label="Street Address" />
                </div>

                <div className='bill__from_address'>
                    <Input label="City" />
                    <Input label="Post Code " />
                    <Input label="Country " />

                </div>
                <div className="bill__to_container">
                    <h3>Bill To</h3>

                    <div>
                        <Input label="Clients Name " />
                        <Input label="Clients Email " />
                        <Input label='Street Address' />
                    </div>
                </div>
                <div className='bill__to_address'>
                    <Input label="City" />
                    <Input label="Post Code" />
                    <Input label="Country" />
                </div>
                <div className='bill__date_and_payment'>
                    <div>

                        <Input label='Invoice Date' />
                        <Input label='Payment Terms' />

                    </div>
                    <div>

                        <Input label="Project Description" />
                    </div>

                </div>

                <div className="bill__item_container">
                    <div className="bill__item_list">

                        <div>
                            {/* <Input label='Invoice Date' /> */}

                        </div>
                        {/*  */}
                        <div>
                            {/* <Input label='Invoice Date' /> */}

                        </div>
                        {/*  */}

                        <div>
                            {/* <Input label='Invoice Date' /> */}

                        </div>
                        {/*  */}

                        <div>
                            {/* <Input label='Invoice Date' /> */}

                        </div>
                        {/*  */}

                        <div>

                        </div>
                    </div>
                </div>
                <div className="add__button">
                    <AddButton />

                </div>
                <div className="save__and_cancel__action">
                    <div>
                        <span onClick={() => dispatch(toggleEditInvoice(false))}>

                            <CancelButton />
                        </span>

                        <SaveButton />
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}


export default EditInvoice