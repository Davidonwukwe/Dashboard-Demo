import ReactEcharts from "echarts-for-react";
import styled from "styled-components";


const ChartContainer = styled.div`
  width: 75%;
  background: #FFFFFF;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
  border-radius: 10px;

  .title {
    font-size: 18px;
    color: #171717;
    letter-spacing: -0.4px;
    font-weight: 600;
  }

  .interval {
    color: #B9B9B9;
    font-size: 14px;
    letter-spacing: -0.4px;
  }

  .legend {
    * {
      font-family: 'Roboto', sans-serif;
    }
  }

  .legendName {
    color: #B9B9B9;
    font-size: 12px;
    letter-spacing: -0.4px;
  }

  .legendValue {
    color: #171717;
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 600;
  }

  @media screen and (max-width: 1245px) {
    width: 100%;
  }
`

const Chart = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#EEEEEE'],
                    width: 1,
                    type: 'solid'
                }

            },
            axisLine: {show: false},
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            splitNumber: 6,
            tooltip: {show: true},
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#EEEEEE;',
                    width: 1,
                    type: 'dashed'
                }
            },
            axisPointer: [{show: true}]
        },
        series: [
            {
                data: [26, 50, 25, 25, 50, 22, 10, 25],
                type: 'line',
                smooth: true
            },
            {
                data: [10, 25, 23, 25, 5, 27, 40, 30, 50],
                type: 'line',
                smooth: true
            },


        ]
    };

    return (
        <ChartContainer>
            <div className={'d-flex justify-content-between flex-wrap px-md-5 px-3 pt-3'}>
                <div className={'text-nowrap mb-sm-3'}>
                    <h3 className={'title mb-0'}>User Inflow Statistics</h3>
                    <p className={'interval mb-0'}>Nov - July</p>
                </div>
                <div className={'legend d-flex justify-content-between text-nowrap'}>
                    <div className={'ms-sm-0 mx-lg-3'}>
                        <p className={'legendName pb-0'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                <rect x="0.00012207" y="0.208954" width="8" height="8" rx="4" fill="#5F2EEA"/>
                            </svg>
                            <span className={'ps-2'}>AGENTS</span></p>
                        <p className={'legendValue pb-0 ps-3'}>475 273</p>
                    </div>
                    <div className={'mx-3'}>
                        <p className={'legendName pb-0'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <rect x="0.853149" y="0.208954" width="8" height="8" rx="4" fill="#4BDE97"/>
                            </svg>

                            <span className={'ps-2'}>USERS</span></p>
                        <p className={'legendValue pb-0 ps-3'}>782 396</p>
                    </div>
                </div>
            </div>
            <ReactEcharts option={option}/>

        </ChartContainer>
    )


}
export default Chart;

