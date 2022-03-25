import { IProduct } from "../../App";
import {
  ProductHeader,
  ProductList,
  ProductListItem,
  ImageWrapper,
} from "./Products.elements";
import { Button } from "../../Components";

interface IProps {
  products: IProduct[] | undefined;
  // addItemToCart: () => void;
  // addItemToCart: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  addItemToCart: (clickedItem: IProduct) => void;
}

const Products: React.FC<IProps> = ({
  products,
  addItemToCart,
}): JSX.Element => {
  return (
    <>
      <ProductHeader>
        <h2>Print gallery</h2>
      </ProductHeader>
      <ProductList>
        {products
          ? products.map((product) => (
              <ProductListItem
                // data-id={product.id}
                key={product.id}
              >
                <ImageWrapper>
                  <img
                    src="/images/hunros-2.jpeg"
                    // src={product.url}
                    alt={`${product.title} by ${product.artist}`}
                  />
                </ImageWrapper>
                <div>
                  <h2>{product.title}</h2>
                  <h2>by {product.artist}</h2>
                  <p>£{product.price}</p>
                  <Button onClick={() => addItemToCart(product)}>
                    Add to cart
                  </Button>
                </div>
              </ProductListItem>
            ))
          : "Failed to load products"}
      </ProductList>
    </>
  );
};

export default Products;
