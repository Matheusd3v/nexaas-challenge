import styled from "styled-components"

export const ContentContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    box-sizing: border-box;
`

export const CardViewsContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`

