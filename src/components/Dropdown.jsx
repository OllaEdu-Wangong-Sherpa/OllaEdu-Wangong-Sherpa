import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Dropdown_up, Dropdown_down } from "../assets";

const year = new Date().getFullYear();
const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState(year);

  const yearArr = useMemo(() => {
    return Array.from({ length: year - 1999 }, (value, index) => 2000 + index);
  }, []);

  return (
    <Wrapper>
      <ListHeader
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <ListTitle>2021</ListTitle>
        {toggle ? (
          <Icon src={Dropdown_up} alt="dropdown-up" />
        ) : (
          <Icon src={Dropdown_down} alt="dropdown-down" />
        )}
        {toggle && (
          <ListConatiner>
            {yearArr.map((yr, idx) => (
              <List key={yr}>{yr}</List>
            ))}
          </ListConatiner>
        )}
      </ListHeader>
    </Wrapper>
  );
};

export default Dropdown;
const Wrapper = styled.div`
  font-weight: 500;
  line-height: 1.646em;
`;

const ListHeader = styled.div`
  position: relative;
  width: 6.633em;
  min-height: 1.647em;
  background-color: #d8d8d8;
  border-radius: 0.223em;
`;

const ListTitle = styled.span`
  display: inline-block;
  width: 4.813em;
  text-align: right;
`;

const Icon = styled.img`
  position: absolute;
  top: 0.134em;
  right: 0.048em;
  width: 1.421em;
  height: 1.421em;
`;

const ListConatiner = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.813em;
  max-height: 12.25em;
  background-color: #d8d8d8;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 0.223em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.li`
  text-align: center;
`;