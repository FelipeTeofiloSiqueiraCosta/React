import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/Shirt1.png";
import shirt2 from "../assets/Shirt2.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="Camiseta 1" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} alt="Camiseta 2" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
