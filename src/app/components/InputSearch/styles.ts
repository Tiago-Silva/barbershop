import styled from "styled-components";
import { CiSearch } from "react-icons/ci";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    gap: 10px;
    margin-top: 50px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 1.2rem;
    border: 1px solid ${( {theme}) => theme.colors.gray02};
    border-radius: 5px;
    
    background-color: ${( {theme}) => theme.colors.gray01};
    color: ${( {theme}) => theme.colors.gray03};

    &:focus {
        outline: none;
        border: 1px solid ${( {theme}) => theme.colors.primary};
    }
`;

export const SearchButton = styled.button`
    background-color: ${( {theme}) => theme.colors.primary};
    border: 1px solid ${( {theme}) => theme.colors.primary};
    border-radius: 10px;
    cursor: pointer;
    outline: none;
`;

export const IconSearch = styled(CiSearch)`
    color: ${({ theme }) => theme.colors.iconMenu};
    font-size: 2.3rem;
`;
