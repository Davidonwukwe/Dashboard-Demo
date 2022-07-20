import {Card, Table} from "react-bootstrap";
import styled from "styled-components";
import {useState} from "react";
import michaelProfileIcon from "../assets/images/michael.png"
import arrowRightCircle from "../assets/icons/arrowRightCircle.svg"

const RecentRequests = () => {
    const Container = styled.div`
      .request-card {
        border-radius: 12px;
      }

      .title {
        color: #141414;
        font-weight: 600;
        font-size: 18px
      }
      .table>:not(:first-child) {
        border-top: none;
      }

      tr {
        border-bottom: 1px solid #F5F5F5;
      }

      tbody tr {
        height: 72px;

      }

      thead tr {
        color: #8392AB;
        font-size: 14px;
        font-weight: 700;
      }

      .request-name {
        font-size: 16px;
        color: #141414;
        font-weight: 600;
      }

      .request-email {
        font-size: 14px;
        color: #8392AB;
      }

      .status {
        .pending {
          color: rgba(255, 172, 50);;
          background: rgba(255, 172, 50, 0.1);
          border-radius: 100px;
        }

        .active {
          color: rgb(99, 182, 127);
          background: rgba(99, 182, 127, 0.1);
          border-radius: 100px;
        }
      }


    `
    const [data, setData] = useState([
        {
            name: 'Michael Olu',
            email: 'michael@mail.com',
            type: 'New Agent',
            status: 'pending',
            date: '23/04/18',
            icon: michaelProfileIcon
        },
        {
            name: 'Michael Olu',
            email: 'michael@mail.com',
            type: 'New Agent',
            status: 'pending',
            date: '23/04/18',
            icon: michaelProfileIcon
        },
        {
            name: 'Michael Olu',
            email: 'michael@mail.com',
            type: 'New Agent',
            status: 'pending',
            date: '23/04/18',
            icon: michaelProfileIcon
        },
        {
            name: 'Michael Olu',
            email: 'michael@mail.com',
            type: 'New Agent',
            status: 'pending',
            date: '23/04/18',
            icon: michaelProfileIcon
        },


    ])

    return (
        <Container>
            <Card className={'request-card d-flex col-md-9 my-3'}>
                <Card.Body>
                    <Card.Title className={'title'}>Recent Requests</Card.Title>
                    <Table className={'mt-3 text-nowrap'} responsive>
                        <thead className={'py-2'}>
                        <tr>
                            <th>Name/Email</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((request, index) => (
                                <tr className={'align-middle'} key={index}>
                                    <td>
                                        <div className={'d-flex align-items-center'}>
                                            <div>
                                                <img src={request.icon} alt=""/>
                                            </div>
                                            <div className={'mx-4'}>
                                                <h4 className={'request-name mb-0'}>{request.name}</h4>
                                                <p className={'request-email mb-0'}>{request.email}</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>{request.type}</td>
                                    <td className={'status'}>
                                        <div className={`badge badge-pill ${request.status}`}>{request.status}</div>
                                    </td>
                                    <td>{request.date}</td>
                                    <td>
                                        <div>
                                            <img src={arrowRightCircle} alt=""/>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default RecentRequests;
