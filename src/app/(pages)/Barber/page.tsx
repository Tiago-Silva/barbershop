'use client';

import React, {useState} from 'react';
import {
    Container,
    IconMap,
    IconStar,
    Info,
    Title,
    WrapperButtons,
    WrapperIcon,
    WrapperInfo
} from "@/app/(pages)/Barber/styles";
import ServiceCard from "@/app/components/ServiceCard/serviceCard";
import BarberHeader from "@/app/components/BarberHeader/barberHeader";
import Footer from "@/app/components/Footer/footer";
import Button from "@/app/components/Button/button";
import Line from "@/app/components/Line/line";
import InfoBarber from "@/app/components/InfoBarber/infoBarber";

const services = [
    {
        title: 'Corte de Cabelo',
        info: 'Estilo personalizado com as últimas tendências.',
        amount: 'R$ 50,00',
        img: '/barber/cabelo.png',
        alt: 'Corte de Cabelo',
    },
    {
        title: 'Barba',
        info: 'Modelagem completa para destaca sua masculinidade.',
        amount: 'R$ 45,00',
        img: '/barber/barba.png',
        alt: 'Barba',
    },
    {
        title: 'Pézinho',
        info: 'Acabamento perfeito para um visual renovado.',
        amount: 'R$ 20,00',
        img: '/barber/pezinho.png',
        alt: 'Pézinho',
    },
    {
        title: 'Sombrancelha',
        info: 'Expressão acentuada com modelagem precisa.',
        amount: 'R$ 25,00',
        img: '/barber/sombrancelha.png',
        alt: 'Sombrancelha',
    },
    {
        title: 'Massagem',
        info: 'Relaxe e renove com nossos tratamentos revitalizantes.',
        amount: 'R$ 35,00',
        img: '/barber/massagem.png',
        alt: 'Massagem',
    },
    {
        title: 'Hidratação',
        info: 'Fios hidratados, macios e brilhantes.',
        amount: 'R$ 30,00',
        img: '/barber/hidratacao.png',
        alt: 'Hidratação',
    },
];

const Barber = () => {
    const [selectContent, setSelectContent] = useState('Serviços');

    const renderContent = () => {
        switch (selectContent) {
            case 'Serviços':
                return (
                    services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            info={service.info}
                            amount={service.amount}
                            img={service.img}
                            alt={service.alt}
                        />
                    ))
                )
            case 'Informações':
                return (
                    <InfoBarber
                        title={'SOBRE NÓS'}
                        info={'Bem-vindo à Vintage Barber, onde tradição encontra estilo.\n' +
                            '                Nossa equipe de mestres barbeiros transforma cortes de cabelo\n' +
                            '                e barbas em obras de arte. Em um ambiente acolhedor, promovemos\n' +
                            '                confiança, estilo e uma comunidade unida.'}
                    />
                )
            default:
                return <div>Conteúdo não encontrado</div>;
        }
    };

    const handleSelect = (content: string) => {
        setSelectContent(content);
    }

    return (
        <Container>
            <BarberHeader />

            <WrapperInfo>
                <Title>Vintage Barber</Title>

                <WrapperIcon>
                    <IconMap />
                    <Info>Avenida São Sebastião, 357, São Paulo</Info>
                </WrapperIcon>

                <WrapperIcon>
                    <IconStar />
                    <Info>5.0 (889 avaliações)</Info>
                </WrapperIcon>
            </WrapperInfo>

            <Line />

            <WrapperButtons>
                <Button
                    title={'Servições'}
                    isActived={selectContent === 'Serviços'}
                    onClick={() => handleSelect('Serviços')}
                />
                <Button
                    title={'Informações'}
                    isActived={selectContent === 'Informações'}
                    onClick={() => handleSelect('Informações')}
                />
            </WrapperButtons>

            {renderContent()}

            <Footer />
        </Container>
    );
};

export default Barber;