import styled from "styled-components";
import Image from "next/image";


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    
    background-color: ${( {theme} ) => theme.colors.secondary_black};
    border: 1px solid ${( {theme} ) => theme.colors.gray02};
    border-radius: 10px;
    
    margin-top: 20px;
    padding: 10px;
    gap: 10px;
`;

export const ImgCard = styled(Image)`
    border-radius: 20px;
    width: 100%;
    height: auto;
    filter: brightness(120%);
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.text_white};
    font-size: 1rem;
    font-weight: 700;
`;

export const Info = styled.h2`
    color: ${({theme}) => theme.colors.gray03};
    font-size: 0.8rem;
    font-weight: 700;
    word-wrap: break-word;
    line-height: 1.5;
`;

export const FooterRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
`;

export const Amount = styled.h2`
    color: ${({theme}) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 700;
`;