import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

export const Container = styled.header`
    width: 100%;
    height: auto;
`;

export const Img = styled(Image)`
    width: calc(100% + 2 * 20px);
    height: auto;
    margin-left: -20px;
    margin-top: -20px;
    filter: brightness(120%);
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