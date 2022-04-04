import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Services";

import { IProduct } from "../../Interfaces";
import {
  ProductHeader,
  ProductList,
  ProductListItem,
  ImageWrapper,
} from "./Products.elements";
import { Button } from "../../Components";
import { Main } from "../../Layout";
import { CartContext } from "../../Contexts";

interface IProps {
  products: IProduct[] | undefined;
}

const Products: React.FC<IProps> = ({ products }): JSX.Element => {
  const { addToCart } = useCart();

  return (
    <Main>
      <ProductHeader>
        <h2>(Prints)</h2>
      </ProductHeader>
      <ProductList>
        {products
          ? products.map((product, index: number) => (
              <ProductListItem
                // data-id={product.id}
                key={product._id}
              >
                <Link to={`/products/${product._id}`}>
                  {/* <Link to={`/${product._id}`}> */}
                  <ImageWrapper>
                    <img
                      // src="/images/hunros-2.jpeg"
                      src={`/images/print-${index + 1}/2.jpeg`}
                      // src={product.url}
                      alt={`${product.title} by ${product.artist}`}
                    />
                  </ImageWrapper>
                  <div>
                    <h2>{product.title}</h2>
                    <h2>by {product.artist}</h2>
                    <p>£{product.price}</p>
                  </div>
                </Link>
                <Button onClick={() => addToCart(product)}>Add to cart</Button>
              </ProductListItem>
            ))
          : "Failed to load products"}
      </ProductList>
    </Main>
  );
};

export default Products;
