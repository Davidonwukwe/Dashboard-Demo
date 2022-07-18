import Dashboard from "./Dashboard";
import styled from "styled-components";

const Container = styled.div`
  width: 82.4%;
    `

const MainLayout = () => {
    return (
        <Container>
            <Dashboard/>
        </Container>
    );

}
export default MainLayout;
