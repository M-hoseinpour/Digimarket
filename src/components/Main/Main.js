import React, { Component } from 'react'
import Top from './Top'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from './category'
import img1 from "../imgs/cream.jpg"
import img2 from "../imgs/food_basket.jpg"
import img3 from "../imgs/sause.jpg"
import img4 from "../imgs/wear.jpg"
import img5 from "../imgs/black_friday.jpg"
import shoe from "../imgs/shoe.jpg"
import watch from "../imgs/watch.jpg"
import headphone from "../imgs/headphones.jpg"
import tshirt from "../imgs/tshirt.jpg"
import food from "../imgs/Food.jpg"
import torn_hole from "../imgs/torn-hole.jpg"
import cake from "../imgs/cake.jpg"
import crispy from "../imgs/crispy.jpg"
import '../styles/Main.css'
import Custom_carousel  from './custom_carousel';
import Group from './Group'
import Footer from './Footer'
import Items from '../Header/Items';
import { Link } from "react-router-dom";

class Main extends Component {
    render() {
        const items = [
            {img:shoe, title:'shoe' ,           price:20,   d_price:16,     off:'20%',  id : 1, quantity: 1},
            {img:watch, title:'watch' ,         price:80,   d_price:76,   off:'5%',   id : 2, quantity: 1},
            {img:headphone, title:'Headphone',  price:20 ,  d_price:16,      off:'20%',  id : 3, quantity: 1},
            {img:tshirt, title:'Tshirt' ,       price:15 ,  d_price:13.5,     off:'10%',  id : 4, quantity: 1},
            {img:shoe, title:'Headphone',       price :30,  d_price:28.5,   off :'5%',  id : 5, quantity: 1}
            ]

        const scrollToTop = () => {
            window.scrollTo(0, 0)
            }
        return (
            <div>
                <div>
                    <Top />
                </div>
                <Container fluid className='ctg'>
                    <Row>
                        <Col><Link to='/product' onClick={scrollToTop}><Category img={img1} title='Anti-wrinkle Face Suncare'/></Link></Col>
                        <Col><Link to='/product' onClick={scrollToTop}><Category img={img2} title='Gouda Cheese'/></Link></Col>
                        <Col><Link to='/product' onClick={scrollToTop}><Category img={img3} title='Heinz Tomato Ketchup'/></Link></Col>
                        <Col><Link to='/product' onClick={scrollToTop}><Category img={img4} title='Workwear'/></Link></Col>
                    </Row>
                </Container>

                <Container fluid className='black_friday'>
                    <Row>
                        <Col sm={3}><Category img={img5}/></Col>
                        <Col sm={9}>
                            <div>
                                    <Custom_carousel items={items} num='4'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='food-section'>
                    <div className='food-slogan'>
                        <a href="#" class="btn-shine">Better food better mood</a>
                    </div>
                    <Container fluid className='ctg-food'>
                        <Row>
                            <Col sm={6}><Link to='/product' onClick={scrollToTop}><Category img={cake} /></Link></Col>
                            <Col sm={3}><Link to='/product' onClick={scrollToTop}><Category img={food} /></Link></Col>
                            <Col sm={3}><Link to='/product' onClick={scrollToTop}><Category img={crispy} /></Link></Col>
                        </Row>
                    </Container>
                </div>
                <Container fluid className='special-offer'>
                    <Row>
                        <Col sm={9}>
                            <div>
                                    <Custom_carousel items={items} num='4'/>
                            </div>
                        </Col>
                        <Col sm={3}><Category img={torn_hole}/></Col>
                    </Row>
                </Container>

                <Group />

                <Footer />

            </div>
        )
    }
}

export default Main
