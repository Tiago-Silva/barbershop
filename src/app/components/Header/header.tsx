'use client';

import React from 'react';
import {ButtonMenu, Container, IconMenu} from "@/app/components/Header/styles";
import Image from "next/image";

const Header = () => {
    return (
        <Container>
            <Image
                src='/logo-barber.png'
                alt='BarberShopping'
                width={200}
                height={45}
            />

            <ButtonMenu>
                <IconMenu />
            </ButtonMenu>
        </Container>
    );
};

export default Header;