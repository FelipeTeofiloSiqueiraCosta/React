# Navegação via link

- Nos conseguimos ver que por mais que o next tenha o serverSide rendering, muitas vezes ele se comporta como uma SPA
- Exemplo: quando usamos um component do next que se chama: Link
  ```tsx
    .
    .
    .
     return (
        <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
            return (
            <Link href={`/product/${product.id}`} key={product.id}>
                <Product className="keen-slider__slide">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={520}
                    height={480}
                />
                <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                </footer>
                </Product>
            </Link>
            );
        })}
        </HomeContainer>
    );
  ```

## Commit

- feat: navigate by link

# Estrutura da página de produto

-

## Commit

- feat: product page structure

# Carregando dados do produto

- Se a nossa página:
  1. Não depende de dados do contexto atual (cookies, usuário autenticado e etc)
  2. Não tem problema essa página ficar salva em cache por um tempo
  - Então use o SSG (getStaticProps)

## Commit

- feat: loading product data
