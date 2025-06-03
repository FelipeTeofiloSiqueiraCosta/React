import Image from "next/image";
import handBag from "../assets/Handbag.svg";
import { HandbagContainer } from "../styles/ui/handbag";
import { useShoppingCart } from "use-shopping-cart";

interface HandbagProps {
  color?: "default" | "green";
}

export function Handbag({ color }: HandbagProps) {
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <HandbagContainer
      color={color}
      onClick={handleCartClick}
      title={
        cartCount !== undefined && cartCount > 0
          ? "Abrir carrinho"
          : "Nenhum item no carrinho"
      }
    >
      <Image src={handBag} alt="handbag" height={24} width={24} />
      {cartCount !== undefined && cartCount > 0 && <strong>{cartCount}</strong>}
    </HandbagContainer>
  );
}
