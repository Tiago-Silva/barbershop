import React from 'react';
import {
    Container, IconStar,
    ImgCard,
    Info,
    Title,
    WrapperButton,
    WrapperIcon
} from "@/app/components/BarberCard/styles";
import Button from "@/app/components/Button/button";

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
                <Button
                    title='Reservar'
                    isActived={false}
                />
            </WrapperButton>
        </Container>
    );
};

export default BarberCard;