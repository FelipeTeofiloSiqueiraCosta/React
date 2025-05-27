import { stripe } from "@/src/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
  };
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={"Camiseta X"}
          width={520}
          height={480}
        />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
// -- Spoiler --
// export const getStaticPaths = (async () => {
//   const response = await stripe.products.list();
//   const products = response.data;

//   const paths = products.map((product) => {
//     return {
//       params: { id: product.id },
//     };
//   });
//   return {
//     paths,
//     fallback: true, // false or "blocking"
//   };
// }) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const productId = params!.id;

  const response = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = response.default_price as Stripe.Price;

  const product = {
    id: response.id,
    name: response.name,
    description: response.description ?? "",
    imageUrl: response.images[0],
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
