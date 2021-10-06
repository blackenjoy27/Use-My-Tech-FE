import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import CheckoutItem from "./CheckoutItem";
import Item from './Item';


import styled from 'styled-components';
const ItemsDiv = styled.div`
    display:flex;
    flex-flow:row wrap;
    width:100%;
    padding:2.5rem;
    border:2px #90AACB;
    border-style: solid none;
    justify-content:space-around;

    a{
        &:hover{
            cursor:pointer;
        }
    }
`;

const ContentSection = styled.section`
    display:flex;
    flex-direction:column;
`
export default class CheckoutPaginate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 8,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        const data = this.props.items;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(item => <CheckoutItem key={item.item_id} info={item} notifi={this.props.popUp} openModal={this.props.openModal} />)

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
    componentDidUpdate(preProp, preState) {
        if (preProp.items.length !== this.props.items.length) {
            this.receivedData();
        }
    }
    render() {
        return (
            <ContentSection>
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
                    containerClassName={"checkoutPaginate"}
                    activeClassName={"active"} />
            </ContentSection>
        )
    }
}