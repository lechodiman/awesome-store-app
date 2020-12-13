import React from 'react';
import { Box, Image, Center, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box as="nav" bgColor="gray.800">
      <Box maxWidth="6xl" mx="auto" px="4">
        <Center h="16">
          <Flex alignItems="center">
            <Link to="/">
              <Image
                h="8"
                w="8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="workflow"
              ></Image>
            </Link>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};

export default Nav;
