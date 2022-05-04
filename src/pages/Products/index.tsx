import { Link } from "react-router-dom";
import { useCart } from "../../Hooks";

import { IProduct } from "../../Interfaces";
import {
  ProductHeader,
  ProductList,
  ProductListItem,
  ImageWrapper,
} from "./styled";
import { Button, Image } from "../../Components";
import { Main } from "../../Layout";

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
          ? products.map((product) => (
              <ProductListItem key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <Image product={product} url={product.images[0]} />
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
