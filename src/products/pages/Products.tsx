import React, { useState } from 'react';
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Nav from '../../components/Nav';
import CreateProductButton from '../components/CreateProductButton';
import ProductCard from '../components/ProductCard';
import useProducts from '../queries/useProducts';
import { SearchIcon } from '@chakra-ui/icons';

const Products = () => {
  const [search, setSearch] = useState('');
  const { data: products, isLoading } = useProducts(search);

  return (
    <div>
      <Nav />

      <Header>
        <Header.Title>Productos</Header.Title>
        <Stack ml="2" direction="row" spacing="2">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busca productos"
            />
          </InputGroup>
          <CreateProductButton>Crear</CreateProductButton>
        </Stack>
      </Header>

      <MainContent>
        {isLoading ? (
          <Center>
            <Spinner color="purple.500" size="lg"></Spinner>
          </Center>
        ) : (
          <SimpleGrid gap="5" maxW="full" columns={{ md: 2, lg: 3 }}>
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.productId} />
              ))}
          </SimpleGrid>
        )}
      </MainContent>
    </div>
  );
};
export default Products;
