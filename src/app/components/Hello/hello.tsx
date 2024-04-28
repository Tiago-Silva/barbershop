import React from 'react';
import {Container, SubTitle, Title} from "@/app/components/Hello/styles";

const Hello = () => {
    return (
        <Container>
            <Title>Olá Tiago</Title>
            <SubTitle>
                {new Intl.DateTimeFormat(
                    'pt-BR',
                    {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                    }).format(new Date())
                }
            </SubTitle>
        </Container>
    );
};

export default Hello;