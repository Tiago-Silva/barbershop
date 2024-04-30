'use client';

import {Container, Title, WrapperCard} from "@/app/(pages)/styles.page";
import Header from "@/app/components/Header/header";
import Hello from "@/app/components/Hello/hello";
import InputSearch from "@/app/components/InputSearch/inputSearch";
import AgendamentoCard from "@/app/components/AgendamentoCard/agendamentoCard";
import BarberCard from "@/app/components/BarberCard/barberCard";

export default function Home() {
  return (
    <Container>
        <Header />
        <Hello />
        <InputSearch />

        <Title>Agendamentos</Title>
        <AgendamentoCard />

        <Title>Recomendados</Title>
        <WrapperCard>
            <BarberCard />
            <BarberCard />
        </WrapperCard>
    </Container>
  );
}
