import React, { useEffect, useState } from "react";
import SmallCard from "../../components/molecules/smallCard";
import TitleBox from "../../components/molecules/titleBox";
import { costumers } from "../../mock";
import { CardViewsContainer, ContentContainer } from "./style";
import { ICostumerShape, ICostumersInfo } from "../../interfaces/costumerInterfaces";

const PainelPage = () => {
  const [costumersInfo, setCostumersInfo] = useState<ICostumersInfo>({} as ICostumersInfo)
  const [totalCollected, setTotalCollected] = useState<string>('')

  const calculateCostumersInfo = (costumersData: ICostumerShape[]) => {
    const totalCostumers = costumersData.length;
    const defaulterCostumers = costumersData.reduce((acc, current) => {
      if(current.status === 'overdue') {
        return acc + 1;
      }

      return acc 
    }, 0)
    const noDefaulters = totalCostumers - defaulterCostumers;

    setCostumersInfo({ totalCostumers, defaulterCostumers, noDefaulters })
  }

  const calculateAmountCollected = (costumersData: ICostumerShape[]) => {
    let totalCollected =  costumersData.reduce((acc, costumer) => acc + costumer.subscription_amount, 0)

    setTotalCollected(`R$ ${totalCollected.toFixed(2)}`)
  }

  useEffect(() => {
    calculateCostumersInfo(costumers)
  }, [])

  useEffect(() => {
    calculateAmountCollected(costumers)
  }, [])
  

  return (
    <ContentContainer>
      <TitleBox>Visão geral</TitleBox>

      <CardViewsContainer>
        <SmallCard title="Total de Clientes" value={costumersInfo.totalCostumers} />

        <SmallCard title="Clientes Inadimplentes" value={costumersInfo.defaulterCostumers} />

        <SmallCard title="Clientes Adimplentes" value={costumersInfo.noDefaulters} />

        <SmallCard title="Total Arrecadado" value={totalCollected} />
      </CardViewsContainer>

      <TitleBox> Clientes Cadastrados </TitleBox>

      
    </ContentContainer>
  );
};

export default PainelPage;
