import styled from "styled-components";
import { HeaderBottom, HeaderTop } from "../components/common/Header";
// import LeftSideBar from "../components/common/LeftSideBar";
import ModalCont from "../components/Modal/ModalCont";
// import { useContext } from "react";
// import { DataDispatchContext, DataStateContext } from "../App";
import MainPage from "../components/Main/Mainpage";
import Mainupload from "../components/Main/Mainupload";
<<<<<<< HEAD
// import Mainstory from "../components/Main/Mainstory";
// import MainGroup from "../components/Main/MainGroup";
=======
import Mainstory from "../components/Main/Mainstory";
import Mainlive from "../components/Main/Mainlive";
import MainGroup from "../components/Main/MainGroup";
import Mainbutton from "../components/Main/Mainbutton";
>>>>>>> Signup

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainSection = styled.section`
  width: 1050px;
  padding: 0 90px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* padding: 28px 20px; */
  position: absolute;
  top: 140px;
  @media screen and (max-width: 768px) {
    top: 80px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;
// const Maintest = styled.div`
//   width: 1000px;
//   border: 1px solid #f00;
// `;

const Main = () => {
  // const { onCreatePost } = useContext(DataDispatchContext);
  // const { posts } = useContext(DataStateContext);
  // const create = () => {
  //   onCreatePost("1", "sldkjf");
  // };
  return (
    <Wrapper>
      <HeaderTop />
      <HeaderBottom />
      {/* <SideBarWallet /> */}
      {/* <SideBarGroup /> */}
      {/* <SideBarMenu /> */}
      <MainSection>
<<<<<<< HEAD
        {/* <Mainstory />
        <MainGroup /> */}
        <Mainupload />
=======
        <Mainstory />
        <Container>
          <Mainupload />
          <Mainbutton />
          {/* <Mainmodal /> */}
        </Container>
        <MainGroup />
>>>>>>> Signup
        <MainPage />
        {/* <Maintest>
          <button onClick={create}>생성</button>
          {posts.map((item, i) => (
            <div key={i}>{item.content}</div>
          ))}
        </Maintest> */}
        <Mainlive />
      </MainSection>

      <ModalCont />
    </Wrapper>
  );
};

export default Main;
