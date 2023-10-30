import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
            <button className="facebook">
                <FaFacebook />
            </button>
            <button className="instagram">
                <FaInstagram />
            </button>
            <button className="LinkedIn">
                <FaLinkedin />
            </button>

        </SocialIcons>
        <p>&copy;2023 All rights reserved</p>
        <h3><span>Ȇ</span>DUMY</h3>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 20px 0;
  font-family: 'Lora', serif;
  span {
    color: var(--clr-purple);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
//   text-align: center;
  p {
    margin: 0;
    text-align:center;
  }
  h3{
    font-size:23px;
    margin-left:20px;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  text-align:center;

  .facebook {
    font-size: 24px;
    color: white;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover{
        color: var(--clr-purple); /* Add your purple color variable here */
    }
  }
  .instagram{
    font-size: 24px;
    color: white;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover{
        color: var(--clr-purple); /* Add your purple color variable here */
    }
  }
  .LinkedIn{
    font-size: 24px;
    color: white;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover{
        color: var(--clr-purple); /* Add your purple color variable here */
    }
`;

export default Footer;

