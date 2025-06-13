import React from "react";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { stripe } from "../lib/stripe";
import Image from "next/image";
import Stripe from "stripe";
import Head from "next/head";

export default function SuccessCheckout({
  customerName,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const totalWidth = products.length * 128 - (products.length - 1) * 64;
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        {/* meta tag que pede para os crawlers do google para não indexar a página no google */}
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <div className="products-container">
          <ul style={{ width: `${totalWidth}px` }}>
            {products.map((product, i) => {
              const offset = i * 64;
              return (
                <ImageContainer
                  key={product.name}
                  style={{ left: `-${offset}px` }}
                >
                  <Image
                    src={product.imageUrl}
                    width={120}
                    height={110}
                    alt={product.name}
                  />
                </ImageContainer>
              );
            })}
          </ul>
        </div>
        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{" "}
          {products.length === 1 ? "camiseta" : "camisetas"} já está a caminho
          da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const sessionId = query.session_id;

  if (!sessionId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(String(sessionId), {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const products = session.line_items?.data.map(
    (item) => item.price?.product
  ) as Stripe.Product[];

  return {
    props: {
      customerName: session.customer_details?.name || "",
      products: products.map((item) => ({
        name: item.name,
        imageUrl: item.images[0],
      })),
    },
  };
};
