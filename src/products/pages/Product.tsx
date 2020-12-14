import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Spinner,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Nav from '../../components/Nav';
import useProduct from '../queries/useProduct';
import { Link as RouterLink } from 'react-router-dom';
import DeleteProductButton from '../components/DeleteProductButton';
import useUpdateProduct from '../mutations/useUpdateProduct';
import ProductModalForm from '../components/ProductModalForm';

type ProductPageParams = {
  productId: string;
};

const Product = () => {
  const { productId } = useParams<ProductPageParams>();
  const { data: product, isLoading } = useProduct(productId);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const toast = useToast();

  const [updateProduct, { isLoading: isUpdating }] = useUpdateProduct();

  const handleUpdateProduct = async (formData: FormData) => {
    await updateProduct({ formData, productId });

    toast({
      title: 'Producto actualizado',
      status: 'success',
      isClosable: true,
    });
  };

  return (
    <div>
      <Nav></Nav>

      <Header>
        <Header.Title>{product?.name}</Header.Title>
        <Stack direction="row" spacing="3">
          <DeleteProductButton productId={productId}>
            Eliminar
          </DeleteProductButton>
          <Button colorScheme="purple" onClick={onOpen}>
            Editar
          </Button>
        </Stack>
      </Header>

      <MainContent>
        {isLoading || !product ? (
          <Center>
            <Spinner color="purple.500" size="lg"></Spinner>
          </Center>
        ) : (
          <>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/">
                  Productos
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{product.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <SimpleGrid mt="5" gap="10" columns={{ md: 2 }}>
              <Image
                src={product?.imageUrl}
                alt={product.name}
                objectFit="cover"
                w="full"
                maxH="340px"
              ></Image>
              <Box d="flex" flexDir="column">
                <Box flex="1">
                  <Text color="purple.500">{product.brand}</Text>
                  <Heading fontWeight="semibold" letterSpacing="7">
                    {product.name}
                  </Heading>
                  <Text mt="3" color="gray.500">
                    {product.description}
                  </Text>
                </Box>
                <Heading
                  mt="3"
                  color="gray.800"
                  fontWeight="semibold"
                  size="lg"
                >
                  $ {product.price}
                </Heading>
              </Box>
            </SimpleGrid>
          </>
        )}
      </MainContent>

      <ProductModalForm
        title="Actualizar producto"
        onSubmit={handleUpdateProduct}
        onClose={onClose}
        isOpen={isOpen}
        initialValues={product}
      >
        <Button
          isLoading={isUpdating}
          type="submit"
          ml="3"
          colorScheme="purple"
        >
          Actualizar
        </Button>
      </ProductModalForm>
    </div>
  );
};

export default Product;
