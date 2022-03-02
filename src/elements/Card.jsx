import React from "react";
import styled from "styled-components";

const Card = ({ children, width, height, padding }) => {
  return (
    <CardContainer width={width} height={height} padding={padding}>
      {children}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: ${props => props.width};
  min-width: 24em;
  height: ${props => props.height};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  border-radius: 1.07rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.063em;
  padding: ${props => props.padding};
`;
