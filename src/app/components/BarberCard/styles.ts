import styled from "styled-components";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;

    padding: 5px;
    background-color: ${({theme}) => theme.colors.secondary_black};
    border: 1px solid ${({theme}) => theme.colors.gray01};
    border-radius: 20px;
    
    width: 100%;
    gap: 15px;
    
    position: relative;
`;

export const ImgCard = styled(Image)`
    border-radius: 20px;
    width: 100%;
    height: auto;
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

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ButtonCard = styled.button`
    width: 90%;
    color: ${({theme}) => theme.colors.text_white};
    background-color: ${({theme}) => theme.colors.gray01};
    border: 1px solid ${({theme}) => theme.colors.gray01};
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 700;
    
    padding: 10px;
    cursor: pointer;
    outline: none;
`;

export const WrapperIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${( {theme}) => theme.colors.gray04};
    border-radius: 20px;
    
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    
    gap: 10px;
    padding: 5px 10px 5px 10px;
    width: max-content;
`;

export const IconStar = styled(FaStar)`
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.5rem;
`;