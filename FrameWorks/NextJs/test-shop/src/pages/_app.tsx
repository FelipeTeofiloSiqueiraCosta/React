import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImage from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import "keen-slider/keen-slider.min.css";
import { CartProvider } from "use-shopping-cart";
import { Handbag } from "../ui/handbag";
import { ShoppingBagSidebar } from "../ui/shoppingBagSidebar";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/cancel"
      currency="BRL"
      allowedCountries={["BR"]}
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image src={logoImage} alt="logo" />
          <Handbag />
        </Header>
        <ShoppingBagSidebar />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
