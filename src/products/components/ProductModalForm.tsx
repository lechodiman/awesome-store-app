import React, { useEffect } from 'react';
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
import { Product } from '../../entities/Product';

type ProductModalFormProps = {
  isOpen?: boolean;
  onClose: () => void;
  title: string;
  initialValues?: Partial<
    Pick<Product, 'brand' | 'name' | 'description' | 'price'>
  >;
  onSubmit: (formData: FormData) => Promise<void>;
};

export type FormValues = Partial<
  Pick<Product, 'brand' | 'name' | 'description' | 'price'>
> & {
  imageFile?: FileList;
};

const ProductModalForm: React.FC<ProductModalFormProps> = ({
  isOpen = false,
  onClose,
  children,
  onSubmit: tellParentToSubmit,
  title,
  initialValues,
}) => {
  const toast = useToast();

  const { register, handleSubmit, watch, reset } = useForm<FormValues>();

  useEffect(() => {
    reset({ ...initialValues });
  }, [reset, initialValues]);

  const imageFileInputValue = watch('imageFile');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (!value) {
          return;
        }
        if (value instanceof FileList) {
          formData.append('image', value[0]);
        } else {
          formData.append(key, value.toString());
        }
      });

      await tellParentToSubmit(formData);
    } catch (error) {
      toast({
        title:
          'Hubo un error. Verifique que los datos ingresados esten correctos.',
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
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Stack spacing="1">
              <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                <Input
                  name="name"
                  ref={register({ required: !initialValues })}
                ></Input>
              </FormControl>

              <FormControl id="name">
                <FormLabel>Marca</FormLabel>
                <Input
                  name="brand"
                  ref={register({ required: !initialValues })}
                ></Input>
              </FormControl>

              <FormControl id="price">
                <FormLabel>Precio</FormLabel>
                <NumberInput>
                  <NumberInputField
                    name="price"
                    ref={register({ required: !initialValues })}
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
                  ref={register({ required: !initialValues })}
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
                      <VisuallyHidden>
                        <input
                          type="file"
                          id="file-upload"
                          name="imageFile"
                          accept="image/*"
                          ref={register({ required: !initialValues })}
                        />
                      </VisuallyHidden>
                    </Box>
                    {imageFileInputValue && imageFileInputValue?.length > 0 && (
                      <Text color="gray.900" fontSize="xs">
                        {imageFileInputValue[0].name}
                      </Text>
                    )}
                  </Stack>
                </Box>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            {children}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ProductModalForm;
