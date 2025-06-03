import React from "react";
import {
  ImageContainer,
  ShoppingBagSidebarContainer,
} from "../styles/ui/shoppingBagSidebar";

import Image from "next/image";
import closeIcon from "../assets/close.svg";
import { useShoppingCart } from "use-shopping-cart";

export function ShoppingBagSidebar() {
  const {
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    cartCount,
  } = useShoppingCart();

  const cartItems = Object.values(cartDetails || {});

  return (
    <ShoppingBagSidebarContainer isOpen={shouldDisplayCart}>
      <button className="close-button" onClick={handleCartClick}>
        <Image src={closeIcon} alt="Fechar sacola" width={24} height={24} />
      </button>
      <h1>Sacola de compras</h1>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <ImageContainer>
              <Image
                src={item.image || ""}
                width={94}
                height={94}
                alt={item.name}
              />
            </ImageContainer>

            <div>
              <h2>{item.name}</h2>
              <strong>
                {item.formattedPrice}{" "}
                <span>
                  x {item.quantity} = {(item.price / 100) * item.quantity}
                </span>
              </strong>
              <br />
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>

      <footer>
        <div>
          <span>Quantidade</span>
          <p>{cartCount} itens</p>
        </div>

        <div>
          <strong>Valor total</strong>
          <strong>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(totalPrice) / 100)}
          </strong>
        </div>
        <button disabled={cartCount === 0}>Finalizar compra</button>
      </footer>
    </ShoppingBagSidebarContainer>
  );
}
