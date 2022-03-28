/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/indent */
import { NextApiRequest, NextApiResponse } from 'next';

import { query as q } from 'faunadb';
import { fauna } from '../../services/fauna';

const productsRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const products = await fauna.query(
      q.Select(
        ['data'],
        q.Map(
          q.Paginate(q.Documents(q.Collection('products'))),
          q.Lambda((product) => q.Select(['data'], q.Get(product))),
        ),
      ),
    );

    res.status(200).json(products);
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method not allowed');
  }
};

export default productsRoute;
