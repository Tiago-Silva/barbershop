import React from 'react';
import {ButtonCard, Container, ImgCard, Info, Title, WrapperButton} from "@/app/components/BarberCard/styles";

interface Props {
    image: string;
    title: string;
    info: string;
}

const BarberCard = ({
    image,
    title,
    info,
}: Props) => {
    return (
        <Container>
            <ImgCard
                alt='Imagem barbearia'
                src={image}
                width={170}
                height={170}
            />
            <Title>{title}</Title>
            <Info>{info}</Info>
            <WrapperButton>
                <ButtonCard>Reservar</ButtonCard>
            </WrapperButton>
        </Container>
    );
};

export default BarberCard;