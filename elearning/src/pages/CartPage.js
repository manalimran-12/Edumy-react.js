import React from 'react';
import { useCartContext } from '../context/cart_context';
import styled from "styled-components";
import CartItem from "../components/CartItem";
import {MdClear} from "react-icons/md";

const CartPage = () => {
  const {cart: cartItems, total_items, total_amount, clearCart} = useCartContext();

  if(cartItems.length < 1){
    return (
      <NotFoundWrapper>
        <div className='container'>
        <div type = "button" className='Cart-status'> Cart is Empty!
        </div>
      </div>
      </NotFoundWrapper>
    )
  }

  return (
    <CartWrapper>
      <div className='container'>
        <div className='cart-pg-title'>
          <h3>Shopping Cart</h3>
        </div>
        <div className='cart-grid grid'>
          {/* card grid left */}
          <div className='cart-grid-left'>
            <div className='flex flex-wrap flex-between'>
              <div className='cart-count-info'>
                <span className='fw-7 fs-18'>{total_items}</span> Course in Cart
              </div>
              <button type = "button" className='cart-clear-btn flex fs-15 fw-6 text' onClick={() => clearCart()}>
                <MdClear className='text-pink' />
                <span className='d-inline-block text-pink'>Clear All</span>
              </button>
            </div>

            <div className='cart-items-list grid'>
              {
                cartItems.map(cartItem => {
                  return (
                    <CartItem key = {cartItem.courseID} cartItem = {cartItem} />
                  )
                })
              }
            </div>
          </div>
          {/* end of grid left */}
          {/* cart grid right */}
          <div className='cart-grid-right'>
            <div className='cart-total'>
              <span className='d-block fs-18 fw-6'>Total:</span>
              <div className='cart-total-value fw-8'>${total_amount.toFixed(2)}</div>
              <button type = "button" className='checkout-btn bg-purple text-white fw-6'>Checkout</button>
            </div>
          </div>
          {/* end of cart grid right */}
        </div>
      </div>
    </CartWrapper>
  )
}

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;

  .Cart-status{
    font-weight: 600;
    border-radius: 10px;
    background-color: black;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.7);
    padding: 12px 28px;
    width: 161px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Lora', serif;

    &:hover{
      color: var(--clr-purple);
    }
  }


`;

const CartWrapper = styled.div`
  padding: 30px 0;
  background-color: lavender;
  font-family: 'Lora', serif;
  border-radius: 10px;
  .card-pg-title{
    padding: 20px 0 6px 0;
  }
  .cart-grid{
    row-gap: 40px;
    .cart-grid-left{
      margin-bottom: 30px;
    }

    .cart-clear-btn{
      span{
        margin-left: 6px;

      }
    }

    .cart-items-list{
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value{
      font-size: 34px;
    }
    .checkout-btn{
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);
      padding: 12px 28px;
      border-radius: 10px 100px;
      background-color: black;
      color: white;
      border: 1px solid rgba(0, 0, 0, 0.7);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);


      &:hover{
        background-color: lavender;
        color: var(--clr-purple);
      }
    }
    .cart-total{
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px){
      grid-template-columns: 70% 30%;;
      column-gap: 32px;
    }
  }
`;

export default CartPage