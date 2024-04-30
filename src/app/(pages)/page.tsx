'use client';

import {Container} from "@/app/(pages)/styles.page";
import Header from "@/app/components/Header/header";
import Hello from "@/app/components/Hello/hello";
import InputSearch from "@/app/components/InputSearch/inputSearch";
import AgendamentoCard from "@/app/components/AgendamentoCard/agendamentoCard";

export default function Home() {
  return (
    <Container>
        <Header />
        <Hello />
        <InputSearch />
        <AgendamentoCard />
    </Container>
  );
}
