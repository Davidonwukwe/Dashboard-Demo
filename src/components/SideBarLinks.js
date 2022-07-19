import Home from '../assets/icons/Home.png'
import KYC from '../assets/icons/KYC.png'
import Reports from '../assets/icons/Reports.png'
import Requests from '../assets/icons/Requests.png'
import AuditTrail from '../assets/icons/AuditTrail.png'
import User from '../assets/icons/User.png'
import Setting from '../assets/icons/Setting.png'
import ArrowDownCircle from '../assets/icons/ArrowDownCircle.png'
import styled from "styled-components";
import {useState} from "react";

const SideBarLinks = () => {
    const [links, setLinks] = useState([
        {
            text: 'Dashboard',
            icon: Home,
            focus: true
        },
        {
            text: 'Requests',
            icon: Requests,
            focus: false
        },
        {
            text: 'KYCs',
            icon: KYC,
            focus: false
        },
        {
            text: 'Reports',
            icon: Reports,
            focus: false
        },
        {
            text: 'Audit Trail',
            icon: AuditTrail,
            focus: false,
            hasDropdown: true
        },
        {
            text: 'User',
            icon: User,
            focus: false
        },
        {
            text: 'Setting',
            icon: Setting,
            focus: false
        },



    ])
    return (
        <LinksContainer>
            {links.map((link, index) =>
                (<div key={index} 
                      className={`link d-flex align-items-center text-nowrap px-3 my-3 cursor${link.focus ? ' focus' : ''} ${link.hasDropdown ? ' justify-content-between' : ''} `}>
                    <div className="d-flex align-items-center">
                        <div className="icon p-0 m-0">
                                <img src={link.icon} alt=""/>
                        </div>
                        <p className="linkText p-0 mb-0">{link.text}</p>
                    </div>
                    { link.hasDropdown && (
                        <div className="dropdownIcon">
                            <img src={ArrowDownCircle} alt=""/>
                        </div>
                    )}
                </div>)
            )}
        </LinksContainer>
    )

}
const LinksContainer = styled.div`
  .link {
    border-radius: 5px;
    height: 36px;
    cursor: pointer;
  }
  .link.focus, .link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-right: 3px solid white;

  }
  .linkText {
    color: #FFFFFF;
    font-weight: 500;
    margin-left: 12.5px;
    font-size: 14px;
  }
  .icon {
    width: 19px;
    height: 20px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .dropdownIcon {
    width: 24px;
    height: 24px;
    img  {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    .linkText {
      display: none;
    }
    .link {
      width: 52px;
    }
    .dropdownIcon {
      display: none;
    }
  }
`
export default SideBarLinks;
