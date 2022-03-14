import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NoticeContext } from "./Notice";
import { useContext, useState, useEffect } from "react";

const NoticeDetail = () => {
  const params = useParams();
  const noticeList = useContext(NoticeContext);
  const [notice, setNotice] = useState(noticeList[0]);
  useEffect(() => {
    if (params.id) setNotice(noticeList[params.id]);
  }, [params.id]);
  return (
    <Notice
      params={params["*"] === "main" || params["*"] === "main/" ? true : false}
    >
      <h5>{notice.title}</h5>
      <h6>{notice.author}</h6>
      <span>{notice.date}</span>
      <p>{notice.text}</p>
    </Notice>
  );
};

export default NoticeDetail;

const Notice = styled.div`
  font-family: Noto Sans KR;
  padding: 1.25rem;
  margin-right: 16px;
  margin-top: 2.5rem;
  width: ${(1100 / 1512) * 100 + "vw"};
  height: 100%;
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: scroll;
  color: #1b1b1b;
  &::-webkit-scrollbar {
    display: none;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.69rem;
  }
  h6 {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: #6a6a6a;
  }
  span {
    font-size: 0.875rem;
    font-weight: 300;
    color: #6a6a6a;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 991px) {
    display: ${props => (props.params ? "none" : "block")};
    width: 96vw;
    margin-right: 0;
  }

  @media screen and (max-width: 667px) {
    display: ${props => (props.params ? "none" : "block")};
    width: 100vw;
    margin-right: 0;
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;
