import React from 'react';
import {ButtonCard, Container, ImgCard, Info, Title} from "@/app/components/BarberCard/styles";

const BarberCard = () => {
    return (
        <Container>
            <ImgCard
                alt='Imagem barbearia'
                src='/img.svg'
                width={170}
                height={170}
            />
            <Title>Vintage Barber</Title>
            <Info>Avenida São Sebastião, 357, São Paulo</Info>
            <ButtonCard>Reservar</ButtonCard>
        </Container>
    );
};

export default BarberCard;