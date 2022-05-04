import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart, useProducts } from "../../Hooks";

import {
  VerticalDivider,
  HorizontalDivider,
  Button,
  Image,
} from "../../Components";
import { Main } from "../../Layout";
import { Grid, Wrapper } from "../../Utils";
import {
  ProductInfo,
  ProductImages,
  ProductHeader,
  ProductDetails,
  Detail,
  Action,
  H2,
  Text,
} from "./styled";
import { Quantity } from "../../Components";
import { IProduct } from "../../Interfaces";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

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
      return prev < product.inStock ? prev + 1 : prev;
    });
  };

  return product ? (
    <Main>
      <Wrapper>
        <Grid style={{ height: `calc(100vh - var(--header))` }}>
          <ProductInfo>
            <ProductHeader>
              <H2>{product.title}</H2>
              <H2>from {product.exhibition}</H2>
              <Text>£{product.price}</Text>
            </ProductHeader>
            <ProductDetails>
              <Detail>
                <Text>Artist:</Text>
                <Text>{product.artist}</Text>
              </Detail>
              <Detail>
                <Text>Year:</Text>
                <Text>{product.year}</Text>
              </Detail>
              <Detail>
                <Text>Dimensions:</Text>
                <Text>{product.dimensions}</Text>
              </Detail>
              <Detail paddingBottom>
                <Text>Edition:</Text>
                <Text>{product.edition}</Text>
              </Detail>
              <HorizontalDivider position="relative" />
              <Detail paddingTop>
                <Text>Details:</Text>
                <Text>
                  {" "}
                  {product.details
                    ? product.details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                      ))
                    : ""}
                </Text>
              </Detail>
            </ProductDetails>
            <Action>
              <Quantity
                quantity={quantity}
                handleReduceQuantity={handleReduceQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
              />
              <Button onClick={() => addToCart(product, quantity)}>
                Add to cart
              </Button>
            </Action>
          </ProductInfo>
          <VerticalDivider center />
          <ProductImages>
            {product.images
              ? product.images.map((image, index) => (
                  <Image key={index} product={product} url={image} />
                ))
              : ""}
          </ProductImages>
        </Grid>
      </Wrapper>
    </Main>
  ) : (
    <>Loading</>
  );
};

export default Product;
