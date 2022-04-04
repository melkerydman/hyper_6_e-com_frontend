import { createContext, useState } from "react";
import { IProduct } from "../Interfaces";

const ProductContext = createContext<IState>({} as IState);

interface IState {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
