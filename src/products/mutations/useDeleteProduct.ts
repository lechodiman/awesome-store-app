import axios from 'axios';
import { useMutation, useQueryCache } from 'react-query';
import { Product } from '../../entities/Product';
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
  const queryCache = useQueryCache();
  return useMutation(deleteProduct, {
    onMutate: ({ productId }) => {
      queryCache.cancelQueries('products');

      const oldProducts = queryCache.getQueryData('products');

      queryCache.setQueryData<Product[]>('products', (products = []) =>
        products.filter((product) => product.productId !== productId)
      );

      return () => queryCache.setQueryData('products', oldProducts);
    },
    onError: (error, values, rollback: () => void) => {
      rollback();
    },
    onSettled: () => {
      queryCache.invalidateQueries('products');
    },
  });
};

export default useDeleteProduct;
