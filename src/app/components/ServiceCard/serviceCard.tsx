import React from 'react';
import {
    Amount,
    Container,
    FooterRight,
    ImgCard,
    Info,
    RightContent,
    Title
} from "@/app/components/ServiceCard/styles";
import Button from "@/app/components/Button/button";

interface ServiceCardProps {
    alt: string;
    img: string;
    title: string;
    info: string;
    amount: string;
}

const ServiceCard = ({
    alt,
    img,
    title,
    info,
    amount
}: ServiceCardProps) => {
    return (
        <Container>
            <ImgCard
                alt={alt}
                src={img}
                width={200}
                height={200}
            />

            <RightContent>
                <Title>{title}</Title>
                <Info>{info}</Info>

                <FooterRight>
                    <Amount>{amount}</Amount>
                    <Button
                        title='Reservar'
                        isActived={false}
                    />
                </FooterRight>
            </RightContent>

        </Container>
    );
};

export default ServiceCard;