import React from "react";
import styled from "styled-components";
import { Popper } from "../assets";

const Tag = ({ percent }) => {
  const slice = percent.split(".")[0];
  return (
    <Container>
      목표달성률 {slice}%&nbsp;<b>마라톤의 승리자</b>
      <Image src={Popper} alt="popper icon" />
    </Container>
  );
};

export default Tag;

const Container = styled.div`
  width: 202px;
  height: 21px;
  padding: 2px, 6px, 2px, 6px;
  background: #dfe0ff;
  border-radius: 128px;
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  b {
    font-weight: 700;
  }
`;

const Image = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
