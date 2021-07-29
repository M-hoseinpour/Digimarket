import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageMagnify from './ImageMagnify';
import watch1 from './images/watch1i.jpg'
import watch2 from './images/watch2i.jpg'
import watch3 from './images/watch3i.jpg'
import watch4 from './images/watch4i.jpg'
import watch5 from './images/watch5i.jpg'
import './Good.css'
import img_1 from "../imgs/shoe.jpg"
import img_2 from "../imgs/headphones.jpg"
import img_3 from "../imgs/watch.jpg"
import img_4 from "../imgs/tshirt.jpg"
import img_5 from "../imgs/shoe.jpg"
import Custom_carousel from '../Main/custom_carousel';
import Footer from '../Main/Footer'


class Good extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            color: 'Brown'
        })
    }
    render() {
        const items = [
            { img: img_1, title: 'shoe', price: 20, d_price: 16, off: '20%', quantity: 1, id: 1 },
            { img: img_2, title: 'Headphone', price: 30, d_price: 28.5, off: '5%', quantity: 1, id: 2 },
            { img: img_3, title: 'toothpaste', price: 10, d_price: 8, off: '20%', quantity: 1, id: 3 },
            { img: img_4, title: 'Tshirt', price: 20, d_price: 18, off: '10%', quantity: 1, id: 4 },
            { img: img_2, title: 'Headphone', price: 30, d_price: 28.5, off: '5%', quantity: 1, id: 5 },
            { img: img_5, title: 'toothpaste', price: 10, d_price: 8, off: '20%', quantity: 1, id: 3 },
        ]
        return (
            <div className='good-section'>
                <Container fluid className='good'>
                    <Row>
                        <Col lg={6}>
                            <ImageMagnify
                                image1={watch1}
                                image2={watch2}
                                image3={watch3}
                                image4={watch4}
                                image5={watch5}
                            />

                        </Col>
                        <Col lg={6} className='good-info'>
                            <h3>Fashion Wrist Watch for Men</h3>
                            <div>
                                <i className="fas fa-star active"></i>
                                <i className="fas fa-star active"></i>
                                <i className="fas fa-star active"></i>
                                <i className="fas fa-star active"></i>
                                <i className="fas fa-star"></i>
                                <span className='thums-up'>85% liked this product
                                    <i className="far fa-thumbs-up"></i>
                                </span>
                            </div>
                            <div>
                                <small className='rating'>506 Ratings</small>
                                <small className='comments'>36 FAQ</small>
                            </div>
                            <div>
                                <small className='avaliable'>
                                    Availability : available In Store
                                </small>
                                <small className='deliver'>
                                    Deliver for free
                                </small>

                            </div>
                            <hr className='hr' />
                            <div>
                                <h5>Color : <small className='color'>{this.state.color}</small></h5>
                                <span className='color-bar color-black' onClick={() => (this.setState({ color: 'Black' }))}></span>
                                <span className='color-bar color-brown' onClick={() => (this.setState({ color: 'Brown' }))}></span>
                                <span className='color-bar color-blue' onClick={() => (this.setState({ color: 'Navy Blue' }))}></span>
                                <span className='color-bar color-silver' onClick={() => (this.setState({ color: 'Silver' }))}></span>
                                <span className='color-bar color-purple' onClick={() => (this.setState({ color: 'Bright blue' }))}></span>
                            </div>
                            <h5>
                                Product Details :
                            </h5>
                            <ul className='details'>
                                <li className='detail'>Product Dimensions ‏ : ‎ 9.45 x 1.57 x 0.28 inches; 2.12 Ounces</li>
                                <li className='detail'>Manufacturer ‏ : ‎ FIZILI</li>
                                <li className='detail'>Date First Available ‏ : ‎ September 23, 2021</li>
                                <li className='detail'>Item model number ‏ : ‎ 2150</li>
                                <li className='detail'>Water resistant depth   : 30 Meters</li>
                                <li className='detail'>Part Number  :	MGX2150-016</li>
                                <li className='detail'>Product Warranty  : Please contact the seller directly for warranty information</li>
                            </ul>
                            <div className='price-section'>
                                <h5>
                                    Price :
                                </h5>
                                <span className='detail-price'>
                                    $42.99
                                </span>
                            </div>
                            <div className='about'>
                                <h4>
                                    About this item :
                                </h4>
                                <ul className='about-details'>
                                    <li className='about-detail'>Merry Christmas: 2019 Christmas gifts, carefully designed premium magnet gift box packaging in FIZILI store. 2019 new models limited to 200 ...</li>
                                    <li className='about-detail'> <a href='#'>More ...</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <h3 className='related'>
                    Products related to this item :
                </h3>
                <Custom_carousel
                    items={items}
                    num='5'
                />

                <Footer />
            </div>

        )
    }

}

export default Good
