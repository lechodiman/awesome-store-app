import axios from 'axios';
import { useQuery } from 'react-query';
import { Product } from '../../entities/Product';
import environment from '../../utils/environment';

type FetchProductParams = {
  productId?: string;
};

const fetchProduct = async ({ productId }: FetchProductParams) => {
  const { data } = await axios.get<Product>(
    `${environment.API_BASE_URL}/products/${productId}`
  );

  return data;
};

const useProduct = (productId: string) => {
  const query = useQuery(
    ['products', productId],
    () => fetchProduct({ productId }),
    {
      enabled: productId,
    }
  );

  return query;
};

export default useProduct;
