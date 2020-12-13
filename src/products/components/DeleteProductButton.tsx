import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useDeleteProduct from '../mutations/useDeleteProduct';

type DeleteProductButtonProps = {
  productId: string;
};

const DeleteProductButton: React.FC<DeleteProductButtonProps> = ({
  children,
  productId,
}) => {
  const [deleteProduct, { isLoading }] = useDeleteProduct();
  const toast = useToast();
  const history = useHistory();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        colorScheme="red"
        variant="ghost"
        isLoading={isLoading}
        onClick={() => {
          onOpen();
        }}
      >
        {children}
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Borrar producto
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro? No podrás deshacer esta desición después.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteProduct({ productId });
                  toast({
                    title: 'Producto eliminado',
                    status: 'success',
                    isClosable: true,
                  });
                  onClose();
                  history.push('/');
                }}
                ml={3}
              >
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteProductButton;
