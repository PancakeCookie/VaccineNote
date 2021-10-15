import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import DefaultAvatar from "../../assets/global/profile.png";
import palette from "../../libs/styles/palette";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Comment from "../common/comment/Comment";

const PostsListBlock = styled(Responsive)`
  margin-top: 3rem;
  margin-bottom: 4rem;
  width: 50rem;
`;

const PostsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostItemBlock = styled.div`
  padding: 1rem 1rem;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  width: 50rem;

  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
  }

  cursor: pointer;
  & + & {
    margin-top: 3rem;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const ProfileImageWrap = styled.div`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  height: 100%;
  min-width: 100%;
  left: 50%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  border-radius: 50%;
  transform: translateX(-50%);
`;
const PostItemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.7rem;
`;

const PostItemDate = styled.div`
  font-size: 1.1rem;
  color: grey;
  margin-top: 0.3rem;
`;

const ProfileInfoWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  .nickName {
    font-weight: bold;
    margin-right: 0.7rem;
  }
  .profile {
    color: grey;
  }
  .dot {
    margin: 0 0.2rem;
  }
`;

const StyledMaleIcon = styled(BsGenderMale)`
  font-weight: bolder;
  vertical-align: bottom;
  color: blue;
  stroke: blue;
  stroke-width: 0.7px;
`;
const StyledFemaleIcon = styled(BsGenderFemale)`
  font-weight: bolder;
  vertical-align: bottom;
  color: red;
  stroke: red;
  stroke-width: 0.7px;
`;

const PostContentWrap = styled.div`
  margin-top: 2rem;
`;

const PostCategory = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: grey;
`;

const PostTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bolder;
`;

const PostContent = styled.div`
  font-size: 1.3rem;
  margin-top: 2rem;
`;

const PostTags = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const PostTagsItem = styled.div`
  font-size: 1.2rem;
  color: grey;
  & + & {
    margin-left: 0.1rem;
  }
`;

function PostItem({ post, onClickPost }) {
  return (
    <PostItemBlock onClick={() => onClickPost(post._id)}>
      <ProfileWrap>
        <ProfileImageWrap>
          <ProfileImage src={DefaultAvatar} />
        </ProfileImageWrap>
        <PostItemInfoWrap>
          <ProfileInfoWrap>
            <span className="nickName">
              {post.writer.nickName}
              {post.writer.gender === "male" ? (
                <StyledMaleIcon />
              ) : (
                <StyledFemaleIcon />
              )}
            </span>
            <span className="profile">{post.writer.type}</span>
            <span className="dot">·</span>
            <span className="profile">{post.writer.degree}차</span>
            <span className="dot">·</span>
            <span className="profile">{post.writer.age}</span>
          </ProfileInfoWrap>
          {/* 시간 남으면 1분전, 2시간전... 등 같이 만들어보기 */}
          <PostItemDate>2021-10-14 / 13:33</PostItemDate>
        </PostItemInfoWrap>
      </ProfileWrap>
      <PostContentWrap>
        <PostCategory>후기</PostCategory>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>
          {post.content.replace("<p>", "").replace("</p>", "")}
        </PostContent>
        <PostTags>
          <PostTagsItem>{post.tags[0]}</PostTagsItem>
          <PostTagsItem>{post.tags[1]}</PostTagsItem>
          <PostTagsItem>{post.tags[2]}</PostTagsItem>
        </PostTags>
      </PostContentWrap>
    </PostItemBlock>
  );
}

function PostsList({ posts, onClickPost }) {
  return (
    <PostsListBlock>
      <PostsListContainer>
        {posts &&
          posts.map((post, index) => {
            return (
              <PostItem key={posts._id} onClickPost={onClickPost} post={post} />
            );
          })}
      </PostsListContainer>
    </PostsListBlock>
  );
}

export default PostsList;
