import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnSlider from "./BtnSlider";
import { GrowthGraph } from "../../elements";
import ArrowUp from "../../assets/arrow_Up_MD.svg";
import ArrowDown from "../../assets/arrow_Down_MD.svg";

export default function SliderTest({ grade }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const slice = grade.slice(1, grade.length);
  const [screenSize, setScreenSize] = useState();

  const nextSlide = () => {
    if (slideIndex !== slice.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slice.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slice.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  const windowSize = () => {
    setScreenSize(window.innerWidth)
  }

  
  useEffect(() => {
    window.addEventListener("resize",windowSize)
    console.log(screenSize)
  },[screenSize])

  if(screenSize>990){
    return (
      <ContainerSlider>
        {slice.map((obj, index) => {
          const { 전월점수, 당월점수, 과목 } = obj;

          const growth = Math.round(Number(당월점수 - 전월점수));

          return (
            <Slider
              key={과목}
              activity={slideIndex === index + 1 ? "active-anim" : null}
            >
              <Increase>
                <span>{growth<0 ? Math.abs(growth) : growth}점 {growth<0 ? "감소" : "증가"}</span>
                <img src={growth<0 ? ArrowDown : ArrowUp} alt="" />
              </Increase>
              <GrowthGraph
                scoreData={[
                  과목,
                  Math.round(Number(전월점수)),
                  Math.round(Number(당월점수))
                ]}
                title={과목}
                screen={false}
              />
            </Slider>
          );
        })}

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <ContainerDots>
          {Array.from({ length: slice.length }).map((item, index) => (
            <Dot
              key={index}
              onClick={() => moveDot(index + 1)}
              activity={slideIndex === index + 1 ? "active" : null}
            ></Dot>
          ))}
        </ContainerDots>
      </ContainerSlider>
    );
  } else {
    return (
      <TouchSlideBigBox>
        <SpanBox>
          <Span>
            <Svg>
              <SmallCircle fill="#D8D8D8" />
            </Svg>
            전월 점수
          </Span>
          <Span>
            <Svg>
              <SmallCircle fill="#FFCB60" />
            </Svg>
            당월 점수
          </Span>
        </SpanBox>
        <TouchSlideBox>
          {slice.map((obj, index) => {
            const { 전월점수, 당월점수, 과목 } = obj;

            return (
              <TouchSlide
                key={과목}
              >
                <GrowthGraph
                  scoreData={[
                    과목,
                    Math.round(Number(전월점수)),
                    Math.round(Number(당월점수))
                  ]}
                  title={과목}
                  screen={true}
                />
              </TouchSlide>
            );
          })}
        </TouchSlideBox>

        <BtnSlider direction={"next"} />

      </TouchSlideBigBox>
    );
  }

  
}
const TouchSlideBigBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ContainerSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Increase = styled.div`
  width: 27%;
  height: 11%;
  font-size: 0.775rem;
  text-align: center;
  line-height: 150%;
  border: 1px solid #9498EF;
  box-sizing: border-box;
  border-radius: 93px;
  position: absolute;
  top: 3%;
  left: 8%;
  display: flex;
  justify-content: center;

  span {
    margin-left: 5px;
  }

  @media(max-width: 992px) {
    display: none;
  }
`;

const Slider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 12%;
  opacity: ${props => (props.activity === "active-anim" ? "1" : "0")};
  transition: opacity ease-in-out 0.4s;

  @media (max-width: 667px) {
    left: 29%;
  }
`;
const TouchSlideBox = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 7px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #D8D8D8;
    border-radius: 5px;
  }
  
`;
const TouchSlide = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 5px 7px;
`;

const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: ${props => (props.activity === "active" ? "#6A6A6A" : "#D8D8D8")};
`;
const SpanBox = styled.div`
  width: 24%;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  height: 1.5625rem;
  justify-content: space-between;
  align-items: center;
`;

const Svg = styled.svg`
  width: 0.625rem;
  height: 0.625rem;
  margin-right: 0.7rem;
`;

const SmallCircle = styled.circle`
  cx: 0.3125rem;
  cy: 0.3125rem;
  r: 0.3125rem;
`;
