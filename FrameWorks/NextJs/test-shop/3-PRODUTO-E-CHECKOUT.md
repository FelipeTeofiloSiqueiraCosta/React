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
