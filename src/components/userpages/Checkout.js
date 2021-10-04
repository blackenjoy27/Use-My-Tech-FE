import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CheckoutPaginate from "./CheckoutPaginate";
import Modal from 'react-modal';
import { clearCart } from "../../redux/action";
import { useHistory } from "react-router";
import AxiosWithAuth from "../../helper/AxiosWithAuth";

const CheckoutItemSection = styled.section`
    display:flex;
    flex-direction:column;
    width:90%;
    margin:3rem auto;
    background-color:#F1F6F9;
    border-radius:20px;

`

const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:1.5rem auto;
    width:95%;
`

const TotalItem = styled.h1`
    font-size:2rem;
`

const EmptyMessage = styled.h1`
    font-size:3rem;
    margin:10rem;

`

const GoBack = styled.svg`
    height:2.5rem;
    width:2.5rem;

    &:hover{
        cursor:pointer;
        
        path{
            fill:#D7E9F7;
        }
    }
`

const BottomDiv = styled.div`
    display:flex;
    width:90%;
    margin:3rem auto;
    justify-content:space-between;
`

const PolicyDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:40rem;
    height:15rem;
    border-radius:50px;
    background-color:#F1F6F9;
    padding:2rem;
    align-items:space-around;

    span{
        font-size:2rem;
    }
    li{
        font-size:1.15rem;
        list-style-type: circle;
        margin:1rem;
    }

`

const TotalPriceDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:30rem;
    height:15rem;
    background-color:#F1F6F9;
    border-radius:50px;
    padding:2rem 2rem 0rem;

    span{
        font-size:2rem;
    }
    p{
        font-size:2rem;
        text-align:right;
    }
    button{
        width:12rem;
        height:3rem;
        margin: 3rem auto;
        border-radius:10px;
        font-size:1.25rem;
        background-color:#6c7ac9;
        border-style:none;
        color:#F1F6F9;
        
        &:hover{
            cursor:pointer;
        }
    }
`

export const CancelTransaction = styled.svg`
    position:absolute;
    right:1rem;
    top:1rem;
    width:2rem;
    height:2rem;
    &:hover{
        cursor:pointer;
        path{
            fill:#BB371A;
        }
    }
`

export const customStyles = {
    content: {
        width: "80%",
        height: "80%",
        margin: "auto",
        borderRadius: "20px",
        backgroundColor: "#D7E9F7"
    },
};

const TransactionDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:1rem;
    margin-left:1rem;
    h1{
        font-size:2rem;
        margin:1rem;
    }


`
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    form{
        margin:2rem;
    }

    label{
        font-size:1.25rem;
        display:flex;
        align-items:center;
        input{
            margin:1rem;
        }
    }
`

const PriceConfirmDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:30rem;
    height:15rem;
    background-color: #F9F9F9;
    border-radius:50px;
    padding:2rem 2rem 0rem;
    margin-top:7rem;

    span{
        font-size:2rem;
    }
    p{
        font-size:2rem;
        text-align:right;
    }
    button{
        width:12rem;
        height:3rem;
        margin: 3rem auto;
        border-radius:10px;
        font-size:1.25rem;
        background-color:#B3E283;
        border-style:none;
        color:#343A40;
        
        &:hover{
            cursor:pointer;
        }
    }
`


const Checkout = (props) => {
    const { items, user_id, popUp, clearCart, getItems } = props;
    const [price, setPrice] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const { push } = useHistory();

    const placeOrder = async () => {
        await items.forEach(item => {
            AxiosWithAuth().put(`/api/items/rent/${item.item_id}`, { user_id })
                .then(({ data }) => {
                })
                .catch(error => {
                    alert(`Rent ${item.item_name}#${item.item_id} failed: \nIt's possible that this item is already been rented.`)
                })
        })
        clearCart();
        getItems();
    }

    useEffect(() => {
        setPrice(items.reduce((total, item) => {
            return total += parseInt(item.monthlyPrice)
        }, 0))
    }, [items])
    return (
        <>
            <CheckoutItemSection>
                <Header>
                    <GoBack onClick={() => { push("/userpage"); document.querySelector(".pageName").textContent = "Items"; }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></GoBack>
                    {items.length !== 0 && <TotalItem>{`${items.length} items`}</TotalItem>}
                </Header>
                {items.length !== 0 ? <CheckoutPaginate items={items} /> : <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CheckoutItemSection>
            {items.length !== 0 &&
                <BottomDiv>
                    <PolicyDiv>
                        <span>Notices</span>
                        <ul>
                            <li>
                                The total price indicated the amount you need to pay monthly for the items you haved selected.
                            </li>
                            <li>
                                The items should be in your hand within 5-7 business days.
                            </li>
                            <li>
                                Ones will be charge extra fee if the item is found damaged when it's returned.
                            </li>
                        </ul>
                    </PolicyDiv>
                    <TotalPriceDiv>
                        <span>Total price:</span>
                        <p>{`$${price}.00`}</p>
                        <button onClick={() => setIsOpen(true)}>Proceed</button>
                    </TotalPriceDiv>
                </BottomDiv>}
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                ariaHideApp={false}
                onRequestClose={() => setIsOpen(false)}
            >
                <CancelTransaction onClick={() => setIsOpen(false)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></CancelTransaction>
                <TransactionDiv>
                    <h1>Transaction Confirmation</h1>
                    <Container>
                        <form>
                            <label>
                                Card Number:
                                <input placeholder="4916698435688698" readOnly disabled />
                            </label>
                            <label>
                                Address:
                                <input placeholder="41-21 124th St" readOnly disabled />
                            </label>
                            <label>
                                City:
                                <input placeholder="Jamaica" readOnly disabled />
                            </label>
                            <label>
                                State:
                                <input placeholder="NY" readOnly disabled />
                            </label>
                            <label>
                                Postal Code:
                                <input placeholder="11212" readOnly disabled />
                            </label>
                        </form>
                        <PriceConfirmDiv>
                            <span>Total price:</span>
                            <p>{`$${price}.00`}</p>
                            <button onClick={() => {
                                setIsOpen(false);
                                popUp("Transaction Completed Successfully~");
                                placeOrder();
                            }}>Place Order</button>
                        </PriceConfirmDiv>
                    </Container>
                </TransactionDiv>
            </Modal>
        </>
    )
}

export default connect((state) => {
    return {
        items: state.checkoutItems,
        user_id: state.user_id,
    }
}, { clearCart })(Checkout);

