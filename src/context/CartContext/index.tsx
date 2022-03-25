import React, { createContext, useCallback, useState } from 'react';

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  amount: number;
  price: number;
};

export interface CartData {
  // CART_TOTAL_VALUE: number;
  // PRODUCTS_AMOUNT: number;
  productList: ProductData[];
  handleProductList: (product: ProductData) => void;
}

export const CartContext = createContext({} as CartData);

const CartContextProvider: React.FC = ({ children, ...props }) => {
  const [productList, setProductList] = useState<ProductData[]>([]);

  const handleProductList = useCallback(
    (product: ProductData) => {
      const productListCopy = [...productList];

      const checkIfProductAlreadyExistIndex = productListCopy.findIndex(
        (productOnList) => productOnList.id === product.id,
      );

      if (checkIfProductAlreadyExistIndex >= 0) {
        productListCopy[checkIfProductAlreadyExistIndex] = {
          ...productListCopy[checkIfProductAlreadyExistIndex],
          amount: (productListCopy[
            checkIfProductAlreadyExistIndex
          ].amount += 1),
        };
      } else {
        productListCopy.push(product);
      }

      setProductList(productListCopy);
    },
    [productList],
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ productList, handleProductList }} {...props}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
