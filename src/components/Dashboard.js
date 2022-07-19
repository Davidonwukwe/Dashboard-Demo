import styled from "styled-components";
import NavBar from "./NavBar";
import StatisticsCards from "./StatisticsCards";
import RecentRequests from "./RecentRequests";
import Chart from "../assets/images/Chart.png"
import barChart from "../assets/images/chart (1).png"

const Main = styled.div`
      width: 100%;
  .chartImage {
    width: 850px;
  }
  .barChartImage {
    width: 268px;
  }
    .chartImage, .barchartImage {
      img {
        width: 100%;
        height: 100%;
      }
    }
  .content {
    margin-top: 100px;
  }
  @media screen and (min-width: 1872px ) {
    .charts {
      width: 75%;
    }
  }
  @media screen and (max-width: 500px) {
    .content {
      margin-top: 120px;
    }
  }
    `
const Dashboard = () => {
    return (
        <Main>
            <NavBar />
            <div className={'content mx-3 my-4'}>
                <StatisticsCards />
                <div className={'charts d-flex justify-content-between flex-wrap mt-3'}>
                    <div class={'chartImage mb-2'}>
                        <img src={Chart} alt=""/>
                    </div>
                    <div className={'barchartImage mb-2'}>
                        <img src={barChart} alt=""/>
                    </div>
                </div>

                <RecentRequests />
            </div>
        </Main>
    );

}
export default Dashboard;
