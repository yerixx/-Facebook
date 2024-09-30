import React from "react";
import styled from "styled-components";
import googleIcon from "../../img/google-icon.svg";
import appleIcon from "../../img/apple-icon.svg";
import githubIcon from "../../img/github-icon.svg";
import { FormDesc } from "./login-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid var(--color-gray-02);
  border-bottom: 1px solid var(--color-gray-02);
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    li {
      width: 45px;
      height: 45px;
      background: var(--color-gray-02);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 23px;
      }
    }
  }
`;

const SNSLogin = () => {
  return (
    <Wrapper>
      <FormDesc>다른 방법으로 로그인</FormDesc>
      <ul>
        <li>
          <img src={googleIcon} />
        </li>
        <li>
          <img src={appleIcon} />
        </li>
        <li>
          <img src={githubIcon} />
        </li>
      </ul>
    </Wrapper>
  );
};

export default SNSLogin;
