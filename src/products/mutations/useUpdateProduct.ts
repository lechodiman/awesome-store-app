import axios from 'axios';
import { useMutation, useQueryCache } from 'react-query';
import { Product } from '../../entities/Product';
import environment from '../../utils/environment';

type UpdateProductParams = {
  formData: FormData;
  productId: string;
};

const updateProduct = async ({ formData, productId }: UpdateProductParams) => {
  const { data } = await axios.put<Product>(
    `${environment.API_BASE_URL}/products/${productId}`,
    formData
  );

  return data;
};

const useUpdateProduct = () => {
  const queryCache = useQueryCache();
  return useMutation(updateProduct, {
    onSettled: (data) => {
      queryCache.invalidateQueries(['products', data?.productId]);
      queryCache.invalidateQueries('products');
    },
  });
};

export default useUpdateProduct;
