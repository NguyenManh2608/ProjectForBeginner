import React, {Component} from "react";
import {connect} from "react-redux";
import {addBook, getPublishers, loadBook} from "./actions";

const mapDispatchToProps = dispatch => {
    return {
        loadBook: () => {
            dispatch(loadBook());
        },
        addBook: (title, author, publisher_id, price) => {
          dispatch(addBook(title, author, publisher_id, price))
        },

        getPublishers: () => {
            dispatch(getPublishers());
        }

    }
};

const mapStateToProps = (state) => {
    return {
        books       : state.bookToReducer,
        publishers  : state.publisherToReducer
    }
};

class BookApp extends Component {
    constructor(props){
        super(props);
        this.title = React.createRef();
        this.author = React.createRef();
        this.publisher = React.createRef();
        this.price = React.createRef();
        this.state = {
            title: "",
            author: "",
            publisher: "",
            publisher_id: "",
            price: null
        }
    }

    componentWillMount(){
        this.props.loadBook();
        this.props.getPublishers();
    }

    titleOnchange(e) {
        this.setState({
            title: e.currentTarget.value
        });
    }

    authorOnchange(e) {
        this.setState({
            author: e.currentTarget.value
        })
    }

    priceOnChange(e) {
        this.setState({
            price: e.currentTarget.price
        })
    }

    submitSave(e) {
        e.preventDefault();
        this.props.addBook(this.title.current.value,     this.author.current.value,
                           this.publisher.current.value, this.price.current.value);
    }

    render () {
        return (
            <div>
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
                            <td>{book.publisher.name}</td>
                            <td>{book.price}</td>
                        </tr>)}
                    </thead>
                </table>
                <form onSubmit={this.submitSave.bind(this)}>
                    <label>
                        Title :
                    </label>
                    <input ref={this.title} type="text" onChange={this.titleOnchange.bind(this)}/>
                    <label>
                        Author :
                    </label>
                    <input type='text' ref={this.author} onChange={this.authorOnchange.bind(this)}/>
                    <label> Publisher:
                    </label>
                        <select>
                            {this.props.publishers.map((publisher, index) => <option ref={this.publisher} value={publisher.id} key={index}>{publisher.name}</option>)}
                        </select>
                    <label>
                        Price:
                    </label>
                    <input ref={this.price} type='text' onChange={this.priceOnChange.bind(this)}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookApp);
