import styled from "styled-components";

export const NavBarContainer = styled.header`
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const CenterBarContainer = styled.div`
    max-width: 1800px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid lightgrey;

    .logo {
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

`