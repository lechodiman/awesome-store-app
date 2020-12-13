import axios from 'axios';
import { useMutation } from 'react-query';
import environment from '../../utils/environment';

const updateProduct = async () => {
  const { data } = await axios.post(`${environment.API_BASE_URL}/products`, {});

  return data;
};

const useUpdateProduct = () => {
  return useMutation(updateProduct);
};

export default useUpdateProduct;
