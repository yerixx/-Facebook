import React from "react";
import styled from "styled-components";

const ContSlide = styled.div`
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #050505;
`;

const Wrapper = styled.div`
  .contImg {
    width: 746px;
    height: 746px;
    border: 1px solid #f00;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ContentsSec = () => {
  return (
    <ContSlide>
      <Wrapper>
        <div className="contImg">
          <img src="" alt="" />
        </div>
      </Wrapper>
    </ContSlide>
  );
};

export default ContentsSec;
