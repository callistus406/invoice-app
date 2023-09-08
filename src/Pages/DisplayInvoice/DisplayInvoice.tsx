import { styled } from '@mui/material/styles';
import { DeleteButton, EditButton, PaidButton } from '../../components/Buttons/Buttons';
import "./DisplayInvoice.css"
import IconButton from '@mui/material/IconButton';
import { FunctionComponent } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ItemListProps } from './types';
import { useDispatch } from 'react-redux';
import { toggleEditInvoice } from "../../Redux/features/pages/pageSlice"
const StyledContainer = styled("div")({
    // background:"#F8F8FB",
    // width:"60%",
    // height:"700px",
    // border:"1px solid blue",
    margin: "auto",
    // padding:"0 7rem"
})
const StyledBackButton = styled(IconButton)({
    color: "#7C5DFA",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
})
const DisplayInvoice = () => {
    const dispatch = useDispatch()
    return (
        <StyledContainer>
            <div className="display__invoice_header">
                <div>
                    <span>
                        <StyledBackButton aria-label="Back" >
                            <ArrowBackIosIcon fontSize='small' />
                        </StyledBackButton>
                    </span>
                    <span> Go back</span>
                </div>
            </div>
            <div className="invoice__actions">
                <div>
                    <span>Status</span>
                    <span> Pending</span>
                </div>
                <div className='action__btns'>
                    <div>
                        <span onClick={() => dispatch(toggleEditInvoice(true))}>

                            <EditButton />
                        </span>
                        <DeleteButton />
                        <PaidButton />
                    </div>
                </div>

            </div>
            <div className="invoice__preview_container">
                <div className="invoice__preview_header">
                    <div>
                        <h4> <span>#</span>AS3434</h4>
                        <p>Graphic Design</p>
                    </div>
                    <div>
                        <p>19 Union Terrace</p>
                        <p>London</p>
                        <p>E13EZ</p>
                        <p>United kingdom</p>
                    </div>
                </div>

                <div className="invoice__preview_middle_content">
                    <div className='invoice__date'>
                        <div>
                            <span>Invoice Date</span>
                            <h4>21 Aug 2021</h4>
                        </div>
                        <div>
                            <span>Payment Due</span>
                            <h4>20 Sep 2021</h4>
                        </div>

                    </div>
                    <div className='bills_to'>
                        <span>Bill to</span>
                        <div>
                            <h4>Alex Grim</h4>
                            <span>84 church way Bradford BD19PB united kingdom</span>
                        </div>
                    </div>
                    <div className='sent__to'>
                        <span>Sent to</span>
                        <h4>alexgrim@mail.com</h4>
                    </div>
                </div>
                <div className="invoice__preview_bottom_content">
                    <div className="invoice__bottom_content">
                        <div>

                            <span>Item Name</span>
                        </div>
                        <div>

                            <span>Qty</span>
                        </div>
                        <div>

                            <span>Price</span>
                        </div>

                        <div>

                            <span>Total</span>
                        </div>
                    </div>


                    <div className="invoice__preview__item">

                        <ItemList title="Banner" qty={34} price={156} total={156} />
                        <ItemList title="Design" qty={12} price={3000} total={300} />

                    </div>
                </div>

                <div className="invoice__preview__footer">
                    <div>
                        <span>Amount Due</span>
                    </div>

                    <div>
                        <h3>${556.4}</h3>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default DisplayInvoice


const ItemList: React.FC<ItemListProps> = ({ title, qty, price, total }) => {
    return (
        <div className='invoice__item'>
            <div>
                <span>{title}</span>

            </div>
            <div>
                <span>{qty}</span>

            </div>
            <div>
                <span>$ {price}</span>

            </div>
            <div>

                <span>$ {total}</span>
            </div>
        </div>
    )
}