import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ForumCard from "./ForumCard";

const ForumCardList = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    fetch(`/api/forum`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // setLoading(false)
      });
  }, []);

  return (
    <>
      <ForumCardListContainer>
        {data.map((item, index) => (
          <ForumCard
            key={index}
            idx={item.idx}
            date_post={item.created_at}
            content={item.content}
            author={item.created_by}
            job={item.job}
            comment={item.comment}
            url={item.url}
            title={item.title}
          />
        ))}
      </ForumCardListContainer>
    </>
  );
};

export default ForumCardList;

const ForumCardListContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
