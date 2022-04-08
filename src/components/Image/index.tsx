import { IProduct } from "../../Interfaces";
import { ImageWrapper } from "./styled";

interface IProps {
  product: IProduct;
  index: number;
}

const Image: React.FC<IProps> = ({ product, index }): JSX.Element => {
  return (
    <ImageWrapper>
      <img
        // src="/images/hunros-2.jpeg"
        src={`/images/print-${index + 1}/2.jpeg`}
        // src={product.url}
        alt={`${product.title} by ${product.artist}`}
      />
    </ImageWrapper>
  );
};

export default Image;
