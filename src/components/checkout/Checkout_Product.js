import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {useStateValue} from '../StateProvider'
import { useEffect } from 'react';

function Checkout_Product(props) {
    const [buying, setBuying] = useState(true);
    const [quantity, setQuantity] = useState(props.quantity);
    const [price, setPrice] = useState(props.price);
    const [ {basket, total, item}, dispatch ] = useStateValue();
    // const initialPrice = props.price
    let op;
    if (buying){
        op=1;
    } else{
        op=.65
    }

    // useEffect(() => {
    //     return () => {
    //      setQuantity(1)
    // }})

    const IncreaseBasket = () => {
        dispatch({
            type: "INCREASE_TOTAL",
            price : props.price,
            item : item
        });
    };

    const decreaseBasket = () => {
        dispatch({
            type: "DECREASE_TOTAL",
            price : props.price,
            item : item
        });
    };

    const Select = () => {
        dispatch({
            type: "SELECT",
            price : props.price,
            quantity : quantity
        });
    };

    const DisSelect = () => {
        dispatch({
            type: "DISELECT",
            price : props.price,
            quantity : quantity
        });
    }; 

    const removeFromBasket = () => {
        if (buying){
            dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : props.id,
            price : props.price,
            quantity : quantity
        })} else {
            setBuying(!buying)
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id : props.id,
                price : 0,
                quantity : 0
        })
    }
        setQuantity(props.quantity)
    }
    return (
        <div className='Checkout_Product' style={{opacity:op}}>
            
            <img src={props.img}></img>
            <div className='checkbox_info'>
                <h3>{props.title}</h3>
                <p>Price : ${props.price}</p>
                <div className='checkbox_buttons'>
                    <p>Quantity :</p>
                    <div className='checkout-btns'>
                        <Button onClick={() => {setQuantity(quantity + 1); buying && IncreaseBasket(); }}>+</Button>
                        {quantity}
                        <Button onClick={() => {setQuantity(quantity > 1? quantity - 1: quantity); quantity > 1 && (buying && decreaseBasket())}}>-</Button>
                    </div>
                </div>
                <small>{quantity > 1 && 'Subtotal : $'+ props.price * quantity } </small>
                <div className='checkout_items'>
                    <a href='#'>Save for later</a>
                    <a href='#'>Share with friends</a>
                    <a href='#'>Compare with similar items</a>
                </div>
            </div>
            <div className='checkbox_form'>
                <form>
                <label>
                    select:
                    <input
                    name="isbuying"
                    type="checkbox"
                    checked={buying}
                    onChange={() => {setBuying(!buying); !buying ? Select(): DisSelect() } }
                    />
                </label>
                </form>
            </div>
            <div class="close-button">
               <a onClick={removeFromBasket}>×</a>
            </div>
        </div>
    )
}

export default Checkout_Product
