import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImage from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import "keen-slider/keen-slider.min.css";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
