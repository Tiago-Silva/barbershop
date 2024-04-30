import React from 'react';
import {
    CardTitle,
    Container,
    ContentCard,
    FooterImg,
    FooterRightContent,
    FooterText,
    LeftContent,
    RightContent,
    StatusCard,
    StatusText,
    Title
} from "@/app/components/AgendamentoCard/styles";

const AgendamentoCard = () => {
    return (
        <Container>
            <Title>Agendamentos</Title>

            <ContentCard>
                <RightContent>
                    <StatusCard>
                        <StatusText>Confirmado</StatusText>
                    </StatusCard>
                    <CardTitle>Corde de Cabelo</CardTitle>

                    <FooterRightContent>
                        <FooterImg
                            alt='Barber'
                            src='/img.svg'
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
            </ContentCard>
        </Container>
    );
};

export default AgendamentoCard;