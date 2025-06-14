'use client'
import React, { useState, type ReactNode } from 'react'

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function handleAddToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>

      {children}
    </div>
  )
}
