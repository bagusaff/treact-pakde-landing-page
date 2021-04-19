import React, { useEffect, useState } from "react";
import {
  ActivityContainer,
  ActivityLink,
  ActivityTitle,
  Header,
  InnerWrapper,
  Wrapper,
} from "./ActivityElement";
import ActivityPost from "./PostCard/ActivityPost";

const ActivitySection = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    fetch(`/api/article`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // setLoading(false)
      });
  }, []);

  return (
    <>
      <ActivityContainer id="activity">
        <Wrapper>
          <InnerWrapper>
            <Header>
              <ActivityTitle href="/activity">Kegiatan Pak Dwek</ActivityTitle>
              <ActivityLink href="/activity">Lihat Semua Kegiatan</ActivityLink>
            </Header>
            {data.map((item, index) => (
              <ActivityPost
                key={index}
                thumbnail={item.image[0]}
                title={item.title}
                description={item.content}
                date_post={item.created_at}
                url={item.slug}
              />
            ))}
          </InnerWrapper>
        </Wrapper>
      </ActivityContainer>
    </>
  );
};

export default ActivitySection;
