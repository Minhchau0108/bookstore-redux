import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Card, Button, Container} from "react-bootstrap";
import cartActions from '../redux/actions/cart.actions';
import bookActions from '../redux/actions/book.actions';
import AlertMsg from '../components/AlertMsg' 

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const CartPage = () => {
  const books = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()
  return (
    <Container className="my-3">
        <AlertMsg/>
        <ul className="list-unstyled d-flex flex-wrap justify-content-between">
              {books.map((book) => (
                <li key={book.id}>
                  <Card
                    style={{
                      width: "12rem",
                      height: "27rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`${BACKEND_API}/${book.imageLink}`}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>@{book.author}</Card.Text>
                    </Card.Body>
                    <Button
                        className="position-absolute btn-danger"
                        style={{ top: "5px", right: "5px" }}
                        size="sm"
                        onClick={() => dispatch(cartActions.removeBook(book.id))}
                      >
                        &times;
                      </Button>
                      <Button 
                      className="position-absolute btn-success"
                      style={{ top: "40px", right: "5px" , width: "35px"}}
                      onClick={() => dispatch(bookActions.addToFavorites(book))}>
                     ❤️
                  </Button>
                  </Card>

                </li>
              ))}
        </ul>
    </Container>
  )
}

export default CartPage
