import {
  Button,
  Center,
  SimpleGrid,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Nav from '../../components/Nav';
import ProductCard from '../components/ProductCard';
import ProductModalForm from '../components/ProductModalForm';
import useProducts from '../queries/useProducts';

const Products = () => {
  const { data: products, isLoading } = useProducts();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div>
      <Nav></Nav>

      <Header>
        <Header.Title>Productos</Header.Title>
        <Button colorScheme="purple" onClick={onOpen}>
          Crear
        </Button>
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
                <ProductCard
                  product={product}
                  key={product.productId}
                ></ProductCard>
              ))}
          </SimpleGrid>
        )}
      </MainContent>
      <ProductModalForm onClose={onClose} isOpen={isOpen}></ProductModalForm>
    </div>
  );
};
export default Products;
