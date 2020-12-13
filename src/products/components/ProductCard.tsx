import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Product } from '../../entities/Product';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Box
      d="flex"
      flexDir="column"
      borderRadius="lg"
      shadow="lg"
      overflow="hidden"
    >
      <Box flexShrink="revert">
        <RouterLink to={`/products/${product.productId}`}>
          <Image
            h="48"
            w="full"
            objectFit="cover"
            src={product.imageUrl}
            alt={product.name}
          ></Image>
        </RouterLink>
      </Box>

      <Box
        p="6"
        flex="1"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box flex="1">
          <Text size="sm" color="purple.500">
            {product.brand}
          </Text>
          <Link
            as={RouterLink}
            to={`/products/${product.productId}`}
            d="block"
            _hover={{ textDecor: 'none' }}
          >
            <Heading
              mt="2"
              letterSpacing="7"
              size="md"
              fontWeight="semibold"
              color="gray.900"
            >
              {product.name}
            </Heading>
            <Text mt="3" color="gray.500">
              {product.description}
            </Text>
          </Link>
        </Box>

        <Box mt="2">
          <Text fontSize="lg" color="gray.900" fontWeight="semibold">
            $ {product.price}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
