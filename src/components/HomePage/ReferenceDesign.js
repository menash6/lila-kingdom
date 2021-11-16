import React from "react";

import styled from "styled-components";

import "../../style/App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/core";

// import cooking from "../../images/designs/drawing_01";
import drawing_01 from "../../images/designs/01.jpg";
import drawing_02 from "../../images/designs/02.jpg";
import drawing_03 from "../../images/designs/03.jpg";
import drawing_04 from "../../images/designs/04.jpg";
import drawing_05 from "../../images/designs/05.jpg";
import drawing_06 from "../../images/designs/06.jpg";
import drawing_07 from "../../images/designs/07.jpg";
import drawing_08 from "../../images/designs/08.jpg";
import drawing_09 from "../../images/designs/09.jpg";
import drawing_10 from "../../images/designs/10.jpg";
import drawing_11 from "../../images/designs/11.jpg";

// import dancing from "../../images/hobbies/drama.jpg";
// import swimming from "../../images/hobbies/swimming.gif";
// import exercise from "../../images/hobbies/exercise.gif";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px 20px 10px;

  h3 {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const ReferenceContainer = styled.div`
  margin: 20px 20px;
  padding: 0 10px 5px 10px;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.66);
  padding: 20px 25px;

  h6 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  img {
    width: 95%;
    max-height: 370px;
    object-fit: cover;
  }
`;

const opinions = [
  {
    id: 1,
    names: "Anna i Łukasz",
    src: drawing_01,
  },
  {
    id: 2,
    names: "Anna i Tomasz",
    src: drawing_02,
  },
  {
    id: 3,
    names: "Gabriela i Patryk",
    src: drawing_03,
  },
  {
    id: 4,
    names: "Iwona i Radosław",
    src: drawing_04,
  },
  {
    id: 5,
    names: "Anita i Miłosz",
    src: drawing_05,
  },
  {
    id: 6,
    names: "Justyna i Dawid",
    src: drawing_06,
  },
  {
    id: 7,
    names: "Oliwia i Maciej",
    src: drawing_07,
  },
  {
    id: 8,
    names: "Anna i Łukasz",
    src: drawing_08,
  },
  {
    id: 9,
    names: "Anna i Łukasz",
    src: drawing_09,
  },
  {
    id: 10,
    names: "Anna i Łukasz",
    src: drawing_10,
  },
  {
    id: 11,
    names: "Anna i Łukasz",
    src: drawing_11,
  },
];

const ReferenceDesign = () => {
  const referencesSlides = opinions.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <ReferenceContainer>
          {/* <h6>{item.names}</h6> */}
          <img src={item.src} alt="" />

          {/* <p>{item.txt}</p> */}
        </ReferenceContainer>
      </SwiperSlide>
    );
  });

  return (
    <MainContainer name="design">
      <h3>My Drawings</h3>
      <Swiper
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          780: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={2}
        className="mySwiper"
      >
        {referencesSlides}
      </Swiper>
    </MainContainer>
  );
};

export default ReferenceDesign;
