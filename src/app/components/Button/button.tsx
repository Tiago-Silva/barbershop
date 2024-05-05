import React from 'react';
import {Container} from "@/app/components/Button/styles";

interface Props {
    title: string;
    isActived: boolean;
    onClick?: () => void;
}

const Button = ({
    title,
    isActived,
    onClick
}: Props) => {
    return (
        <Container $isActived={isActived} onClick={onClick}>
            {title}
        </Container>
    );
};

export default Button;