import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: scroll;
    max-height: 100vh;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
    }

    -ms-overflow-style: none;
`;

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 10px;
    gap: 20px;
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.text_white};
    font-size: 1rem;
    font-weight: 700;
`;

export const Info = styled.h2`
    color: ${({theme}) => theme.colors.text_white};
    font-size: 0.9rem;
    font-weight: 500;
`;

export const Line = styled.hr`
    width: calc(100% + 2 * 20px);
    margin: 20px 0 0 -20px;
    border: 1px solid ${({theme}) => theme.colors.gray02};
`;

export const WrapperIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    gap: 10px;
`;

export const IconStar = styled(FaStar)`
    color: ${({theme}) => theme.colors.primary};
    font-size: 1rem;
`;

export const IconMap = styled(FaMapMarkerAlt)`
    color: ${({theme}) => theme.colors.primary};
    font-size: 1rem;
`;

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding-top: 20px;
    gap: 10px;
`;