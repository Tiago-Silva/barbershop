import React from 'react';
import {
    CardTitle,
    Container,
    FooterImg,
    FooterRightContent,
    FooterText,
    LeftContent,
    RightContent,
    StatusCard,
    StatusText,
} from "@/app/components/AgendamentoCard/styles";

const AgendamentoCard = () => {
    return (
        <Container>
            <RightContent>
                <StatusCard>
                    <StatusText>Confirmado</StatusText>
                </StatusCard>
                <CardTitle>Corde de Cabelo</CardTitle>

                <FooterRightContent>
                    <FooterImg
                        alt='Barber'
                        src='/images/20.png'
                        width={40}
                        height={40}
                    />
                    <FooterText>Vintage barber</FooterText>
                </FooterRightContent>
            </RightContent>
            <LeftContent>
                <FooterText>Maio</FooterText>
                <CardTitle>01</CardTitle>
                <FooterText>13:30</FooterText>
            </LeftContent>
        </Container>
    );
};

export default AgendamentoCard;