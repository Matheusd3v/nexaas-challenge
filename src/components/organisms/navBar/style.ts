import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CenterBarContainer = styled.div`
  max-width: 1800px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgrey;
  border-left: 2px solid lightgrey;
  border-right: 2px solid lightgrey;

  .logo {
    min-width: 250px;
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid lightgrey;
  }

  .navigation {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    box-sizing: border-box;

    .chakra-button.chakra-menu__menu-button.css-kpt0cf {
      display: none;
    }

    .iconsContainer {
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .iconsContainer .avatarContainer {
      background: red;
      display: flex;
      align-items: center;
      height: 100%;
      width: 50px;
    }
  }

  @media screen and (max-width: 750px) {
    .navigation .iconsContainer {
        display: none;
    }

    .navigation .chakra-button.chakra-menu__menu-button.css-kpt0cf {
        display: block;
        margin-right: 15px;
        margin-left: auto;
    }

    .logo {
      width:150px;
      min-width: 150px;

      img {
        width: 100px;
      }
    }

  }
`;
