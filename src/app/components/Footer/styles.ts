import styled from "styled-components";


export const Container = styled.footer`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.p`
    font-size: 0.8rem;
    font-weight: 700;
    word-wrap: break-word;
    line-height: 1.5;
    color: ${( {theme} ) => theme.colors.gray03};
    
    margin-top: 50px;
    bottom: 0;
    width: 100%;
`;