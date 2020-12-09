import React from 'react';
import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div>
      <Box as="nav" bgColor="gray.800">
        <Box maxWidth="6xl" mx="auto" px="4">
          <Center h="16">
            <Flex alignItems="center">
              <Image
                h="8"
                w="8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="workflow"
              ></Image>
            </Flex>
          </Center>
        </Box>
      </Box>

      <Box as="header" bgColor="white" boxShadow="md">
        <Box maxWidth="6xl" mx="auto" py="6" px="4">
          <Heading
            fontWeight="bold"
            letterSpacing="tight"
            color="gray.900"
            size="lg"
          >
            Productos
          </Heading>
        </Box>
      </Box>

      <Box as="main">
        <Box maxWidth="6xl" mx="auto" py="6">
          <Box px="4" py="6">
            <Box
              border="4px"
              borderStyle="dashed"
              borderColor="gray.200"
              borderRadius="lg"
              h="96px"
            ></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
