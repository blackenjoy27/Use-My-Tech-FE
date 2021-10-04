import React from "react";
import { TheItem, PriceDiv, AddSVG, RemoveSVG, ActionDiv, ItemTitle } from "../styledcomponents/StyledEle";
import { addItemToCheckout, removeItemFromCheckout } from "../../redux/action";
import { connect } from "react-redux";


const Item = (props) => {
    const { info, checkoutItems, addItemToCheckout, removeItemFromCheckout, notifi, openModal } = props;


    return (
        <TheItem>
            <img src={info.url}></img>
            <ItemTitle><h2>{info.item_name}</h2><span>#{info.item_id}</span></ItemTitle>


            <PriceDiv>
                <h3>{`$${info.monthlyPrice}/month`}</h3>
                <ActionDiv>
                    <svg onClick={() => openModal(info.item_id)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" className="svg-inline--fa fa-info-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                    {checkoutItems.indexOf(info) === -1 ?
                        <AddSVG onClick={() => { notifi(`${info.item_name} is successfully added to the cart`); addItemToCheckout(info) }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" className="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></AddSVG>
                        : <RemoveSVG onClick={() => { notifi(`${info.item_name} is successfully removed from the cart`); removeItemFromCheckout(info) }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-square" className="svg-inline--fa fa-minus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"></path></RemoveSVG>}
                </ActionDiv>
            </PriceDiv>
        </TheItem >
    )
}

export default connect((state) => {
    return {
        checkoutItems: state.checkoutItems,
    }
}, { addItemToCheckout, removeItemFromCheckout })(Item);