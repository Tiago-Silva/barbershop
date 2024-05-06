import React from 'react';
import {Container, IconSearch, Input, SearchButton} from "@/app/components/InputSearch/styles";

const InputSearch = () => {
    return (
        <Container>
            <Input placeholder="Buscar" />
            <SearchButton>
                <IconSearch />
            </SearchButton>
        </Container>
    );
};

export default InputSearch;