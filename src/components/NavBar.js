import styled from "styled-components";
import sunIcon from "../assets/icons/sunIcon.png"
import notificationIcon from "../assets/icons/notificationIcon.png"
import profilePicture from "../assets/icons/profilePicture.png"
// import chevronDown from "../assets/icons/ch.png"

const NavBarContainer = styled.div`
      height: 80px;
      
      background: #FFFFFF;
      .title {
        font-size: 24px;
        font-weight: 700;
      }
  .searchInput {
    background: #FAFAFA;

  }
  .searchInput::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #D6D7E3;
    font-size: 14px;
  }

  .searchInput:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #D6D7E3;
    font-size: 14px;
  }

  .searchInput::-ms-input-placeholder { /* Microsoft Edge */
    color: #D6D7E3;
    font-size: 14px;
    border-radius: 6px;
  }
  .rightSide {
    width: 45%;
    min-width: 485px;
  }
  .iconsContainer {
    width: 45%;
  }
  @media screen and (max-width: 900px) {
    .rightSide {
      display: none !important;
    }
    .hamburger {
      display: block !important;
    }
  }
`;
const NavBar = () => {
    return (
        <NavBarContainer className="d-flex align-items-center justify-content-between px-4">
            <h3 className="title mb-0 font-weight-bold">Dashboard</h3>


            <div className={'d-flex justify-content-between rightSide'}>
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="search" className="form-control searchInput border-0" placeholder="Enter keywords.."
                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>
                <div className="d-flex justify-content-between align-items-center iconsContainer">
                    <p className={'mb-0'}>EN<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round"
                                                  className="feather feather-chevron-down">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg></p>
                    <div>
                        <img src={sunIcon} alt=""/>
                    </div>
                    <div>
                        <img src={notificationIcon} alt=""/>
                    </div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>

                </div>
            </div>

            <div className={'hamburger d-none'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
            </div>


        </NavBarContainer>
    );
}

export default NavBar;
