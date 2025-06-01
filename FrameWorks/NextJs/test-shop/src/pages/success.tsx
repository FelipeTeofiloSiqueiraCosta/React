import React from "react";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";

export default function SuccessCheckout() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer></ImageContainer>

      <p>
        Uma camiseta <strong>Camiseta X</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
