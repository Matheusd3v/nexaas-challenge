import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 60%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  box-sizing: border-box;
  border: 1px solid lightgray;

  input {
    margin-left: 15px;
  }

  @media screen and (max-width: 1350px) {
    input {
      width: 90%;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 50%;

    input {
      width: 85%;
    }
  }

  @media screen and (max-width: 950px) {
    width: 250px;

    input {
      width: 150px;
    }
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;
