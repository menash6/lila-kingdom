import React, { useState } from "react";

import styled from "styled-components";

import MeImg1 from "../../images/me-1.jpg";
import MeImg2 from "../../images/me-2.jpg";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  //border: 1px solid red;
  margin: 0 auto;
  padding: 70px 10px 70px 10px;
  overflow: auto;
  color: #181818;

  .block-1 {
    width: 60%;
    float: left;

    h4 {
      font-size: 40px;
      margin: 20px 0;
    }

    img {
      width: 95%;
      max-height: 370px;
      object-fit: cover;
    }

    .column-txt {
      column-count: 2;
      column-width: 250px;
      column-gap: 30px;
    }

    button {
      border: none;
      padding: 3px 7px;
      background-color: #9c0189;
      font-size: 17px;
      color: #fff;
      float: right;
      display: none;
    }
  }

  .block-2 {
    width: 40%;
    float: left;
    padding: 0 0 0 10px;

    img {
      width: 100%;
      object-fit: cover;
      float: right;
      max-height: 650px;
    }
  }

  @media (max-width: 768px) {
    .block-1 {
      width: 100%;

      img {
        width: 100%;
      }

      .column-txt {
        column-count: 1;
      }

      .read-more-target {
        opacity: ${({ readMore }) => (readMore === false ? `0` : `1`)};
        max-height: 0;
        font-size: ${({ readMore }) => (readMore === false ? `0` : `15px`)};
        transition: 0.25s ease;
      }

      button {
        display: inline-block;
      }
    }

    .block-2 {
      display: none;
    }
  }
`;
//<img src={MeImg1} alt=""/>
const AboutMe = () => {
  const [ReadMore, setReadMore] = useState(false);
  const titleButton = ReadMore ? "Read Less" : "Read More";

  return (
    <>
      <MainContainer readMore={ReadMore} name="about-me">
        <div className="block-1">
          <img src={MeImg1} alt="" />
          <h4>Lavender’s Mountain of Hope</h4>
          {/* <h5>I also won a writing competition with this story about Hope!</h5> */}
          <div className="column-txt">
            <p className="read-more-wrap">
              Once upon a time, there was a little girl called Lavender. Lavender and her dad had
              run out of food. The only food left was at the top of Magic Mountain. “Lavender, it’s
              impossible to climb Magic Mountain,” said her dad. “I’m too weak to climb it, and
              you’re too young”{" "}
              <span className="read-more-target">
                {" "}
                <p>
                  Magic Mountain was a big, tall mountain, but Lavender hoped she could get food for
                  her dad.
                </p>
                <p>
                  The next day, Lavender tried to climb the mountain, but she fell down and hurt her
                  leg so badly she couldn’t walk anymore! “Dad’s right,” sobbed Lavender, “I can’t
                  do it!” She lost all hope of climbing the Mountain and hopped home.
                </p>
                <p>
                  Suddenly, out of nowhere, a fairy flew into Lavender’s bedroom. The fairy
                  whispered “I know you are looking for some food and trying really hard to get the
                  top of Magic Mountain. You just need to keep on trying. With hope, anything is
                  possible. You can reach the top of the mountain!”
                </p>
                <p>
                  Lavender went downstairs. “Dad, did you fall when you first climbed Magic
                  Mountain?” “Magic Mountain’s the hardest mountain ever, it’s impossible to climb.
                  I haven’t been anywhere near it. Do you think you can climb it?” “I hope so,” said
                  Lavender
                </p>
                <p>
                  Lavender’s hope about reaching the food at the top of the mountain helped her to
                  keep trying. She tried every single day. She fell a lot, it hurt a lot, it wasn’t
                  easy, but she didn’t care - she just kept on climbing.
                </p>
              </span>{" "}
            </p>
            <button onClick={setReadMore.bind(this, !ReadMore)}>{titleButton}</button>
          </div>
        </div>
        <div className="block-2">
          <img src={MeImg2} alt="" />
        </div>
      </MainContainer>
    </>
  );
};

export default AboutMe;
