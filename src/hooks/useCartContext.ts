import { useContext } from 'react';
import { CartContext, CartData } from '../context/CartContext';

export function useCartContext(): CartData {
  const { handleProductList, productList } = useContext(CartContext);

  return { handleProductList, productList };
}
