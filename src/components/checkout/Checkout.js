import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkout_Product from './Checkout_Product';
import { useStateValue } from '../StateProvider';
import "./checkout.css"


function Checkout() {
    const [{basket, total, item}] = useStateValue();
    const [gift, setGift] = useState(false)
    return (
        <div className='checkout'>
            <h2>Shopping Cart</h2>
            <Container fluid>
                    <Row>
                        <Col md={9}>
                             {basket?.length === 0 ? <h4>Your basket is empty</h4>: (basket?.map(item => <Checkout_Product id={item.id} img = {item.img}  title = {item.title} price = {item.price} quantity={item.quantity} d_price={item.d_price}/>))  }
                        </Col>
                        <Col md={3}>
                            <div className='total'>
                                    <h5>Total (items: {item}) :${total}</h5>
                                <form>
                                        <input
                                        name="isbuying"
                                        type="checkbox"
                                        checked={gift}
                                        onChange={() => (setGift(!gift))} />
                                        <small>This order contains a gift </small>
                                </form>
                                <div className='proceed-btn'>
                                    <button>
                                        Proceed to checkout
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Checkout
