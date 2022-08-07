import React, { ReactNode } from 'react'
import { TitleStyle } from './style'

interface TitleProps {
  children: ReactNode
}

const TitleBox = ({children}: TitleProps) => {
  return (
    <TitleStyle>
      <h3>{children}</h3>
    </TitleStyle>
  )
}

export default TitleBox