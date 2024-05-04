'use client';

import React from 'react';
import {ButtonMenu, Container, IconMenu, Img} from "@/app/components/BarberHeader/styles";

const BarberHeader = () => {
    return (
        <Container>
            <Img
                src='/img.png'
                alt='BarberShopping'
                width={390}
                height={250}
            />

            {/*<ButtonMenu>*/}
            {/*    <IconMenu />*/}
            {/*</ButtonMenu>*/}
        </Container>
    );
};

export default BarberHeader;