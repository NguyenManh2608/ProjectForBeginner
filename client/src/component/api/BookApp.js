import React, {Component}                                          from "react";
import {connect}                                                   from "react-redux";
import {addBook, getPublishers, loadBook, removeBook}              from "../actions";
import {Container, Divider, Grid, Icon, Input, Label, Menu, Table} from "semantic-ui-react";

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
        },
        removeBook: (id) => {
            dispatch(removeBook(id));
        }

    }
};

const mapStateToProps = (state) => {
    return {
        books: state.bookToReducer,
        publishers: state.publisherToReducer
    }
};

class BookApp extends Component {
    constructor (props) {
        super(props);
        this.title = React.createRef();
        this.author = React.createRef();
        this.publisher = React.createRef();
        this.price = React.createRef();
        this.state = {
            id: "",
            title: "",
            author: "",
            publisher: "",
            publisher_id: "",
            price: null,
            deleted: false,
            activeItem: 'home'
        }
    }

    componentWillMount () {
        this.props.loadBook();
        this.props.getPublishers();
    }

    handleClick(e) {
        e.preventDefault();
        this.props.removeBook().then(res => {
            this.setState({
                title: res.data,
                author: res.data,
                publishers: res.data,
                price: res.data

            })
        })
    }

    render () {
        return (
            <Container>
                <Grid.Column>
                    <Label> Total: {this.props.books.length}</Label>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    Title
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Author
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Publisher
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Price
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                        <Icon name='trash alternate'/>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.props.books.map((book, index) =>
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        <a href={'/#'}>{book.title}</a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {book.author}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {book.publisher.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {book.price}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Input
                                            type='checkbox'
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookApp);
