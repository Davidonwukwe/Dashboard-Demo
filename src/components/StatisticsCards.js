import {useState} from "react";
import styled from "styled-components";
import pendingRequestsIcon from '../assets/icons/pendingRequestsCircle.png'
import approvedRequestsCircle from '../assets/icons/approvedRequestsCircle.png'
import totalAgentsCircle from '../assets/icons/totalAgentsCircle.png'
import totalUsersCircle from '../assets/icons/totalUsersCircle.png'

const StatisticsCardContainer =  styled.div`
  .card {
    width: 270px;
    max-width: 270px;
    height: 123px;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
  
  .statValue {
    color: #171717;
    font-size: 24px;
  
  }
  .statName {
    color: #AAAAAA;
    font-size: 16px;
  }
  .growth {
    color: #4BDE97;
    font-size: 14px;
  }
  .lastMonth {
    color: #BDBDBD;
    font-size: 14px;
  }
  .up {
    svg {
      color: #4BDE97;;
      width: 14px;
      padding-right: 2px;
    }
    .growth {
      color: #4BDE97;
    }
  }
  .down {
    svg {
      color: #F26464;
      width: 14px;
      padding-right: 2px;
    }
    .growth {
      color: #F26464;
    }
  }
  .neutral {
    svg {
      color: #FFB648;
      width: 14px;
      padding-right: 2px;
    }
    .growth {
      color: #FFB648;
    }
  }
  @media screen and (max-width: 640px) {
      justify-content: center !important;
  }
  @media screen and (min-width: 1872px ) {
    width: 75%;
  }
`;
const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const StatisticsCards = () => {
    const [statistics, setStatistics] = useState([
        {
            name: 'Pending Requests',
            value: 1478286,
            percentage: 4.07,
            icon: pendingRequestsIcon,
            growth: 'up'
        },
        {
            name: 'Approved Requests',
            value: 478520,
            percentage: 0.24,
            icon: approvedRequestsCircle,
            growth: 'up'

        },
        {
            name: 'Total Agents',
            value: 154872,
            percentage: 1.64,
            icon: totalAgentsCircle,
            growth: 'down'

        },
        {
            name: 'Total Users',
            value: 167,
            percentage: 0.00,
            icon: totalUsersCircle,
            growth: 'neutral'

        },

    ])
  return (
      <StatisticsCardContainer className={'d-flex justify-content-between flex-wrap'}>
          {
              statistics.map((stat, index) =>

                  (<div key={index} className={'card p-3 mb-2'}>
                      <div className={'d-flex'}>
                          <div className={'statIcon'}>
                              <img src={stat.icon} alt=""/>
                          </div>
                          <div className={'mx-2 text-nowrap'}>
                              <h3 className={'statValue mb-0'}>{numberWithSpaces(stat.value)}</h3>
                              <p className={'statName'}>{stat.name}</p>
                              <div className={stat.growth}>
                                  { stat.growth !== 'down' ?  (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="feather feather-trending-up">
                                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                      <polyline points="17 6 23 6 23 12"></polyline>
                                  </svg>) : (
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-trending-down">
                                          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                          <polyline points="17 18 23 18 23 12"></polyline>
                                      </svg>
                                  )}
                                  <span className={'growth'}>{stat.percentage}%    </span>
                                  <span className={'lastMonth ps-1'}>Last month</span>
                              </div>
                          </div>
                      </div>


                  </div>)

              )
          }

      </StatisticsCardContainer>
  )
}
export default StatisticsCards;
