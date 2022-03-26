import { useContext } from 'react';
import { CartContext, CartData } from '../context/CartContext';

export function useCartContext(): CartData {
  const {
    handleProductList,
    handleAddProductAmount,
    handleRemoveProductAmount,
    handleRemoveProduct,
    productList,
    CART_TOTAL_PRICE,
  } = useContext(CartContext);

  return {
    handleProductList,
    handleAddProductAmount,
    handleRemoveProductAmount,
    handleRemoveProduct,
    productList,
    CART_TOTAL_PRICE,
  };
}
