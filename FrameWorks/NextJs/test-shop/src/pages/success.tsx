import React from "react";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Image from "next/image";
import Stripe from "stripe";

interface SuccessCheckoutProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function SuccessCheckout({
  customerName,
  product,
}: SuccessCheckoutProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          width={120}
          height={110}
          alt={product.name}
        />
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua{" "}
        <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps<
  SuccessCheckoutProps
> = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  const productName = product.name;

  const productImageUrl = product.images[0];

  return {
    props: {
      customerName: session.customer_details?.name || "",
      product: {
        name: productName,
        imageUrl: productImageUrl,
      },
    },
  };
};
