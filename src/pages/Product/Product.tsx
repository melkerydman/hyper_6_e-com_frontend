import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart, useProducts } from "../../Hooks";

import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { Main } from "../../Layout";
import { Grid, Wrapper } from "../../Utils";
import {
  ProductInfo,
  ProductImages,
  ProductHeader,
  ProductDetails,
  Detail,
  Action,
  MoreProducts,
} from "./Product.elements";
import { Quantity } from "../../Components/";
import { IProduct } from "../../Interfaces";

const Product: React.FC = (): JSX.Element => {
  const { addToCart } = useCart();
  const { getProductById } = useProducts();
  const params = useParams();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (!params.id) return;
    getProductById(params.id)
      .then((product) => setProduct(product))
      .catch((err) => console.error(err.message));
  }, [params.id]);

  const handleReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      console.log("prev: ", prev);
      console.log("items in stock: ", product.inStock);
      return prev < product.inStock ? prev + 1 : prev;
    });
  };

  return product ? (
    <Main>
      <Wrapper>
        <Grid>
          <ProductInfo>
            <ProductHeader>
              <h2>{product.title}</h2>
              {/* <h2>from {product.exhibition}</h2> */}
              <h2>by {product.artist}</h2>
              <div>£{product.price}</div>
            </ProductHeader>
            <ProductDetails>
              <Detail>
                <div>Year:</div>
                <div>{product.year}</div>
              </Detail>
              <Detail>
                <div>Dimensions:</div>
                <div>{product.dimensions}</div>
              </Detail>
              <Detail>
                <div>Edition:</div>
                <div>{product.edition}</div>
              </Detail>
              <Detail top>
                <div>Details:</div>
                <div>{product.details}</div>
              </Detail>
              <HorizontalDivider />
            </ProductDetails>
            <Action>
              <Quantity
                quantity={quantity}
                handleReduceQuantity={handleReduceQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
              />
              <Button
                // onClick={() => {
                //   setQuantity(1);
                // }}
                onClick={() => addToCart(product, quantity)}
              >
                Add to cart
              </Button>
            </Action>
          </ProductInfo>
          <VerticalDivider center />
          <ProductImages>
            <img src="/images/print-2/1.jpeg" alt="" />
            <img src="/images/print-2/2.jpeg" alt="" />
            <img src="/images/print-2/3.jpeg" alt="" />
            <img src="/images/hunros-4.jpeg" alt="" />
            <img src="/images/hunros-5.jpeg" alt="" />
          </ProductImages>
        </Grid>
        <HorizontalDivider />
      </Wrapper>
      <MoreProducts>More products</MoreProducts>
    </Main>
  ) : (
    <>Loading</>
  );
};

export default Product;
