import styled from "styled-components";
import CompanyLogo from "../assets/CompanyLogo.png";
import ProfilePic from "../assets/icons/profileCardPic.png";
import SideBarLinks from "./SideBarLinks";

const Side = styled.div`
      width: 17.6%;
      min-width: 200px;
      max-width: 253px;
      background-color: #990D81;
      .logo {
        width: 65px;
        height: 51px;
        img {
          width: 100%;
          height: 100%;
        }
      }
  .profile-card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    bottom: 50px;
    width: 85%;
    .details {
      margin-left: 8px;
    }
    .name {
      font-size: 14px;
      color: white;
    }
    .role {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
      hr.endLine {
        color: white;
        opacity: 0.1;
      }
      @media screen and (max-width: 500px) {
        min-width: 75px;
        .logo {
          width: 32px;
          height: 25px;
        }
      }
    `
const SideBar = () => {
    return (
        <Side className="px-3 position-relative">
            <div className="d-flex justify-content-center mt-4">
                <div className="logo">
                    <img src={CompanyLogo} alt="logo"/>
                </div>
            </div>
            <hr className="endLine"/>
            <SideBarLinks />
            <div className={'profile-card d-flex position-absolute'}>
                <div className={'mr-3'}>
                    <img src={ProfilePic} alt=""/>
                </div>
                <div className={'details'}>
                    <p className={'name mb-0'}>Nafisa Sh.</p>
                    <p className={'role mb-0'}>Support Manager</p>
                </div>

            </div>



        </Side>
    );

}
export default SideBar;
