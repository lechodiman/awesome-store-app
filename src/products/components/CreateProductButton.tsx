import React from 'react';
import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import useCreateProduct from '../mutations/useCreateProduct';
import ProductModalForm from './ProductModalForm';

type CreateProductButtonProps = {};

const CreateProductButton: React.FC<CreateProductButtonProps> = ({
  children,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const toast = useToast();

  const [createProduct, { isLoading }] = useCreateProduct();

  const handleSubmit = async (formData: FormData) => {
    await createProduct({ formData });

    toast({
      title: 'Producto creado.',
      status: 'success',
      isClosable: true,
    });
  };

  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>
        {children}
      </Button>

      <ProductModalForm
        title="Nuevo producto"
        onSubmit={handleSubmit}
        onClose={onClose}
        isOpen={isOpen}
      >
        <Button isLoading={isLoading} type="submit" ml="3" colorScheme="purple">
          Crear
        </Button>
      </ProductModalForm>
    </>
  );
};

export default CreateProductButton;
