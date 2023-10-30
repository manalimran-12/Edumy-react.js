import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { other_images } from '../utils/images';

const Hero = () => {
  const images = useMemo(() => [
    other_images.hero1,
    other_images.hero2,
    other_images.hero3,
  ], []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [images, isHovered]);

  return (
    <HeroWrapper
      currentImageUrl={images[currentImageIndex]}
      className="bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container h-100 flex">
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  background: url(${(props) => props.currentImageUrl}) center/cover no-repeat;
  background-position: center;
  background-size: cover;
  transition: background 0.5s; // Smoothly transition background changes
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  height: 500px;

  @media (max-width: 768px) {
    height: 300px;
    background-size: contain;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    background-size: cover;
  }

  .container {
    .hero-content {
      background-color: var(--clr-white);
      max-width: 850px;
      width: 100%;
      margin-left: 30px;
      padding: 20px;
    }
  }
};
`;
export default Hero;





//const HeroWrapper = styled.div`
  // background-image: url(${other_images.hero1});
  // background-position: center;
  // background-size: cover;
  // box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  // height: 500px;

  // @media (max-width: 768px) {
  //   height: 300px; /* Adjust the height for smaller screens if needed */
  //   background-size: contain; /* You may use a different background-size property for smaller screens */
  // }

  // @media (max-width: 1024px) and (min-width: 769px) {
  //   /* Adjust styles for iPad Mini and iPad Air */
  //   background-size: cover; /* You can use 'cover' for these tablets */
  //   /* Add any other specific styles needed for these devices */
  // }

  // .container {
  //   .hero-content {
  //     background-color: var(--clr-white);
  //     max-width: 850px;
  //     width: 100%;
  //     margin-left: 30px;
  //     padding: 20px;
  //     h1 {
  //       font-size: 32px;
  //       margin-bottom: 5px;
  //       white-space: nowrap;
  //     }
  //     p {
  //       font-size: 15px;
  //     }
  //   }
  // }

