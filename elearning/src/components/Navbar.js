import React from 'react';
import styled from "styled-components";
import {MdMenu, MdShoppingCart} from "react-icons/md";
import {Link} from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';

const Navbar = () => {
  const {total_items} = useCartContext();
  const {openSidebar} = useSidebarContext();
  return (
    <NavbarWrapper className = "bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>Ȇ</span>DUMY
          </Link>

          <div className='navbar-btns flex'>
            <Link to = "/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
            <div className='login-signup-btns'>
            <Link to="/LoginPage" className='login-btn'>
              Login
            </Link>
            <Link to="/SignupPage" className='signup-btn'>
              Signup
            </Link>
          </div>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
height: 80px;
background-color: #f2f2f2;
box-shadow: rgba(128, 0, 128, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

.navbar-brand {
  font-size: 23px;
  font-family: 'Lora', serif;
  span {
    color: var(--clr-purple);
  }
  left: 10px;
  position: relative;
}

.cart-btn {
  margin-right: 18px;
  font-size: 23px;
  position: relative;
  .item-count-badge {
    background-color: var(--clr-purple);
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 12px;
    font-weight: 700;
    display: block;
    width: 23px;
    height: 23px;
    color: var(--clr-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.sidebar-open-btn {
  transition: all 300ms ease-in-out;
  margin-right:8px;
  &:hover {
    opacity: 0.7;
  }
}

.login-signup-btns {
  font-family: 'Lora', serif;
  font-size: 18px;
}

.login-btn {
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px 15px;
  margin-right: 10px; /* Add margin to the right */
  transition: var(--transition);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: black;
    color: var(--clr-purple);
  }
}

.signup-btn {
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px 15px;
  margin-left: 10px; /* Add margin to the left */
  transition: var(--transition);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: black;
    color: var(--clr-purple);
  }
}

@media (max-width: 768px) {
  /* Adjust styling for smaller screens */
  .navbar-brand {
    font-size: 20px;
  }

  .cart-btn {
    font-size: 20px;
  }

  .login-signup-btns {
    font-size: 16px;

    .login-btn,
    .signup-btn {
      font-size: 14px;
      padding: 8px 12px;
      margin-right: 6px;
      margin-left: 10px;
    }
  }
}
`;


export default Navbar;