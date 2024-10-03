import React from "react";
import SocialBtnIcon from "../common/SocialBtnIcon.jsx";
import PostUploadField from "../common/PostUploadField";

// react-icon
import { BsThreeDots } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";

//font
import {
  MainTitle_26_b,
  MainTitle_24_m,
  Paragraph_20_n,
  MainTitle_18_b,
  MainTitle_18_n,
  SubDescription_16_n,
  MainTitle_22_b,
  SubDescription_14_n,
} from "../../styles/GlobalStyles.styles.js";

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Inner = styled.article`
  width: 1050px;
  height: 100%;
  padding: 0 90px;
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    width: 100%;
  }
  .profileContent {
    display: flex;
    align-items: center;
    gap: 30px;
    /* 미디어 쿼리 */
    @media (max-width: 768px) {
      width: 100%;
    }
    .profileImg {
      width: 80px;
      height: 80px;
      background: var(--color-gray-01);
      border-radius: 100px;
    }
    .profileName {
      ${MainTitle_26_b}
      color:var(--color-gray-01);
      @media (max-width: 768px) {
        ${MainTitle_22_b}
      }
    }
    .profileDesc {
      ${Paragraph_20_n}
      padding:4px 0;
      color: var(--color-gray-02);
      @media (max-width: 768px) {
        ${MainTitle_18_n}
      }
    }
  }
  .ControlsIcon {
    display: flex;
    gap: 17px;
    font-size: 40px;
    color: var(--color-gray-01);
    cursor: pointer;
    transition: opacity 0.5s;
    *:hover {
      color: var(--color-facebookblue);
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
const Contents = styled.div`
  position: relative;
  padding: 30px 0 0;
  .contentDesc {
    ${MainTitle_18_b};
    font-weight: normal;
    word-break: break-all;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      ${SubDescription_14_n}
    }
  }
  .contentImgs {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
  }
  .Buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 55%;
    .btnLeft,
    .btnRight {
      padding: 20px 23px;
      font-size: 20px;
      background: var(--color-light-gray-02);
      border-radius: 50%;
      transition: opacity 0.5s;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
    .btnLeft {
      transform: translateX(-30px);
    }
    .btnRight {
      transform: translateX(30px);
    }
  }
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const ContImg = styled.img`
  margin-bottom: 30px;
  width: 850px;
  height: 400px;
  background: var(--color-light-gray-01);
  object-fit: cover;
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
  }
`;
const CommentTop = styled.div`
  ${Paragraph_20_n}
  padding:40px 0;
  display: flex;
  justify-content: space-between;
  .commentTopRight {
    display: flex;
    align-items: center;
    gap: 10px;
    .SlArrowDown {
      ${SubDescription_16_n}
      cursor: pointer;
    }
  }
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CommentLists = styled.div`
  ${MainTitle_18_n}
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
  .commentList {
    display: flex;
    align-items: center;
    gap: 30px;
    .commentFirstImg {
      width: 60px;
      height: 60px;
      background: var(--color-light-gray-01);
      border-radius: 50%;
    }
    .commentFirstDesc {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .firstDescTop {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
        background: var(--color-light-gray-01);
        border-radius: 8px;
        padding: 14px 20px;
        width: fit-content;
        height: fit-content;
        color: black;
        &:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: -10px;
          width: 30px;
          height: 12px;
          background: var(--color-light-gray-01);
          border-radius: 0 15px 0 20px;
          transform: rotate(-30deg);
        }
      }
      .DescBottom {
        display: flex;
        gap: 10px;
        padding: 0 20px;
        color: var(--color-gray-02);
        cursor: pointer;
        transition: color 0.5s;
        *:hover {
          color: var(--color-black);
        }
      }
    }
    .commentSecImg {
      width: 60px;
      height: 60px;
      background: var(--color-light-gray-01);
      border-radius: 50%;
    }
    .commentSecDesc {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .secDescTop {
        margin-top: 30px;
        display: flex;
        gap: 5px;
        position: relative;
        border: 1px solid var(--color-light-gray-01);
        background: var(--color-white);
        border-radius: 8px;
        padding: 14px 20px;
        width: fit-content;
        height: fit-content;
        color: black;
        &:after {
          content: "";
          position: absolute;
          top: -4px;
          left: -10px;
          width: 30px;
          height: 14px;
          border-left: 1px solid var(--color-light-gray-01);
          border-top: 1px solid var(--color-light-gray-01);
          background: var(--color-white);
          border-radius: 0 0 0 60px;
          transform: rotate(10deg);
        }
      }
    }
  }
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const DescBottom = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px;
  color: var(--color-gray-02);
  cursor: pointer;
  transition: color 0.5s;
  *:hover {
    color: var(--color-black);
  }
  /* 미디어 쿼리 */
  @media (max-width: 768px) {
    ${SubDescription_16_n}
  }
`;

const PostItem = ({ imageSrc, contentDesc }) => {
  return (
    <Wrapper>
      <Inner>
        <Profile>
          <div className="profileContent">
            <div className="profileImg"></div>
            <div className="profileText">
              <h1 className="profileName">박예림</h1>
              <p className="profileDesc"> 8시간전</p>
            </div>
          </div>
          <div className="ControlsIcon">
            <div>
              <BsThreeDots />
            </div>
            <div>
              <IoCloseOutline />
            </div>
          </div>
        </Profile>
        <Contents>
          <div className="contentDesc">
            {contentDesc || "우리의 여행 sub folder만 몇 개인지 모르겠다. "}
          </div>
          {imageSrc && <ContImg src={imageSrc} alt={"Content Image"} />}
        </Contents>
        <SocialBtnIcon />
        <CommentTop>
          <div>총 29개의 댓글</div>
          <div className="commentTopRight">
            <div>최신순</div>
            <div>
              <SlArrowDown className="SlArrowDown" />
            </div>
          </div>
        </CommentTop>
        <CommentLists>
          <div className="commentList">
            <div className="commentFirstImg"></div>
            <div className="commentFirstDesc">
              <div className="firstDescTop">
                <b>김예지</b>
                <span>
                  <b>김정하</b> <span>여기 가보는 거 어때?</span>
                </span>
              </div>
              <DescBottom>
                <div>좋아요</div>
                <div>답글달기</div>
              </DescBottom>
            </div>
          </div>
          <div className="commentList">
            <div className="commentSecImg"></div>
            <div className="commentSecDesc">
              <div className="secDescTop">
                <b>김정하</b> <span>완전 좋아요!!</span>
              </div>
              <DescBottom>
                <div>좋아요</div>
                <div>답글달기</div>
              </DescBottom>
            </div>
          </div>
        </CommentLists>
        <PostUploadField />
      </Inner>
    </Wrapper>
  );
};

export default PostItem;
