import { VerticalDivider, HorizontalDivider } from "../../components/index";
import {
  ProductInfo,
  ProductImages,
  ProductHeader,
  ProductDetails,
  Detail,
  ProductAction,
} from "./Product.elements";

const Product = () => {
  return (
    <>
      <ProductInfo>
        <ProductHeader>
          <h2>Nmae of Piece</h2>
          <h2>from Exhibition X</h2>
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
          <Detail>
            <div>Details:</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                voluptatem placeat pariatur. Ducimus, odit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, sapiente.
              </p>
            </div>
          </Detail>
          <HorizontalDivider />
        </ProductDetails>
        <ProductAction>Quantity and call to action</ProductAction>
      </ProductInfo>
      <VerticalDivider />
      <ProductImages />
    </>
  );
};

export default Product;
