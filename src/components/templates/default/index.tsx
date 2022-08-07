import React, { ReactNode } from "react";
import AsideBar from "../../organisms/asideBar";
import NavBar from "../../organisms/navBar";
import { SecondayContainer } from "./style";

interface TemplateProps {
  children: ReactNode;
}

const TemplateDefualt = ({ children }: TemplateProps) => {
  return (
    <>
      <NavBar />
      <SecondayContainer>
        <AsideBar />
        {children}
      </SecondayContainer>
    </>
  );
};

export default TemplateDefualt;
