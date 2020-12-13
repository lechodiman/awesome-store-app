import axios from 'axios';
import { useMutation } from 'react-query';
import environment from '../../utils/environment';

type UpdateProductParams = {
  formData: FormData;
  productId: string;
};

const updateProduct = async ({ formData, productId }: UpdateProductParams) => {
  const { data } = await axios.post(
    `${environment.API_BASE_URL}/products/${productId}`,
    formData
  );

  return data;
};

const useUpdateProduct = () => {
  return useMutation(updateProduct);
};

export default useUpdateProduct;
