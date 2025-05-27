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

# SSG com parâmetro dinâmico

- Toda vez que eu eu tiver uma rota dinâmica ([id].tsx), e eu querer usar ssg eu tenho que ter um cara chamado getStaticPaths
- Exemplo:

  ```tsx
  export const getStaticPaths = (async () => {
    const response = await stripe.products.list();
    const products = response.data;

    const paths = products.map((product) => {
      return {
        params: { id: product.id },
      };
    });
    return {
      paths,
      fallback: true, // false or "blocking"
    };
  }) satisfies GetStaticPaths;
  ```

- Mas tome cuidado com essa forma, pois se voce colocar todos os paths (parametros) ou produtos, o build vai ficar muito lento se você tiver 20k de produtos por exemplo
-

## Commit

- feat: ssg with dinamic param
