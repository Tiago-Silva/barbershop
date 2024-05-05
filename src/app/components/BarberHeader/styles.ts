import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa";
import Image from "next/image";

export const Container = styled.header`
    width: 100%;
    height: auto;

    position: relative;
`;

export const Img = styled(Image)`
    width: calc(100% + 2 * 20px);
    height: auto;
    margin-left: -20px;
    margin-top: -20px;
    filter: brightness(120%);
`;

export const WrapperIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    position: absolute;
    width: 100%;
    top: 0;
    
    padding: 20px 20px 0 20px;
`;


export const ButtonMenu = styled.button`
    background-color: ${({ theme }) => theme.colors.gray04};
    border: none;
    cursor: pointer;
    outline: none;
`;

export const IconMenu = styled(FiMenu)`
    color: ${({ theme }) => theme.colors.iconMenu};
    font-size: 1.2rem;
    font-weight: 700;
`;

export const IconReturn = styled(FaAngleLeft)`
    color: ${({ theme }) => theme.colors.iconMenu};
    font-size: 1.2rem;
    font-weight: 700;
`;