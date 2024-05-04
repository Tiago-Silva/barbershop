import styled, { css } from "styled-components";

interface ButtonProps {
    $isActived: boolean;
}

export const Container = styled.button<ButtonProps>`
    color: ${({theme}) => theme.colors.text_white};
    background-color: ${({theme}) => theme.colors.gray01};
    border: 1px solid ${({theme}) => theme.colors.gray01};
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 700;
    
    padding: 10px;
    cursor: pointer;
    outline: none;
    
    ${({$isActived}) => $isActived && css`
        background-color: ${({theme}) => theme.colors.primary};
        border: 1px solid ${({theme}) => theme.colors.primary};
    `}
`;