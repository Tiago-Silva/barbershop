import styled from "styled-components";
import { IoIosPhonePortrait } from "react-icons/io";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 20px;
    gap: 10px;
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.gray03};
    font-size: 0.9rem;
    font-weight: 700;

    line-height: 1.5;
`;

export const Info = styled.h2`
    color: ${({theme}) => theme.colors.text_white};
    font-size: 0.9rem;
    font-weight: 500;
    
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.5;
`;

export const WrapperSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const WrapperIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 10px;
`;

export const IconPhone = styled(IoIosPhonePortrait)`
    color: ${( { theme } ) => theme.colors.text_white};
    font-size: 1.2rem;
`;