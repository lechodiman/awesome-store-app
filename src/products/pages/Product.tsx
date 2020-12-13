import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

const Product = () => {
  return (
    <div>
      <Nav></Nav>

      <Header>
        <Header.Title>Zapatilllas</Header.Title>
        <Stack direction="row" spacing="3">
          <Button colorScheme="red" variant="ghost">
            Eliminar
          </Button>
          <Button colorScheme="purple">Editar</Button>
        </Stack>
      </Header>
    </div>
  );
};

export default Product;
