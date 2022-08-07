import React from "react";
import SmallCard from "../../components/molecules/smallCard";
import TitleBox from "../../components/molecules/titleBox";
import { CardViewsContainer, ContentContainer } from "./style";

const PainelPage = () => {
  return (
    <ContentContainer>
      <TitleBox>Visão geral</TitleBox>

      <CardViewsContainer>
        <SmallCard title="Total de Clientes" value={7} />

        <SmallCard title="Total de Clientes" value={7} />

        <SmallCard title="Total de Clientes" value={7} />

        <SmallCard title="Total de Clientes" value={7} />
      </CardViewsContainer>

      <TitleBox> Clientes Cadastrados </TitleBox>

      
    </ContentContainer>
  );
};

export default PainelPage;
