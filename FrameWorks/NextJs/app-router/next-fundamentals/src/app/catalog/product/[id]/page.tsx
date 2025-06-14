import { AddToCartButton } from './add-to-cart-button'
import { TestClient } from './test'

export default async function Product({ params }: { params: { id: string } }) {
  // agora você pode fazer um fetch aqui
  const { product } = await new Promise<{
    product: { name: string; qte: number }
  }>((resolve) =>
    setTimeout(() => resolve({ product: { name: 'camiseta', qte: 2 } }), 2000),
  )

  return (
    <div>
      <p>{params.id}</p>
      <p>{product.name}</p>
      <p>{product.qte}</p>
      <br />
      <AddToCartButton>
        <TestClient />
      </AddToCartButton>
    </div>
  )
}
