import React from 'react'
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";

function Product(props) {
    
    const [{basket}, dispatch] = useStateValue();

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    
    const AddToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item : {
                img : props.img,
                title : props.title,
                price : props.price,
                d_price : props.d_price,
                off : props.off,
                time : props.time,
                id : props.id,
                quantity : props.quantity,
            },
        });
       

    }; 
    
    return (
        <div className="item">
                <div className='bf_img'>
                    <Link to='/product' onClick={scrollToTop}>
                        <img alt="" src={props.img} />
                    </Link>
                </div>
                <div className='bf_name'>
                    <h5>
                        {props.title}
                    </h5>
                </div>
                <div className='bf_price'>
                    <p className='price'>
                        ${props.price}
                    </p>
                    <h6 className='d_price'>
                        ${props.d_price}
                    </h6>
                    <p className='off'>{props.off}</p>
                </div>
                <div className='time'>
                    <p>
                        Remaining Time:
                        {props.time}
                    </p>
                </div>
                <Button onClick={AddToBasket} className='basket-btn'>
                    Add to basket
                </Button>
        </div>
    )
}

export default Product
