import {
  VerticalDivider,
  HorizontalDivider,
  Button,
} from "../../components/index";
import { Main } from "../../layout/index";
import { Grid } from "../../utils/index";
import {
  ProductInfo,
  ProductImages,
  ProductHeader,
  ProductDetails,
  Detail,
  ProductAction,
  MoreProducts,
} from "./Product.elements";

const Product = () => {
  return (
    <Main>
      <div>
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
            <ProductAction>
              <Button>Add to cart</Button>
            </ProductAction>
          </ProductInfo>
          <VerticalDivider center />
          <ProductImages>
            <img src="/images/hunros-1.jpeg" alt="" />
            <img src="/images/hunros-2.jpeg" alt="" />
            <img src="/images/hunros-3.jpeg" alt="" />
            <img src="/images/hunros-4.jpeg" alt="" />
            <img src="/images/hunros-5.jpeg" alt="" />
            {/* <img src="../../../public/images/hunros-1.jpeg" alt="" />
            <img src="../../../public/images/hunros-1.jpeg" alt="" />
            <img src="../../../public/images/hunros-1.jpeg" alt="" />
            <img src="../../../public/images/hunros-1.jpeg" alt="" /> */}
          </ProductImages>
        </Grid>
      </div>
      <HorizontalDivider />
      <MoreProducts>More products</MoreProducts>
    </Main>
  );
};

export default Product;
