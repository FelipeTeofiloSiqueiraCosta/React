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
    // no build, o next vai criar uma página estática pra cada param (id do produto diferente) diferente
    return {
      paths,
      fallback: true, // false or "blocking"
    };
  }) satisfies GetStaticPaths;
  ```

- Mas tome cuidado com essa forma, pois se voce colocar todos os paths (parametros) ou produtos, o build vai ficar muito lento se você tiver 20k de produtos por exemplo
  - no build, o next vai criar uma página estática pra cada param (id do produto diferente) diferente

## Commit

- feat: ssg with dinamic param

# SSG Fallback

- Em um E-commerce normalmente temos muitos produtos cadastrados, exemplo: 20 mil. Nesse caso se formos rodar com o getStaticPaths para todos os produtos, seriam gerados 20 mil páginas estáticas, oque demoraria muito tempo para "buildar"
- Nesse caso podemos buscar somente os produtos mais acessados (os 50 primeiros produtos)
- Passar eles para os paths
- E o resto fala pro next gerar conforme a demanda (conferme os usuarios forem acessando)
- Exemplo:

  ```tsx
  export const getStaticPaths = (async () => {
    // nesse caso eu estou colocando limit igual a 2, mas poderia ser 50, 100 e etc
    // porque eu quero que o next gere uma página estática somente para os produtos mais acessados
    // e o resto fica para o next gerar conforme a demanda (conferme os usuarios forem acessando)
    const response = await stripe.products.list({
      limit: 2,
    });
    const products = response.data;

    const paths = products.map((product) => {
      return {
        params: { id: product.id },
      };
    });
    return {
      paths,
      // o fallback: false -> toda vez que o usuário acessar uma pagina que não está dentro de paths, o next vai retornar um 404
      // o fallback: true -> toda vez que o usuário acessar uma pagina que não está dentro de paths, o next vai pegar o id passado como parâmetro e tentar gerar a página estática. O grande ponde dessa forma de fazer é que a nossa página vai ser carregada mesmo que os dados não tenham sidos buscados ainda na nossa api (a função getStaticProps é executada ao mesmo tempo que o next apresenta nossa página), ou seja, pode acontecer de a nossa página ser carregada com dados faltando. Nesse caso teríamos que fazer um estado de loading, skeleton screen e etc. Para fazer isso é só usar: `const { isFallback } = useRouter();`
      // o fallback: "blocking" -> toda vez que o usuário acessar uma pagina que não está dentro de paths, o next não vai mostrar nada em tela, ele vai deixar a página em branco até ter os dados para mostrar.
      fallback: "blocking",
    };
  }) satisfies GetStaticPaths;
  ```

## Commit

- feat: ssg fallback

# Prefetch de links

- Usando o next nós temos que tomar alguns cuidados porque ele pode fazer alguns prefetch em links, oque isso quer dizer?
  - Toda vez que usamos o Link do next (import Link from "next/link";), ele faz um prefetch dessa página pra abrir ela mas rápido quando o usuário clicar clicar
  - Se você abrir a aba network no inspecionar e procurar por prod\_, voce vai ver que ele fez uma requisicao para cada link renderizado em tela, isso acontece quando voce passa o mouse em cima do link tbm
- nesse caso podemos passar uma propriedade como: prefetch=false
- Importante: rode isso em produção para testar

## Commit

- refactor: prefetch de links
