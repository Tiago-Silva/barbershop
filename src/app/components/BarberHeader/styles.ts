import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

export const Container = styled.header`
    //display: flex;
    //flex-direction: row;
    //justify-content: space-between;
    //align-items: center;
    position: relative;
    width: 100%;
    height: auto;
    //margin: -20px -20px 20px;
    //right: -20px;
`;

export const Img = styled(Image)`
    width: 100%;
    height: auto;
`;

export const ButtonMenu = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
`;

export const IconMenu = styled(FiMenu)`
    color: ${({ theme }) => theme.colors.iconMenu};
    font-size: 1.2rem;
`;