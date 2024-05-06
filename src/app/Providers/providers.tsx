import React from 'react';
import StyledJsxRegistry from '../registry';
import {ThemeProvider} from "styled-components";
import theme from "@/app/global/theme";

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers = ({
    children
}: ProvidersProps) => {
    return (
        <StyledJsxRegistry>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledJsxRegistry>
    );
};