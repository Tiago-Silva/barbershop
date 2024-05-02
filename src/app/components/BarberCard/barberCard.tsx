import React from 'react';
import {
    ButtonCard,
    Container, IconStar,
    ImgCard,
    Info,
    Title,
    WrapperButton,
    WrapperIcon
} from "@/app/components/BarberCard/styles";

interface Props {
    image: string;
    title: string;
    info: string;
    star: string;
}

const BarberCard = ({
    image,
    title,
    info,
    star
}: Props) => {
    return (
        <Container>
            <ImgCard
                alt='Imagem barbearia'
                src={image}
                width={170}
                height={170}
            />
            <WrapperIcon>
                <IconStar />
                <Title>{star}</Title>
            </WrapperIcon>
            <Title>{title}</Title>
            <Info>{info}</Info>
            <WrapperButton>
                <ButtonCard>Reservar</ButtonCard>
            </WrapperButton>
        </Container>
    );
};

export default BarberCard;