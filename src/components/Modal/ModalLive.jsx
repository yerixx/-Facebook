import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {createGlobalStyle, styled} from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles.styles';

import { faComments } from "@fortawesome/free-solid-svg-icons";
import LiveProfileImg from "../../img/LiveProfile.jpg";
import LiveView from "../../img/Live.jpg";
import SellItem1Img from "../../img/sellItem1.jpg"
import SellItem2Img from "../../img/sellItem2.jpg"

const Commerce = styled.div`
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #00f;
`;

const LeftContent = styled.section`
  width: 1270px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(0,0,0,0.9);
  /* border: 1px solid #f00; */
`;

const Live = styled.div`
  width: 500px;
  height: 860px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 8px;
  background-image: url(${LiveView});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
`;

const LiveStatus = styled.div`
  width: 224px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  gap: 5px;
  color: #fff;
  /* border: 1px solid #f00; */
  .liveViewer {
    margin-left: 13px;
  }
`;

const LivePoint = styled.div`
  width: 500px;
  height: 85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  .point {
    width: 140px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background-color: var(--color-white);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: var( --color-facebookblue);
      color: var(--color-white);
    }
  }
  .pointDS {
    color: var(--color-white);
  }
  .pointTime {
    width: 30px;
    height: 30px;
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;

const RightContent = styled.section`
  width: 650px;
  height: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #f00;
`;

const LiveProfile = styled.div`
  width: 520px;
  height: 110px;
  /* border: 1px solid #f00; */
  display: flex;
  /* padding: 0 15px; */
  .profileImg {
    width: 110px;
    height: 110px;
    background-color: var(--color-light-gray-02);
    border-radius: 50%;
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
    }
  }
`;

const LiveProfileSelf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-left: 20px;
  .profileName {
    font-size: 26px;
    font-weight: bold;
    color: var(--color-gray-01);
  }
  .profiledesc {
    font-size: 18px;
    font-weight: 400;
    color: var(--color-gray-01);
  }
`;

const LiveContents = styled.div`
  width: 520px;
  height: 123px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: var(--color-gray-01);
  /* border: 1px solid #f00; */
  h3 {
    width: 520px;
    border-bottom: 1px solid var(--color-light-gray-01);
    padding: 15px 0;
    font-size: 20px;
  }
  p {
    padding: 15px 0;
  }
`;

const SellItems = styled.div`
  width: 520px;
  height: 280px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 0 50px;
  background-color: var(--color-light-gray-02);
  border-radius: 8px;
`;

const SellItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  h3 {
    width: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-facebookblue);
    border-bottom: 3px solid var(--color-facebookblue);
    padding: 10px 0;
    font-size: 22px;
  }
`;

const SellInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SellItemInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
`;

const SellItemImg = styled.div`
  width: 70px;
  height: 70px;
  background-color: var(--color-light-gray-01);
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;

const SellItemDesc = styled.div`
  p {
    padding-bottom: 8px;
    color: var(--color-gray-01);
  }
  span {
    color: #f00;
    margin-right: 8px;
  }
`;

const Comment = styled.div`
  width: 520px;
  height: 400px;
  border: 1px solid #f00;
  h3 {
    width: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-facebookblue);
    border-bottom: 3px solid var(--color-facebookblue);
    padding: 10px 0;
    font-size: 22px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    color: var(--color-gray-01);
  }
`;

const NoComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  color: var(--color-gray-01);
  border: 1px solid #f00;
  .commentIcon {
    width: 75px;
    height: 68px;
    margin-bottom: 10px;
    /* background-color: var(--color-light-gray-01); */
    .faComments {
      font-size: 50px;
      color: var( --color-facebookblue);
    }
  }
`;

const ModalLive = () => {
  return (
    <>
      <Commerce>
        <LeftContent>
          <Live>
            <LiveStatus>
              <div className='fbLogo'>페북</div>
              <div className='liveLogo'>라이브</div>
              <div className='liveViewer'>2,023명 시청 중</div>
              {/* <img src={LiveView} alt="Live" width="560px" height="860px" /> */}
            </LiveStatus>
            <LivePoint>
              <button className='point'>포인트 더 모으기</button>
              <div className='pointDS'>7초 후에 500 포인트가 적립됩니다.</div>
              <div className='pointTime'>7</div>
            </LivePoint>
          </Live>
        </LeftContent>
        <RightContent>
          <LiveProfile>
            <div className='profileImg'>
            <img src={LiveProfileImg} alt="LiveProfileImg" height="110px" width="110px" />
            </div>
            <LiveProfileSelf>
              <div className='profileName'>미니멀데이</div>
              <div className='profiledesc'>가을옷 보러오세요~~</div>
            </LiveProfileSelf>
          </LiveProfile>
          <LiveContents>
            <h3>라이브 안내</h3>
            <p>안녕하세요~~ <br/> 고퀄리티 옷들만 판매하고 있어요. 미니멀 데이에서 가을옷 득템하세요!</p>
          </LiveContents>
          <SellItems>
            <SellItem>
              <h3>판매중인 상품</h3>
              <SellInfos>
                <SellItemInfo>
                  <SellItemImg>
                    <div className='sellItemImg'></div>
                    <img src={SellItem1Img} alt="SellItem1Img" height="70px" width="70px" />
                    </SellItemImg>
                  <SellItemDesc>
                    <p>★5%추가할인★스프라이트 백트임 긴팔니트</p>
                    <b><span>30%</span>19,900원</b>
                  </SellItemDesc>
                </SellItemInfo>
                <SellItemInfo>
                  <SellItemImg>
                    <div className='sellItemImg'></div>
                    <img src={SellItem2Img} alt="SellItem2Img" height="70px" width="70px" />
                    </SellItemImg>
                  <SellItemDesc>
                    <p>메디슨 클래식 플랩 레더백</p>
                    <b>34,000원</b>
                  </SellItemDesc>
                </SellItemInfo>
              </SellInfos>
            </SellItem>
          </SellItems>
          <Comment>
            <h3>댓글</h3>
            <span>영상과 무관하거나 욕설, 비방 등의 댓글은 관리자에 의해 삭제될 수 있습니다.</span>
            <NoComment>
              <div className='commentIcon'>
              <FontAwesomeIcon className='faComments' icon={faComments} />
              </div>
              <p>댓글이 없습니다. <br/> 첫 번째 댓글을 남겨주세요.</p>
            </NoComment>
          </Comment>
        </RightContent>
      </Commerce>
    </>
  )
}

export default ModalLive

