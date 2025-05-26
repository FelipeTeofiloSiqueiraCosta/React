import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id: productId } = router.query;
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={""} alt={"Camiseta X"} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X ({productId})</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
