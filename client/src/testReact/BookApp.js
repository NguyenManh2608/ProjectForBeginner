import React, {Component} from "react";
import {connect} from "react-redux";
import {addBook, checkValue, deleteBook, getPublishers, loadBook, searchAdvance} from "./actions";

const mapDispatchToProps = dispatch => {
    return {
        loadBook: () => {
            dispatch(loadBook());
        },
        addBook: (title, author, publisher_id, price) => {
          dispatch(addBook(title, author, publisher_id, price))
        },
        deleteBook: (books) => {
            dispatch(deleteBook(books));
        },
        checkValue: (id, check) => {
            dispatch(checkValue(id, check));
        },
        searchAdvance :(keyword) => {
            dispatch(searchAdvance(keyword));
        },
        getPublishers: () => {
            dispatch(getPublishers());
        }
    }
};

const mapStateToProps = (state) => {
    return {
        books       : state.bookToReducer,
        publishers  : state.publisherToReducer,
    }
};

class BookApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            publishers: "",
            publisher_id: "",
            keyword  : '',
            price: null,
            visible: false,
        };
        this.handleSubmit   = this.handleSubmit.bind(this);
        this.logChange      = this.logChange.bind(this);
        this.checkBoxChange = this.checkBoxChange.bind(this);
    }

    componentWillMount() {
        this.props.loadBook();
        this.props.getPublishers();
    }
     // handle form log change
    logChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBook( this.state.title, this.state.author,
                            this.state.publisher_id, this.state.price);
    }

    // Do search
    searchAdvance(){
        this.props.searchAdvance(this.state.value)
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState({
            keyword: this.state.value
        })
    }

    //create checkbox to handle event of checkbox
    checkBoxChange(e) {
        this.props.checkValue(e.currentTarget.getAttribute('id'), e.currentTarget.checked)
    }

    //button delete
    deleteClick(e){
        e.preventDefault();
        this.props.deleteBook(this.props.books);
    }

    render () {
        return (
            <div>
                <br/>
                <button onClick={this.deleteClick.bind(this)}>Delete</button>
                <br/>
                {/*Todo search advance at home*/}
                {/*form use to search*/}
                <form onChange={this.handleInputChange}>
                    <input type="text" onChange={this.handleInputChange} ref={input => this.search = input}
                           placeholder='Search....'/>
                    <p>{this.state.keyword}</p>
                    <input type='submit' onChange={this.searchAdvance.bind(this)}/>
                </form>
                {/*show list book*/}
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Author</td>
                            <td>Publisher</td>
                            <td>Price</td>
                        </tr>
                        {this.props.books.map((book, index) =>
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.publisher.name}</td>
                            <td key={index}>
                            <input onChange={this.checkBoxChange.bind(this)}
                                   id={index} type='checkbox' checked={book.check}/>
                            </td>
                        </tr>)}
                    </thead>
                </table>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type="text" onChange={this.logChange} name='title'/>
                    <label>Author: </label>
                    <input type='text' onChange={this.logChange} name='author'/>
                    <label> Publisher: </label>
                        <select onChange={this.logChange} name='publisher_id'>
                            {this.props.publishers.map((publisher, index) =>
                                <option key={index} value={publisher.id} >{publisher.name}</option>)}
                        </select>
                    <label>Price:</label>
                    <input type='text' onChange={this.logChange} name='price' />
                    <input type='submit'/>
                </form>
                <div>
                    <p>This is a segment of page</p>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookApp);
