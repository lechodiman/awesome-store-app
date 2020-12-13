import axios from 'axios';
import { useMutation } from 'react-query';
import environment from '../../utils/environment';

const createProduct = async () => {
  const { data } = await axios.post(`${environment.API_BASE_URL}/products`, {});

  return data;
};

const useCreateProduct = () => {
  return useMutation(createProduct);
};

export default useCreateProduct;
