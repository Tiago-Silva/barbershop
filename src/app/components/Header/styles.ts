import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 20px;
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