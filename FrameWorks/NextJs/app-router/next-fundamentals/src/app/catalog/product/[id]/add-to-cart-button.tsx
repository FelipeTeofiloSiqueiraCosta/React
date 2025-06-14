'use client'
import React, { useState } from 'react'

export function AddToCartButton() {
  const [count, setCount] = useState(0)

  function handleAddToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  )
}
