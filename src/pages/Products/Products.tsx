import { IProduct } from "../../App";
import { ProductList, ProductListItem } from "./Products.elements";

interface IProps {
  products: IProduct[] | undefined;
  // addItemToCart: () => void;
  addItemToCart: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Products: React.FC<IProps> = ({
  products,
  addItemToCart,
}): JSX.Element => {
  return (
    <div>
      <ProductList>
        {products
          ? products.map((product) => (
              <ProductListItem
                data-id={product.id}
                key={product.id}
                onClick={addItemToCart}
              >
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
