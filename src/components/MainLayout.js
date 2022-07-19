import Dashboard from "./Dashboard";
import styled from "styled-components";

const Container = styled.div`
  width: 82.4%;
  
  @media screen and (min-width: 1450px) {
    width: calc(100% - 253px);
  }
    `

const MainLayout = () => {
    return (
        <Container>
            <Dashboard/>
        </Container>
    );

}
export default MainLayout;
