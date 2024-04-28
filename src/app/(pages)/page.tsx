'use client';

import {Container} from "@/app/(pages)/styles.page";
import Header from "@/app/components/Header/header";
import Hello from "@/app/components/Hello/hello";

export default function Home() {
  return (
    <Container>
        <Header />
        <Hello />
    </Container>
  );
}
