import styled from "styled-components";
import Image from "next/image";


export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: ${({theme}) => theme.colors.gray01};
    border: 1px solid ${({theme}) => theme.colors.gray02};
    border-radius: 10px;
    
    padding: 10px;
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StatusCard = styled.div`
    padding: 10px;
    background-color: ${({theme}) => theme.colors.statusCard};
    border: 1px solid ${({theme}) => theme.colors.statusCard};
    border-radius: 15px;
    
    width: max-content;
`;

export const StatusText = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 700;
`;

export const CardTitle = styled.h2`
    color: ${({theme}) => theme.colors.text_white};
    font-size: 1.3rem;
    font-weight: 700;
`;

export const FooterRightContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;

export const FooterImg = styled(Image)`
    border-radius: 50%;
`;

export const FooterText = styled.span`
    color: ${({theme}) => theme.colors.text_white};;
    font-size: 1.2rem;
    font-weight: 400;
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
    border-left: 1px solid ${({theme}) => theme.colors.gray02};
`;