import { IProduct } from "../../Interfaces";
import { ImageWrapper } from "./styled";

interface IProps {
  product: IProduct;
  url: string;
}

const Image: React.FC<IProps> = ({ product, url }): JSX.Element => {
  return (
    <ImageWrapper>
      <img src={url} alt={`${product.title} by ${product.artist}`} />
    </ImageWrapper>
  );
};

export default Image;
