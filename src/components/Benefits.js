import React from "react";
import cooking from "../images/hobbies/cooking.jpg";
import drawing from "../images/hobbies/drawing2.jpg";
import dancing from "../images/hobbies/drama.jpg";
import swimming from "../images/hobbies/swimming.gif";
import exercise from "../images/hobbies/exercise.gif";

import styled from "styled-components";

const Benefit = styled.div`
  width: 20%;
  min-width: 200px;
  height: auto;
  margin-top: 25px;
  padding: 0 10px 5px 10px;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.66);
  transition: 0.25s;

  h5 {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    padding: 10px;
  }

  p {
    font-size: 14px;
  }

  :hover {
    box-shadow: 0px 0px 11px 0px #9c0189;
  }
  img {
    width: 95%;
    max-height: 370px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 80%;

    h5 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
      margin: 0 20px 20px 20px;
    }

    img {
      width: 100%;
    }
  }
`;

const tab = [
  {
    title: "Baking",
    src: cooking,
    // txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit.",
  },
  {
    title: "Drawing",
    src: drawing,

    // txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit.",
  },
  {
    title: "Exercise",
    src: exercise,

    // txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit.",
  },
  {
    title: "Dancing",
    src: dancing,

    // txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit.",
  },
  {
    title: "Swimming",
    src: swimming,

    // txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit.",
  },
];

const Benefits = () => {
  const readyData = tab.map((item) => {
    return (
      <Benefit key={item.title}>
        <h5>{item.title}</h5>
        {/* <p>{item.txt}</p> */}
        <img src={item.src} alt="" />
      </Benefit>
    );
  });

  return <>{readyData}</>;
};

export default Benefits;
