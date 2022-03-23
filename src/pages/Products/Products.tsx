import { IState as Props } from "../../App";
import { ProductList, ProductListItem } from "./Products.elements";

interface IProps {
  products: Props["product"][] | undefined;
}

const Products: React.FC<IProps> = ({ products }): JSX.Element => {
  console.log("Products: ", products);

  return (
    <div>
      <ProductList>
        {products
          ? products.map((product) => (
              <ProductListItem>
                <img
                  src={product.url}
                  alt={`${product.title} by ${product.artist}`}
                />
                <div>
                  <p>{product.title}</p>
                  <p>by {product.artist}</p>
                  <p>£{product.price}</p>
                </div>
              </ProductListItem>
            ))
          : "Failed to load products"}
      </ProductList>
    </div>
  );
};

export default Products;
