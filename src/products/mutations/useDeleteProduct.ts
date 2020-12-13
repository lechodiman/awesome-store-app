import axios from 'axios';
import { useMutation } from 'react-query';
import environment from '../../utils/environment';

type DeleteProductParams = {
  productId: string;
};

const deleteProduct = async ({ productId }: DeleteProductParams) => {
  const { data } = await axios.delete(
    `${environment.API_BASE_URL}/products/${productId}`
  );

  return data;
};

const useDeleteProduct = () => {
  return useMutation(deleteProduct);
};

export default useDeleteProduct;
