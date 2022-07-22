import styled from "styled-components";
import NavBar from "./NavBar";
import StatisticsCards from "./StatisticsCards";
import RecentRequests from "./RecentRequests";
import ChartImage from "../assets/images/Chart.png"
import barChart from "../assets/images/chart (1).png"
import Chart from "./Chart";
import BarChart from "./BarChart";

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
            <div className={'content mx-3 my-1'}>
                <StatisticsCards />
                <div className={'charts d-flex justify-content-between flex-wrap mt-3'}>
                    <Chart />
                    <BarChart />
                </div>

                <div>
                </div>

                <RecentRequests />
            </div>
        </Main>
    );

}
export default Dashboard;
