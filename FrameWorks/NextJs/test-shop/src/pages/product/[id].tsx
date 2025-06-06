import { stripe } from "@/src/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    price_unit_amount: number;
    priceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addItem } = useShoppingCart();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  async function handleAddToCart() {
    try {
      setIsAddingToCart(true);

      addItem({
        id: product.id,
        name: product.name,
        price_id: product.priceId,
        price: product.price_unit_amount,
        image: product.imageUrl,
        currency: "BRL",
      });

      setIsAddingToCart(false);
    } catch (error) {
      // conectar com uma ferramenta de monitoramento de erros como o Sentry ou Datadog
      console.log(error);
      setIsAddingToCart(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
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
          <button onClick={handleAddToCart} disabled={isAddingToCart}>
            {isAddingToCart ? "Carregando..." : "Colocar na sacola"}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths = (async () => {
  // nesse caso eu estou colocando limit igual a 2, mas poderia ser 50, 100 e etc
  // porque eu quero que o next gere uma página estática somente para os produtos mais acessados
  // e o resto fica para o next gerar conforme a demanda (conferme os usuarios forem acessando)
  const response = await stripe.products.list({
    limit: 2,
  });
  const products = response.data;

  const paths = products.map((product) => {
    return {
      params: { id: product.id },
    };
  });
  return {
    paths,
    // o fallback: false -> toda vez que o usuário acessar uma pagina que não está dentro de paths, o next vai retornar um 404
    // o fallback: true -> toda vez que o usuário acessar uma pagina que não está dentro de paths, o next vai pegar o id passado como parâmetro e tentar gerar a página estática. O grande ponde dessa forma de fazer é que a nossa página vai ser carregada mesmo que os dados não tenham sidos buscados ainda na nossa api (a função getStaticProps é executada ao mesmo tempo que o next apresenta nossa página), ou seja, pode acontecer de a nossa página ser carregada com dados faltando. Nesse caso teríamos que fazer um estado de loading, skeleton screen e etc. Para fazer isso é só usar: `const { isFallback } = useRouter();`
    // o fallback: "blocking" -> toda vez que o usuário acessar uma pagina que não está dentro de paths, o next não vai mostrar nada em tela, ele vai deixar a página em branco até ter os dados para mostrar.
    fallback: true,
  };
}) satisfies GetStaticPaths;

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
    price_unit_amount: price.unit_amount ?? 0,
    priceId: price.id,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
