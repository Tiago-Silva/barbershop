import React from 'react';
import {
    Container,
    IconPhone,
    Info,
    Title,
    WrapperIcon,
    WrapperSection
} from "@/app/components/InfoBarber/styles";
import Line from "@/app/components/Line/line";
import Button from "@/app/components/Button/button";

const weekSchedule = [
    { day: 'Segunda', time: '09:00 - 21:00' },
    { day: 'Terça', time: '09:00 - 21:00' },
    { day: 'Quarta', time: '09:00 - 21:00' },
    { day: 'Quinta', time: '09:00 - 21:00' },
    { day: 'Sexta', time: '09:00 - 21:00' },
    { day: 'Sábado', time: '09:00 - 21:00' },
    { day: 'Domingo', time: 'Fechado' },
];

const phones = [
    { number: '(11) 98866-3045' },
    { number: '(11) 98866-4077' },
]

interface Props {
    title: string;
    info: string;
}

const InfoBarber = ({
    title,
    info
}: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Info>{info}</Info>

            <Line />

            ${phones.map((phone, index) => (
                <WrapperSection key={index}>
                    <WrapperIcon>
                        <IconPhone />
                        <Info>{phone.number}</Info>
                    </WrapperIcon>
                    <Button
                        title={'Copiar'}
                        isActived={false}
                    />
                </WrapperSection>
            ))}

            <Line />

            ${weekSchedule.map((schedule, index) => (
                <WrapperSection key={index}>
                    <Title>{schedule.day}</Title>
                    <Info>{schedule.time}</Info>
                </WrapperSection>
            ))}

        </Container>
    );
};

export default InfoBarber;