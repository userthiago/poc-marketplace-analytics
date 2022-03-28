import { useContext } from 'react';
import { CartContext, CartData } from '../context/CartContext';

export function useCartContext(): CartData {
  const {
    isLoading,
    handleProductList,
    handleAddProductAmount,
    handleRemoveProductAmount,
    handleRemoveProduct,
    handleFinishPurchase,
    productList,
    CART_TOTAL_PRICE,
  } = useContext(CartContext);

  return {
    isLoading,
    handleProductList,
    handleAddProductAmount,
    handleRemoveProductAmount,
    handleRemoveProduct,
    handleFinishPurchase,
    productList,
    CART_TOTAL_PRICE,
  };
}
