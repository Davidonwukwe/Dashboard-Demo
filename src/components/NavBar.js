import styled from "styled-components";
import sunIcon from "../assets/icons/sunIcon.png"
import notificationIcon from "../assets/icons/notificationIcon.png"
import profilePicture from "../assets/icons/profilePicture.png"
import {useState} from "react";

const NavBarContainer = styled.div`
  .nav-bar {
    height: 80px;
    background: #FFFFFF;
  }    
  
  .title {
    font-size: 24px;
    font-weight: 700;
  }
  .searchInput {
    background: #FAFAFA;
    padding-left: 40px;
    width: 245px;

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
  .responsive-search {
    display: none;
  }
  .menu-dropdown {
    right: 21px;
    top: -90px;
    z-index: 5;
    width: 160px;
    border-radius: 6px;
    p {
      display: flex;
      align-items: center;
      height: 30px;
      cursor: pointer;
    };
    p:hover {
      background-color: rgba(0,0,0,0.1);;
    }
  }
  .menu-dropdown-container {
    display: none;
  }
  .overlay {
    height: 100vh;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  .searchIcon {
    top: 4px;
    left: 8px;
    svg {
      color: #D6D7E3;
    }
  }
  
  
  @media screen and (max-width: 900px) {
    .iconsContainer {
      display: none !important;
    }
    .hamburger {
      display: block !important;
    }
    .rightSide {
      min-width: 50px;
      justify-content: end !important;
     }
    .responsive-search {
      display: block;
    }
    .search {
      display: none;
    }
    .menu-dropdown-container {
      display: block;
    }
  }
`;
const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <NavBarContainer>
            <div className="nav-bar d-flex align-items-center justify-content-between px-4">
                <h3 className="title mb-0 font-weight-bold">Dashboard</h3>


                <div className={'d-flex justify-content-between rightSide'}>
                    <div className="form-group has-search search position-relative">
                        <div className={'searchIcon position-absolute'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="feather feather-search">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <input type="search" className="form-control searchInput border-0" placeholder="Enter keywords.."
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center iconsContainer">
                        <p className={'mb-0'}>EN<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                     stroke-linecap="round" strokeLinejoin="round"
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
                    <div onClick={() => setToggleMenu(!toggleMenu)} className={'hamburger d-none cursor'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"
                             className="feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <line x1="3" y1="18" x2="21" y2="18"/>
                        </svg>
                    </div>

                </div>
            </div>
            <div className="form-group m-3 has-search responsive-search position-relative">
                <div className={'searchIcon position-absolute'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <input type="search" className="form-control searchInput w-100 border-0" placeholder="Enter keywords.."
                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
            { toggleMenu && (<div className={'position-relative menu-dropdown-container'}>
                <div className={'menu-dropdown position-absolute shadow-lg bg-white'}>
                    <p className={'mb-0 mt-2 p-2'}>Language</p>
                    <p className={'mb-0 p-2'}>Dark Mode</p>
                    <p className={'mb-0 p-2'}>Notifications</p>
                    <p className={'p-2 mb-2'}>Profile</p>
                </div>
                <div onClick={() => setToggleMenu(false)} className={'position-fixed opacity-0 w-100 overlay'}>

                </div>
            </div>)}

        </NavBarContainer>

    );
}

export default NavBar;
