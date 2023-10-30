import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import StarRating from "../components/StarRating";
import { useCartContext } from '../context/cart_context';


const Course = (props) => {

  const {id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category} = props;
  const { addToCart} = useCartContext();

  return (
    <CourseCard>
      <div className='item-img'>
      <img src = {image} alt = {course_name} />
      </div>
      <div className='item-body'>
        <h5 className='item-name'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='item-rating flex'>
          <span className='rating-star-val'>{rating_star}</span>
          <StarRating rating_star = {rating_star} />
          <span className='rating-count'>({rating_count})</span>
        </div>
        <div className='item-price'>
          <span className='item-price-new'>${discounted_price}</span>
          <span className='item-price-old'>${actual_price}</span>
        </div>
      </div>
      <div className='item-btns flex'>
        <Link to = {`/courses/${id}`} className = "item-btn see-details-btn">See details</Link>
        <Link to = "/cart" className='item-btn add-to-cart-btn' onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)}>Add to cart</Link>
      </div>

    </CourseCard>
  )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: lavender;
  border-radius: 15px; /* Adjust the radius value to control the curve of the edges */
  padding: 20px;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.1);
  display: flex;
  flex-direction: column;
  .item-body{
    margin: 14px 0;
    padding: 4px 18px;

    .item-name{
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
      text-decoration:none;
      font-family: 'Lora', serif;

      &:hover{
        text-decoration:none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
    }
    .item-creator{
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      font-family: 'Sometype Mono', monospace;
    }
    .rating-star-val{
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
      font-family: 'Lora', serif;
    }
    .rating-count{
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
      font-family: 'Lora', serif;
    }
    .item-price-new{
      font-weight: 700;
      font-size: 15px;
      font-family: 'Lora', serif;
    }
    .item-price-old{
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
      font-family: 'Lora', serif;
    }
  }

  .item-btns{
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;
    .item-btn{
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;
      width: 130px;
    
    &:hover {
      background-color: var(--clr-black);
      color: var(--clr-purple);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

      &.see-details-btn{
        background-color: lavender;
        border: 1px solid var(--clr-black);
        margin-right: 5px;
        width: 100px;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 10px 100px;
        font-family: 'Lora', serif;


        &:hover{
          background-color: rgba(0, 0, 0, 0.9);
          color: var(--clr-purple);
        }
      }

      &.add-to-cart-btn{
        background: rgba(0, 0, 0, 0.9);
        color: var(--clr-white);
        width: 112px;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 10px 100px;
        font-family: 'Lora', serif;
        align-item: center;

        &:hover{
          background-color: lavender;
          color: var(--clr-purple);
        }
      }
    }
  }
`;

export default Course