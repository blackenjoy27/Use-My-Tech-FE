import React from "react";
import { TheItem } from "../styledcomponents/StyledEle";

const Item = (props) => {
    const { info } = props;

    return (
        <TheItem>
            <img src={info.url}></img>
            <h2>{info.item_name}</h2>
            <h3>{info.price_a_day}</h3>
        </TheItem>
    )
}

export default Item;