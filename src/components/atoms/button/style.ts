import styled from "styled-components";

interface ButtonProps {
    height: number;
    width: number;
}

export const ButtonAtom = styled.button<ButtonProps>`
    width: ${(props) => props.width}px ;
    height: ${(props) => props.height}px ;
`
