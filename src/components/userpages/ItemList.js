import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import Item from "./Item";


import styled from 'styled-components';
import { connect } from 'react-redux';
const ItemsDiv = styled.div`
    display:flex;
    flex-flow:row wrap;
    width:100%;
    margin-top:2rem;
    justify-content:space-around;
`;

const ContentSection = styled.section`
    display:flex;
    flex-direction:column;
`
class ItemList extends Component {
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
        const postData = slice.map(item => <Item key={item.item_id} info={item} notifi={this.props.popUp} openModal={this.props.openModal} />)

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

    componentDidUpdate(preProps, preState) {
        if (preProps.items.length !== this.props.items.length) {
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
                    containerClassName={"pagination"}
                    activeClassName={"active"} />

            </ContentSection>
        )
    }
}

export default connect((state) => {
    return {
        checkoutItems: state.checkoutItems
    }
})(ItemList);
