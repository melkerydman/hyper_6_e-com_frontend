import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { Main } from "../../Layout";
import { Grid, Wrapper } from "../../Utils";
import {
  ProductInfo,
  ProductImages,
  ProductHeader,
  ProductDetails,
  Detail,
  Quantity,
  Action,
  MoreProducts,
} from "./Product.elements";

interface IProps {
  addItemToCart: () => void;
}

const Product: React.FC<IProps> = ({ addItemToCart }): JSX.Element => {
  return (
    <Main>
      <Wrapper>
        <Grid>
          <ProductInfo>
            <ProductHeader>
              <h2>Name of Piece</h2>
              <h2>from Exhibition</h2>
              <div>£100</div>
            </ProductHeader>
            <ProductDetails>
              <Detail>
                <div>Year:</div>
                <div>2022</div>
              </Detail>
              <Detail>
                <div>Dimensions:</div>
                <div>A3</div>
              </Detail>
              <Detail>
                <div>Edition:</div>
                <div>Limited of 10</div>
              </Detail>
              <Detail top>
                <div>Details:</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  voluptatem placeat pariatur. Ducimus, odit. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Dolore, sapiente.
                </div>
              </Detail>
              <HorizontalDivider />
            </ProductDetails>
            <Action>
              <Quantity>
                <div>-</div>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={1}
                  min="1"
                  max="5"
                ></input>
                <div>+</div>
              </Quantity>
              <Button onClick={() => addItemToCart()}>Add to cart</Button>
            </Action>
          </ProductInfo>
          <VerticalDivider center />
          <ProductImages>
            <img src="/images/hunros-1.jpeg" alt="" />
            <img src="/images/hunros-2.jpeg" alt="" />
            <img src="/images/hunros-3.jpeg" alt="" />
            <img src="/images/hunros-4.jpeg" alt="" />
            <img src="/images/hunros-5.jpeg" alt="" />
          </ProductImages>
        </Grid>
        <HorizontalDivider />
      </Wrapper>
      <MoreProducts>More products</MoreProducts>
    </Main>
  );
};

export default Product;
