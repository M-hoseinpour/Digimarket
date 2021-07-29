import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form , Button} from 'react-bootstrap';

function Footer() {
    return (
        <div className='footer-section'> 
            <Container>
                <Row>
                    <Col lg={3}>
                        <div class="footer-left">
                            <div class="footer-logo">
                                <a href="#">Digimarket</a>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello.colorlib@gmail.com</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div class="footer-widget">
                            <h5>Information</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Service</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div class="footer-widget">
                        <h5>My Account</h5>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                    </Col>
                    <Col lg={4}>
                        <div class="newslatter-item">
                            <h5>Join Our Newsletter Now</h5>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <Form>
                                <Form.Control type="text" placeholder="Enter Your Mail"></Form.Control>
                                <Button variant="primary" type="submit">Submit </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
