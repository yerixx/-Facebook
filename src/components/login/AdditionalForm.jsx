import React, { useState } from "react";
import styled from "styled-components";
import { SubDescription_16_n } from "../../styles/GlobalStyles.styles";
import {
  Form,
  Ul,
  InputWrapperRow,
  Input,
  FormTitle,
  FormItemTitle,
  FormItemDesc,
  Pager,
  Button,
} from "./login-components";

const Wrapper = styled.div`
  padding: 25px;
  background: var(--color-light-gray-02);
  box-shadow: var(--box-shadow-02);
  border-radius: var(--border-radius-08);
  @media screen and (max-width: 768px) {
    width: 390px;
    min-width: 390px;
    padding: 0 15px;
    background: var(--color-white);
    box-shadow: none;
  }
`;
const Label = styled.label`
  display: inline-block;
  width: 210px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid var(--color-gray-02);
  border-radius: var(--border-radius-08);
  background: var(--color-white);
  ${SubDescription_16_n}
  cursor: pointer;
`;
const SelectItem = styled.div`
  cursor: pointer;
  position: relative;
  .select-selected {
    padding: 10px 15px;
    border: 1px solid var(--color-gray-02);
    border-radius: var(--border-radius-08);
    background: var(--color-white);
    ${SubDescription_16_n};
  }
  .select-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    svg {
      stroke: var(--color-gray-02);
    }
  }
  .select-items {
    position: absolute;
    bottom: -5px;
    transform: translateY(100%);
    width: 100%;
    border: 1px solid var(--color-gray-02);
    border-radius: var(--border-radius-08);
    overflow: hidden;
    li {
      padding: 10px 15px;
      background: var(--color-white);
      border-bottom: 1px solid var(--color-light-gray-01);
      ${SubDescription_16_n};
      transition: background 0.3s;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: var(--color-light-gray-01);
      }
    }
  }
`;

const LocationWrapper = styled.ul`
  &.open {
    display: block;
  }
  &.closed {
    display: none;
  }
`;

const AdditionalForm = ({ mobileSize, progress }) => {
  // select
  const options = [
    { value: 1, location: "서울" },
    { value: 2, location: "경기" },
    { value: 3, location: "대구" },
    { value: 4, location: "부산" },
  ];

  const [location, setLocation] = useState("지역");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleOption = () => {
    setIsSelectOpen((current) => !current);
  };
  const closeOption = (e) => {
    setIsSelectOpen(false);
    setLocation(e.target.innerText);
  };

  return (
    <Wrapper style={{ display: progress === "2" ? "none" : "flex" }}>
      <Form height={700}>
        {mobileSize ? null : (
          <FormTitle>회원님을 위한 맞춤 홈피드를 준비할게요</FormTitle>
        )}
        <Ul>
          <li>
            <FormItemTitle>성별 입력</FormItemTitle>
            <FormItemDesc>
              언제든지 프로필에서 회원님의 성별을 변경할 수 있습니다.
            </FormItemDesc>
            <InputWrapperRow>
              <Label htmlFor="woman">
                여성
                <Input name="gender" type="radio" value="female" id="woman" />
              </Label>
              <Label htmlFor="man">
                남성
                <Input name="gender" type="radio" value="male" id="man" />
              </Label>
            </InputWrapperRow>
          </li>
          <li>
            <FormItemTitle>생년월일 입력</FormItemTitle>
            <FormItemDesc>
              생년월일을 선택하세요. <br />
              언제든지 비공개로 변경할 수 있습니다.
            </FormItemDesc>
            <Input id="birth" name="birth" type="date" width={430} />
          </li>
          <li>
            <FormItemTitle>지역 입력</FormItemTitle>
            <FormItemDesc>
              지역을 선택하세요. <br />
              언제든지 비공개로 변경할 수 있습니다.
            </FormItemDesc>
            <SelectItem>
              <div className="select-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="select-selected" onClick={toggleOption}>
                {location}
              </div>
              <LocationWrapper
                className={`select-items select-hide ${
                  isSelectOpen ? "open" : "closed"
                }`}
              >
                {options.map((option) => (
                  <li key={option.value} onClick={closeOption}>
                    {option.location}
                  </li>
                ))}
              </LocationWrapper>
            </SelectItem>
          </li>
        </Ul>
        <div>
          {mobileSize ? null : (
            <Pager>
              <span className="active"></span>
              <span></span>
            </Pager>
          )}
          {mobileSize ? null : <Button>다음</Button>}
        </div>
      </Form>
    </Wrapper>
  );
};

export default AdditionalForm;
