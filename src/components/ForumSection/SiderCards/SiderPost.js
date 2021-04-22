import React from "react";
import {
  PostWrapper,
  TextInnerWrapper,
  TextWrapper,
  Avatar,
} from "./SiderCardElement";

// import avatar from '../../../images/Avatar-2.png'

const SiderPost = ({ author, date_post, title }) => {
  return (
    <>
      <PostWrapper className="borders">
        {/* <Avatar src={avatar}/> */}
        <TextWrapper>
          <TextInnerWrapper>
            <h4>{author}</h4>
            <h5>{date_post}</h5>
          </TextInnerWrapper>
          <p>
            Mengajukan Proposal <strong>“{title}”</strong>
          </p>
        </TextWrapper>
      </PostWrapper>
    </>
  );
};

export default SiderPost;
