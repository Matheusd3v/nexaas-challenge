import { CenterBarContainer, NavBarContainer } from "./style";
import nexaasLogo from "../../../assets/Logo Nexaas.png";
import notification from "../../../assets/Notification.png";
import avatar from "../../../assets/avatar-admin.png";
import arrowLogo from "../../../assets/Arrow.png";
import SearchBar from "../../molecules/searchBar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <NavBarContainer>
      <CenterBarContainer>
        <div className="logo">
          <img src={nexaasLogo} alt="logo nexaas" />
        </div>

        <section className="navigation">
          <SearchBar />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              color={"#15a6d5"}
              width={35}
              height={30}
              border={"1px solid"}
              borderColor={"#15a6d5"}
              background={"transparent"}
              borderRadius={5}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>

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
