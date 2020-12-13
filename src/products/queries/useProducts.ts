import axios from 'axios';
import { useQuery } from 'react-query';
import environment from '../../utils/environment';

type FetchProductsParams = {
  search?: string;
};

const fetchProducts = async ({ search }: FetchProductsParams) => {
  const { data } = await axios.get(`${environment.API_BASE_URL}/products`, {
    params: {
      search,
    },
  });

  return data;
};

const useProducts = (search: string) => {
  const query = useQuery('products', () => fetchProducts({ search }));

  return query;
};

export default useProducts;
