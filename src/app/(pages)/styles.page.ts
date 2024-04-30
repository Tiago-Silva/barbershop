import styled from "styled-components";


export const Container = styled.main`
    padding: 20px;
`;

export const Title = styled.h2`
    font-size: 1.3rem;
    color: ${({theme}) => theme.colors.gray03};
    font-weight: 700;
    margin: 50px 0 20px 0;
`;

export const WrapperCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;