import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
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
  Textarea,
  VisuallyHidden,
  useToast,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useCreateProduct from '../mutations/useCreateProduct';

type ProductModalFormProps = {
  isOpen?: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  price: string;
  description: string;
  imageFile: FileList;
  brand: string;
};

const ProductModalForm: React.FC<ProductModalFormProps> = ({
  isOpen = false,
  onClose,
}) => {
  const toast = useToast();

  const { register, handleSubmit, formState } = useForm<FormValues>();

  const [createProduct] = useCreateProduct();

  const onSubmit: SubmitHandler<FormValues> = async ({
    description,
    imageFile,
    name,
    brand,
    price,
  }) => {
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('brand', brand);
      formData.append('image', imageFile[0]);

      await createProduct({ formData });

      toast({
        title: 'Producto creado.',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Hubo un error. Intente más tarde',
        status: 'error',
        isClosable: true,
      });
    } finally {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Nuevo Producto</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Stack spacing="1">
              <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                <Input name="name" ref={register}></Input>
              </FormControl>

              <FormControl id="name">
                <FormLabel>Marca</FormLabel>
                <Input name="brand" ref={register}></Input>
              </FormControl>

              <FormControl id="price">
                <FormLabel>Precio</FormLabel>
                <NumberInput>
                  <NumberInputField
                    name="price"
                    ref={register}
                  ></NumberInputField>
                  <NumberInputStepper>
                    <NumberIncrementStepper></NumberIncrementStepper>
                    <NumberDecrementStepper></NumberDecrementStepper>
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl id="description">
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  name="description"
                  ref={register}
                  placeholder="Una breve descripción del producto."
                ></Textarea>
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
                          name="imageFile"
                          accept="image/*"
                          ref={register}
                        />
                      </VisuallyHidden>
                    </Box>
                  </Stack>
                </Box>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              isLoading={formState.isSubmitting}
              type="submit"
              ml="3"
              colorScheme="purple"
            >
              Crear
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ProductModalForm;
