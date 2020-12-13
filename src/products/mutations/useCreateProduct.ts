import axios from 'axios';
import { useMutation, useQueryCache } from 'react-query';
import environment from '../../utils/environment';

type CreateProductParams = {
  formData: FormData;
};

const createProduct = async ({ formData }: CreateProductParams) => {
  const { data } = await axios.post(
    `${environment.API_BASE_URL}/products`,
    formData
  );

  return data;
};

const useCreateProduct = () => {
  const queryCache = useQueryCache();
  return useMutation(createProduct, {
    onSettled: () => {
      queryCache.invalidateQueries('products');
    },
  });
};

export default useCreateProduct;
