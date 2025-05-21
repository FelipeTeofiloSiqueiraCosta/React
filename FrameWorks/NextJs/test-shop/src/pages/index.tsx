import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/Shirt1.png";
import shirt2 from "../assets/Shirt2.png";
import shirt3 from "../assets/Shirt3.png";
import { useKeenSlider } from "keen-slider/react";

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },

      slides: {
        perView: () => 1.85,
        spacing: 48,
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="Camiseta 1" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="Camiseta 2" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="Camiseta 3" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
