'use client';

import React from 'react';
import {ButtonMenu, Container, IconMenu, IconReturn, Img, WrapperIcons} from "@/app/components/BarberHeader/styles";

const BarberHeader = () => {
    return (
        <Container>
            <Img
                src='/img.png'
                alt='BarberShopping'
                width={390}
                height={250}
            />

            <WrapperIcons>

                <ButtonMenu>
                    <IconReturn />
                </ButtonMenu>

                <ButtonMenu>
                    <IconMenu />
                </ButtonMenu>

            </WrapperIcons>
        </Container>
    );
};

export default BarberHeader;