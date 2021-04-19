import React, { useState, useEffect } from "react";
import {
  CardContainer,
  Header,
  Wrapper,
  ButtonWrapper,
} from "./SiderCardElement";

import SiderPost from "./SiderPost";
const SiderCard = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    fetch(`/api/proposal`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // setLoading(false)
      });
  }, []);

  return (
    <>
      <CardContainer>
        <Wrapper>
          <Header>
            <h3>Proposal Masyarakat</h3>
          </Header>
          {data.map((item, index) => (
            <SiderPost
              key={index}
              title={item.title}
              author={item.created_by}
              date_post={item.created_at}
            />
          ))}
          <ButtonWrapper>
            <a href="/guest/proposal">Ajukan Proposalmu</a>
          </ButtonWrapper>
        </Wrapper>
      </CardContainer>
    </>
  );
};

export default SiderCard;
