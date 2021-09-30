import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosWithAuth from "../../helper/AxiosWithAuth";

import { CancelTransaction } from "./Checkout";

const customStyles = {
    content: {
        width: "50%",
        height: "80%",
        margin: "auto",
        borderRadius: "20px",
        backgroundColor: "#D7E9F7"
    },
};

const NewItemModal = styled.div`
    display:flex;
    flex-direction:column;
    padding:1rem 2rem;
    height:100%;

    h1{
        font-size:2rem;
    }
    form{
        margin: 1rem 0rem;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:80%;

    }
    button{
        position:absolute;
        font-size:1.25rem;
        width:10rem;
        height:4rem;
        right:5rem;
        bottom:4rem;
        background-color:#B5DEFF;
        border-style:none;
        border-radius:10px;
        &:hover{
            cursor:pointer;
        }
    }
`

const Div = styled.div`
    display:flex;
    flex-direction:column;
    margin:1rem 0rem;
    img{
        height:13rem;
        width:13rem;
        border-radius:10px;
    }
    height:80%;
    width:100%;
    justify-content:space-around;
    font-size:1.25rem;
`
const initialItemInfo = {
    url: "",
    item_name: "",
    notes: "",
    monthlyPrice: "",
}

const fakeData = {
    url: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    item_name: "Xbox",
    notes: "OMGE THIS IS SO CHEAP",
    monthlyPrice: "$1250"
}

const ItemModal = ({ type, open, closeModal }) => {

    const [itemInfo, setItemInfo] = useState(initialItemInfo)

    const updateItemInfo = (e) => {
        setItemInfo({ ...itemInfo, [e.target.name]: e.target.value })
    }

    const submitItemInfo = (e) => {
        e.preventDefault();
        console.log(itemInfo);
        setItemInfo(initialItemInfo);
    }

    useEffect(() => {
        if (type !== 0) {
            AxiosWithAuth().get(`/api/items/${type}`)
                .then(({ data }) => {
                    setItemInfo(data)
                })

        }
    }, [type])
    return (
        <Modal
            isOpen={open}
            style={customStyles}
            ariaHideApp={false}
            onRequestClose={() => { setItemInfo(initialItemInfo); closeModal() }}
        >
            <NewItemModal>
                <CancelTransaction onClick={() => { setItemInfo(initialItemInfo); closeModal() }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></CancelTransaction>
                {type === 0 ? <>
                    <h1>New Item Info</h1>
                    <form onSubmit={submitItemInfo}>
                        <label>
                            Photo
                            <input
                                type="file"
                                name="url"
                                value={itemInfo.url}
                                onChange={updateItemInfo}
                                required />
                        </label>

                        <label>
                            Name:
                            <input
                                name="item_name"
                                value={itemInfo.item_name}
                                onChange={updateItemInfo}
                                required />
                        </label>
                        <label>
                            Rent Fee(Monthly):
                            <input
                                name="monthlyPrice"
                                value={itemInfo.monthlyPrice}
                                onChange={updateItemInfo}
                                required />
                        </label>
                        <label>
                            Notes(optional):
                            <input
                                name="notes"
                                value={itemInfo.notes}
                                onChange={updateItemInfo} />
                        </label>
                        <button type="submit">Post Item</button>
                    </form>
                </> :
                    <>
                        <h1>Item Info</h1>
                        <Div>
                            <img src={itemInfo.url} alt={`Image for ${itemInfo.item_name}`} />
                            <span>{`Item Name: ${itemInfo.item_name}`}</span>
                            <span>{`Fee/month: ${itemInfo.monthlyPrice}`}</span>
                            <span>{`Notes: ${itemInfo.notes}`}</span>
                        </Div>
                    </>}

            </NewItemModal>
        </Modal>
    )
}

export default ItemModal;
