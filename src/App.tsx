import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import './App.css';

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();

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
          <Flex justify="space-between">
            <Heading
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.900"
              size="lg"
            >
              Productos
            </Heading>
            <Button colorScheme="purple" onClick={onOpen}>
              Crear
            </Button>
          </Flex>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Nuevo Producto</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <form>
              <Stack spacing="2">
                <FormControl id="name">
                  <FormLabel>Nombre</FormLabel>
                  <Input></Input>
                </FormControl>

                <FormControl id="price">
                  <FormLabel>Precio</FormLabel>
                  <NumberInput>
                    <NumberInputField></NumberInputField>
                    <NumberInputStepper>
                      <NumberIncrementStepper></NumberIncrementStepper>
                      <NumberDecrementStepper></NumberDecrementStepper>
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl id="description">
                  <FormLabel>Descripción</FormLabel>
                  <Textarea placeholder="Una breve descripción del producto."></Textarea>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="file-upload">Imagen</FormLabel>
                  <Box
                    d="flex"
                    justifyContent="center"
                    px="6"
                    pt="5"
                    pb="6"
                    border="2px"
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderRadius="md"
                  >
                    <Stack spacing="1" textAlign="center">
                      <Box
                        as="svg"
                        mx="auto"
                        h="12"
                        w="12"
                        color="gray.400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Box>
                      <Box
                        d="flex"
                        fontSize="sm"
                        color="gray.600"
                        alignItems="baseline"
                      >
                        <FormLabel
                          cursor="pointer"
                          color="purple.500"
                          htmlFor="file-upload"
                          mr="1"
                        >
                          Sube una imágen
                        </FormLabel>
                        <Text fontSize="xs">o arrastra y suelta acá.</Text>
                        <VisuallyHidden>
                          <input
                            type="file"
                            id="file-upload"
                            name="file-upload"
                          />
                        </VisuallyHidden>
                      </Box>
                    </Stack>
                  </Box>
                </FormControl>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button ml="3" colorScheme="purple" onClick={onClose}>
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
