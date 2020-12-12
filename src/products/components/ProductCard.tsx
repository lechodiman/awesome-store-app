import React from 'react';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';

const ProductCard = () => {
  const product = {
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    productId: 'some-id',
    brand: 'Nike',
    name: 'Zapatillas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    price: '2.000',
  };

  return (
    <Box
      d="flex"
      flexDir="column"
      borderRadius="lg"
      shadow="lg"
      overflow="hidden"
    >
      <Box flexShrink="revert">
        <Image
          h="48"
          w="full"
          objectFit="cover"
          src={product.imageUrl}
          alt={product.name}
        ></Image>
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
            <Link>{product.brand}</Link>
          </Text>
          <Link d="block" _hover={{ textDecor: 'none' }}>
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
