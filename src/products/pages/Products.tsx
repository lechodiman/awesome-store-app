import React from 'react';
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Nav from '../../components/Nav';
import CreateProductButton from '../components/CreateProductButton';
import ProductCard from '../components/ProductCard';
import useProducts from '../queries/useProducts';

const Products = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <div>
      <Nav />

      <Header>
        <Header.Title>Productos</Header.Title>
        <CreateProductButton>Crear</CreateProductButton>
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
