import styled from "styled-components";

export const SmallCardDiv = styled.div`
    width: 250px;
    height: 90px;
    -webkit-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.3); 
    box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.3);
    padding: 15px 0 0 20px;
    margin-right: 20px;

    h2 {
        font-weight: 100;
        margin-bottom: 15px;
    }

    p {
        font-weight: 600;
        font-size: 20px;
        color: #538fd4;
    }

    @media screen and (max-width: 500px) {
        width: 180px;
    }
`
