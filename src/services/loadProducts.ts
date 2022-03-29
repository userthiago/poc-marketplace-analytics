import { query as q } from 'faunadb';
import { fauna } from './fauna';

export interface ProductData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  imageURL: string;
  value: number;
}

export const loadProducts = async () => {
  const products = await fauna.query<ProductData[]>(
    q.Select(
      ['data'],
      q.Map(
        q.Paginate(q.Documents(q.Collection('products'))),
        q.Lambda((product) => q.Select(['data'], q.Get(product))),
      ),
    ),
  );

  return products;
};
