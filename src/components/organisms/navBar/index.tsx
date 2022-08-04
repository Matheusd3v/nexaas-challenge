import { CenterBarContainer, NavBarContainer } from "./style";
import nexaasLogo from "../../../assets/Logo Nexaas.png";
import notification from "../../../assets/Notification.png";
import avatar from "../../../assets/avatar-admin.png";
import arrowLogo from "../../../assets/Arrow.png";
import SearchBar from "../../molecules/searchBar";

const NavBar = () => {
  return (
    <NavBarContainer>
      <CenterBarContainer>
        <div className="logo">
          <img src={nexaasLogo} alt="logo nexaas" />
        </div>

        <section className="navigation">
          <SearchBar />

          <div className="iconsContainer">
            <img src={notification} alt="bell notification" />

            <div className="avatarContainer">
              <img src={avatar} alt="avatar" />
              <img src={arrowLogo} alt="arrow" />
            </div>
          </div>
        </section>
      </CenterBarContainer>
    </NavBarContainer>
  );
};

export default NavBar;
