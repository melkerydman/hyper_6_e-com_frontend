import { IState as Props } from "../../App";
import { ProductList, ProductListItem } from "./Producs.elements";

interface IProps {
  products: Props["product"][] | undefined;
}

const Products: React.FC<IProps> = ({ products }): JSX.Element => {
  return (
    <div>
      <ProductList>
        {products
          ? products.map((product) => (
              <ProductListItem>{product.title}</ProductListItem>
            ))
          : "Failed to load products"}
      </ProductList>
    </div>
  );
};

export default Products;
