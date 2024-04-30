'use client';

import {Container} from "@/app/(pages)/styles.page";
import Header from "@/app/components/Header/header";
import Hello from "@/app/components/Hello/hello";
import InputSearch from "@/app/components/InputSearch/inputSearch";

export default function Home() {
  return (
    <Container>
        <Header />
        <Hello />
        <InputSearch />
    </Container>
  );
}
