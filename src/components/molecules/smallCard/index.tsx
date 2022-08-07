import React from 'react'
import { SmallCardDiv } from './style';

interface SmallCardProps {
  title: string;
  value: string | number ;
}

const SmallCard = ({ title, value }: SmallCardProps) => {
  return (
    <SmallCardDiv>
      <h2>{ title }</h2>
      <p>{ value }</p>
    </SmallCardDiv>
  )
}

export default SmallCard