import React, { ReactNode } from 'react'
import { ButtonAtom }  from './style'


interface ButtonProps {
    height?: number;
    width?: number;
    children: ReactNode;
}

const ButtonAtomComponent = ({ children, height = 55, width = 250 }: ButtonProps) => {
  return (
    <ButtonAtom
      width={width}
      height={height}
    >
      { children }  
    </ButtonAtom>
  )
}

export default ButtonAtomComponent