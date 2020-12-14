import axios from 'axios';
import { useQuery } from 'react-query';
import { Product } from '../../entities/Product';
import environment from '../../utils/environment';

type FetchProductsParams = {
  search?: string;
};

const fetchProducts = ({ search }: FetchProductsParams) => {
  const source = axios.CancelToken.source();

  const promise = new Promise((resolve) => setTimeout(resolve, 200))
    .then(() =>
      axios.get<Product[]>(`${environment.API_BASE_URL}/products`, {
        cancelToken: source.token,
        params: {
          search,
        },
      })
    )
    .then((result) => result.data);

  // React Query looks for a cancel method to cancel outdated queries
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
};

const useProducts = (search?: string) => {
  const queryKey = search ? ['search', search] : 'products';
  const query = useQuery(queryKey, () => fetchProducts({ search }));

  return query;
};

export default useProducts;
