import ReactEcharts from "echarts-for-react";
import styled from "styled-components";


const BarChartsContainer = styled.div`
  width: 268px;
  background: #990D81;
  border-radius: 12px;
  .echarts-for-react {
    padding: 50px;
  }
  .details {
    * {
      color: white;
      font-family: 'Open Sans', sans-serif;
    }
    
    .title {
      font-size: 16px;
      font-weight: 700;
    }
    .desc {
      font-size: 14px;
    }
  }
  
`

const BarChart = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            boundaryGap: false

        },
        yAxis: {
            type: 'value',
            splitNumber: 5,
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)',
                    width: 1,
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                data: [900, 700, 500, 1000, 70, 800],
                type: 'bar',
                barMaxWidth: 10,
                itemStyle: {color: 'white'}
            }
        ]
    };

    return (<BarChartsContainer class={'px-3'}>
        <ReactEcharts option={option} />
        <div className={'details p-3'}>
            <p className={'mb-0 title'}>New users</p>
            <p className={'mb-0 desc'}>(+23%) than last week</p>
        </div>

    </BarChartsContainer>)


}
export default BarChart;

