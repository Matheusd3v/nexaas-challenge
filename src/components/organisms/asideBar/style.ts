import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: 252px;
    height: calc(100vh - 80px);
    border: 2px solid lightgrey;
    border-top: 0px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
        display: flex;
        align-items: center;
        padding: 0 25px;
        box-sizing: border-box;
        background: transparent;
        border: 1px solid transparent;

        p {
            margin-left: 15px;
            font-weight: 600;
            font-size: 18px;
        }

        :hover {
            border: 1px solid lightblue;
        }
    }

    @media screen and (max-width: 750px){
        width: 152px;

        button {
            width: 100%;

            p {
                font-size: 10px;
            }
        }

    }
`