import React from "react";
import {
  Avatar,
  Bio,
  CardContainer,
  Header,
  TimeStamp,
  UserWrapper,
  Wrapper,
  Content,
  Footer,
  ForumLink,
  CommentLink,
} from "./ForumCardElement";
import { Hidden } from "react-grid-system";
import { FaRegCommentDots } from "react-icons/fa";

// import avatar from '../../../images/Avatar.png'
const ForumCard = ({
  idx,
  author,
  date_post,
  title,
  content,
  url,
  job,
  comment,
}) => {
  return (
    <>
      <CardContainer>
        <Wrapper>
          <Header>
            <UserWrapper>
              {/* <Avatar src={avatar}/> */}
              <Bio>
                <h4>{author}</h4>
                <h5>{job}</h5>
              </Bio>
            </UserWrapper>
            <TimeStamp>
              <h4>{date_post}</h4>
            </TimeStamp>
          </Header>
          <Content>
            <h3>{title}</h3>
            <p>{content}</p>
          </Content>
          <Footer>
            <CommentLink href={url}>
              <FaRegCommentDots />
              <span>
                {comment}{" "}
                <Hidden xs sm>
                  Komentar
                </Hidden>
              </span>
            </CommentLink>
            <ForumLink href={url}>Lihat Detail Diskusi</ForumLink>
          </Footer>
        </Wrapper>
      </CardContainer>
    </>
  );
};

export default ForumCard;
