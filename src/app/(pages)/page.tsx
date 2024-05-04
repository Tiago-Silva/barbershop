'use client';

import {Container, Title, WrapperCard} from "@/app/(pages)/styles.page";
import Header from "@/app/components/Header/header";
import Hello from "@/app/components/Hello/hello";
import InputSearch from "@/app/components/InputSearch/inputSearch";
import AgendamentoCard from "@/app/components/AgendamentoCard/agendamentoCard";
import BarberCard from "@/app/components/BarberCard/barberCard";
import Footer from "@/app/components/Footer/footer";

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
            <BarberCard
                image='/images/20.png'
                title='Vintage Barber'
                info='Avenida São Sebastião, 357, São Paulo'
                star='5.0'
            />
            <BarberCard
                image='/images/02.png'
                title='Clássica Cortez'
                info='Rua Castro Alves, 331, São Paulo'
                star='4.5'
            />
        </WrapperCard>

        <Title>Populares</Title>
        <WrapperCard>
            <BarberCard
                image='/images/19.png'
                title='Los Barberos'
                info='Rua Sete de Setembro, 428, São Paulo'
                star='5.0'
            />
            <BarberCard
                image='/images/01.png'
                title='Homem Elegante'
                info='Rua Projetada, 529, São Paulo'
                star='5.0'
            />
        </WrapperCard>

        <Footer />
    </Container>
  );
}
