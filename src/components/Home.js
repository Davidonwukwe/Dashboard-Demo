import styled from "styled-components";
import SideBar from "./SideBar";
import MainLayout from "./MainLayout";

const Container = styled.div`
      display: flex;
      width: 100%;
      min-height: 100vh;
    `

const Home = () => {

    return (
        <Container>
            <SideBar />
            <MainLayout />
        </Container>
    );
}
export default Home;
