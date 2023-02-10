import { Link } from "react-router-dom";
import { Wrapper } from "../../Components/Utility";
import { IProduct } from "../../Interfaces";
import { Main } from "../../Components";
import { Hero, H1, HeroImage } from "./styled";

const getRandomProduct = (arr: IProduct[]) => {
  if (arr.length === 0) return;

  const randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
};

interface IProps {
  products: IProduct[] | undefined;
}

const Home: React.FC<IProps> = ({ products }: any): JSX.Element => {
  const randomProduct = getRandomProduct(products);
  return (
    <Main>
      <Wrapper>
        <Hero>
          <H1>Explore the prints</H1>
          {randomProduct && (
            <Link to={`/products}`}>
              <HeroImage>
                <img
                  src={randomProduct.images[0]}
                  alt={`${randomProduct.title} by ${randomProduct.artist}`}
                />
              </HeroImage>
            </Link>
          )}
        </Hero>
      </Wrapper>
    </Main>
  );
};

export default Home;
