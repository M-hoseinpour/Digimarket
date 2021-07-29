import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img_1 from '../imgs/online-shop.jpg'
import img_2 from '../imgs/eshop.jpg'
import img_3 from '../imgs/mega-sale.jpg'
import "../styles/Top.css"
import img1 from './images/pet.jpg'
import img2 from './images/interior.jpg'
import img3 from './images/shopping.jpg'
import { Link } from "react-router-dom";

import Carousels  from './carousel';

function Top() {
    return (
        <div className="top-section py-2">
            <Container fluid>
                <Row>
                    <Col xl={3} lg={3}>
                        <div className='img-section'>
                            <Link to='/product'>
                            <img src={img_1}></img>
                            </Link>
                            <Link to='/product'>
                            <img src={img_2}></img>
                            </Link>
                        </div>
                    </Col>
                    <Col xl={7} lg={9}><Carousels img1={img1} img2={img2} img3={img3} item='1'/></Col>
                    <Col className='ads-section'><Link to='/product'><img className="ads" src={img_3}></img></Link></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Top

