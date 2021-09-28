import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Item from "./Item";

import styled from 'styled-components';
const ItemsDiv = styled.div`
    display:flex;
    flex-flow:row wrap;
    width:100%;
    height:80rem;
    justify-content:space-around;
`

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 12,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedData() {
        const data = this.props.items;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(item => <Item key={item.item_id} info={item} />)

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <section>
                <ItemsDiv>
                    {this.state.postData}
                </ItemsDiv>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </section>


        )
    }
}
