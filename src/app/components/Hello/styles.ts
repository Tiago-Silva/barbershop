import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.text_white};;
    font-size: 1.5rem;
    font-weight: 700;
`;

export const SubTitle = styled.p`
    color: ${({theme}) => theme.colors.text_white};;
    font-size: 1rem;
    text-transform: capitalize;
`;