import styled from "styled-components";


export const Container = styled.hr`
    width: calc(100% + 2 * 20px);
    margin: 20px 0 0 -20px;
    border: 1px solid ${({theme}) => theme.colors.gray02};
    opacity: 0.5;
`;