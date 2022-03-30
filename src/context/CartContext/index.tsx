/* eslint-disable implicit-arrow-linebreak */
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { toast } from 'react-toastify';

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  amount: number;
  price: number;
};

export interface CartData {
  productList: ProductData[];
  CART_TOTAL_PRICE: number;
  isLoading: boolean;
  handleProductList: (product: ProductData) => void;
  handleAddProductAmount: (id: string) => void;
  handleRemoveProductAmount: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  handleFinishPurchase: () => void;
}

export const CartContext = createContext({} as CartData);

const CartContextProvider: React.FC = ({ children, ...props }) => {
  const [productList, setProductList] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const toastId = useRef(null);

  const CART_TOTAL_PRICE = useMemo(
    () =>
      productList
        .map((product) => product.price * product.amount)
        .reduce((totalPrice, productPrice) => totalPrice + productPrice, 0),
    [productList],
  );

  const handleAddProductAmount = useCallback(
    (id: string) => {
      const productListCopy = [...productList];

      const productIndex = productListCopy.findIndex(
        (product) => product.id === id,
      );

      if (productIndex >= 0) {
        productListCopy[productIndex] = {
          ...productListCopy[productIndex],
          amount: (productListCopy[productIndex].amount += 1),
        };
      }

      setProductList(productListCopy);
    },
    [productList],
  );

  const handleRemoveProductAmount = useCallback(
    (id: string) => {
      const productListCopy = [...productList];

      const productIndex = productListCopy.findIndex(
        (product) => product.id === id,
      );

      if (
        productListCopy[productIndex] &&
        productListCopy[productIndex].amount === 1
      ) {
        productListCopy.splice(productIndex, 1);
      } else if (productListCopy[productIndex]) {
        productListCopy[productIndex] = {
          ...productListCopy[productIndex],
          amount: (productListCopy[productIndex].amount -= 1),
        };
      }

      setProductList(productListCopy);
    },
    [productList],
  );

  const handleFinishPurchase = () => {
    setLoading(true);
    toastId.current = toast(
      'Aguarde um momento, estamos finalizando a sua compra...',
      {
        theme: 'dark',
        type: toast.TYPE.INFO,
        closeButton: false,
        closeOnClick: false,
        autoClose: false,
        draggable: false,
        position: 'bottom-right',
      },
    );

    setTimeout(() => {
      setProductList([]);
      toast.update(toastId.current, {
        render: 'Sua compra foi realizada com sucesso! :)',
        theme: 'colored',
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
        closeButton: true,
        closeOnClick: true,
        draggable: true,
        position: 'bottom-right',
      });
      setLoading(false);
    }, 5000);
  };

  const handleRemoveProduct = useCallback(
    (id: string) => {
      const productListCopy = [...productList];

      const productIndex = productListCopy.findIndex(
        (product) => product.id === id,
      );

      if (productListCopy[productIndex]) {
        productListCopy.splice(productIndex, 1);
      }

      setProductList(productListCopy);
    },
    [productList],
  );

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

  const cartContextValue = useMemo(
    () => ({
      productList,
      isLoading,
      handleProductList,
      handleAddProductAmount,
      handleRemoveProductAmount,
      handleRemoveProduct,
      handleFinishPurchase,
      CART_TOTAL_PRICE,
    }),
    [
      productList,
      handleProductList,
      CART_TOTAL_PRICE,
      isLoading,
      handleFinishPurchase,
    ],
  );

  return (
    <CartContext.Provider value={cartContextValue} {...props}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
