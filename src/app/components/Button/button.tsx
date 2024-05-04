import React from 'react';
import {Container} from "@/app/components/Button/styles";

interface Props {
    title: string;
    isActived: boolean;
}

const Button = ({
    title,
    isActived
}: Props) => {
    return (
        <Container $isActived={isActived}>
            {title}
        </Container>
    );
};

export default Button;