import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

// Styled components for Slideshow
const SlideContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
 
`;

const FadeSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 400px;
  
`;

const FadeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FadeCaption = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

// Slideshow Images
const fadeImages = [
  {
    url: " https://img.freepik.com/premium-psd/delicious-cake-social-media-promotion-instagram-banner-template_545154-98.jpg",
    caption: " ",
  },
  {
    url: "https://png.pngtree.com/template/20220330/ourmid/pngtree-taobao-food-snack-cake-chocolate-cake-banner-image_909408.jpg",
    caption: " ",
  },

  {
    url: "https://thumbs.dreamstime.com/b/unrecognizable-woman-making-easter-cake-ai-generated-happy-easter-unrecognizable-woman-making-easter-cake-banner-ai-generated-356927323.jpg",
    caption: " ",
  },
    {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK02GYtY5bOeBc44_NyVDGbZDywYt4qJeBqQ&s",
    caption: " ",
  },
];

const Slideshow = () => {
  return (
    <SlideContainer>
      <Fade autoplay={true} infinite ={true} interval={.001} pauseOnHover={false}>
        {fadeImages.map((fadeImage, index) => (
          <FadeSlide key={index}>
            <FadeImage src={fadeImage.url} alt={`slide-${index}`} />
            <FadeCaption>{fadeImage.caption}</FadeCaption>
          </FadeSlide>
        ))}
      </Fade>
    </SlideContainer>
  );
};

export default Slideshow;
