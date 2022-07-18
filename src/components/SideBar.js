import styled from "styled-components";
import CompanyLogo from "../assets/CompanyLogo.png";
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
      hr.endLine {
        color: white;
        opacity: 0.1;
      }
    `
const SideBar = () => {
    return (
        <Side className="px-3">
            <div className="d-flex justify-content-center mt-4">
                <div className="logo">
                    <img src={CompanyLogo} alt="logo"/>
                </div>
            </div>
            <hr className="endLine"/>
            <SideBarLinks />



        </Side>
    );

}
export default SideBar;
