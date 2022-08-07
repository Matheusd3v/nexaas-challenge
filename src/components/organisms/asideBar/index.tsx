import React from 'react'
import ButtonAtomComponent from '../../atoms/button'
import { AsideContainer } from './style'
import painelIcon from "../../../assets/icon 1.png"
import engineIcon from "../../../assets/icon 2.png"

const AsideBar = () => {
  return (
    <AsideContainer>
      
      <ButtonAtomComponent>
        <img src={painelIcon} alt='painel icon'/>
        <p>Painel</p>
      </ButtonAtomComponent>

      <ButtonAtomComponent>
        <img src={engineIcon} alt='engone icon'/>
        <p>Configurações</p>
      </ButtonAtomComponent>

    </AsideContainer>
  )
}

export default AsideBar