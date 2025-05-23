import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },

      slides: {
        perView: () => 2,
        spacing: 48,
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={520}
              height={480}
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      price: price.unit_amount ? price.unit_amount / 100 : 0,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      products,
    },
  };
};
