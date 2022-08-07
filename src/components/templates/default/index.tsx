import React, { ReactNode } from 'react'
import AsideBar from '../../organisms/asideBar'
import NavBar from '../../organisms/navBar'
import { ContentContainer, SecondayContainer } from './style'

const TemplateDefualt = (children: ReactNode) => {
  return (
    <>
        <NavBar/>
        <SecondayContainer>
            <AsideBar/>
            <ContentContainer>
                {children}
            </ContentContainer>
        </SecondayContainer>
    </>
  )
}

export default TemplateDefualt