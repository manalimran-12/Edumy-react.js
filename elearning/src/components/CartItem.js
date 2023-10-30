import React from 'react';
import styled from "styled-components";
import {FaTrashAlt} from "react-icons/fa";
import { useCartContext } from '../context/cart_context';

const CartItem = ({cartItem}) => {
  const {removeFromCart} = useCartContext();

  return (
    <CartItemWrapper className='grid'>
      <div className='cart-item-img'>
        <img src = {cartItem.image} alt = {cartItem.course_name} />
      </div>
      <div className='cart-item-info'>
        <p className='fw-7 fs-15'>{cartItem.course_name}</p>
        <span className='cart-item-creator fs-13 opacity-09'>By {cartItem.creator}</span>
        <div className='fw-7 text-purple'>${cartItem.discounted_price}</div>
        <div className='cart-item-category bg-orange fs-12 d-inline-block text-capitalize text-white fw-7'>{cartItem.category}</div>
        <br />
        <button type = "button" className='remove-btn fs-13 text-dark fw-6' onClick={() => removeFromCart(cartItem.courseID)}>Remove <span><FaTrashAlt /></span></button>
      </div>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  grid-template-columns: 110px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px;
  font-family: 'Lora', serif;
  border-radius: 10px 100px;
  box-shadow: rgba(128, 0, 128, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .cart-item-img{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 10px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cart-item-category{
    padding: 0px 10px;
    border-radius: 6px;
    background-color: black;
    border-radius: 10px 100px;
  }
  .remove-btn{
    margin-top: 16px;
    transition: var(--transition);
    &:hover{
      color: red;
    }
  }
`;

export default CartItem