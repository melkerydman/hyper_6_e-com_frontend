import { Link } from "react-router-dom";
import { IProduct } from "../../Interfaces";
import {
  ProductHeader,
  ProductInfo,
  ProductList,
  ProductListItem,
} from "./styled";
import { Image, Main } from "../../Components";

interface IProps {
  products: IProduct[] | undefined;
}

const Products: React.FC<IProps> = ({ products }): JSX.Element => {
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
                  <ProductInfo>
                    <h2>{product.title}</h2>
                    <h2>by {product.artist}</h2>
                    <h2>£{product.price}</h2>
                  </ProductInfo>
                </Link>
              </ProductListItem>
            ))
          : "Failed to load products"}
      </ProductList>
    </Main>
  );
};

export default Products;
