import React from 'react'
import { InputNavBar } from './style'

const Input = ({ height=40, width=600, placeholder='' }) => {
  return (
    <InputNavBar 
        type={'text'}
        height={height}
        width={width}
        placeholder={placeholder}
    />
  )
}

export default Input