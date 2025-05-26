# Configurando conta Stripe

- Após criar os produtos vá em Developers (opção na barra lateral)
- Pegar as chaves e colar na .env.local

## Commit

- Veja o commit: feat: stripe setup (https://github.com/FelipeTeofiloSiqueiraCosta/React/commit/a87448140a0e9799dc9a8d861f8e0eb9d433ec4f)

# Data Fetching no Next.js

- Quando os crawlers e bots do google entram no seu site, eles não esperam a página carregar os dados vindos de uma API, por exemplo, da API do stripe, ele não esperaria os produtos da stripe carregar, sendoa assim isso poderia causar um problema de indexação.
- Porém no next existe uma forma de você fazer com que ao ser acessada uma página, o bot/cliente vai bater no servidor node.js do next.js vai fazer a requisição para a API pegando o conteudo do seu site (o html), vai fazer a requisição para a API do stripe, construir tudo e retornar.
- Veja: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props, caso necessário
- essa função se chama: getServerSideProps

  - exemplo:

    ```tsx
    import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

    type Repo = {
      name: string;
      stargazers_count: number;
    };

    export const getServerSideProps = (async () => {
      // Fetch data from external API
      const res = await fetch("https://api.github.com/repos/vercel/next.js");
      const repo: Repo = await res.json();
      // Pass data to the page via props
      return { props: { repo } };
    }) satisfies GetServerSideProps<{ repo: Repo }>;

    export default function Page({
      repo,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
      return (
        <main>
          <p>{repo.stargazers_count}</p>
        </main>
      );
    }
    ```

    - Perceba que mesmo com o js do navegador desabilitado, os dados da requisição irão ser pegos e apresentados
    - Mas tome cuidado, pois de a requisição for demorada (durou 5 minutos), a sua página não será carregada até que a requisição tenha sido completada

## Quando usar essa forma de request

- Procure usar essa requisição por server-sede sempre que for de extrema necessidade que uma requisição seja feita, exemplo, no nosso caso, na página home pode ser muito necessário que os produtos ja estejam apresentados quando a página carregar para que os Bots saibam doque se trata (mas só na pagina home por exemplo)

## Commit

- feat: data fetching in next.js (getServerSideProps) https://github.com/FelipeTeofiloSiqueiraCosta/React/commit/7f024764380793f1fcd44f38cb12a74c6c297317

# Buscando produtos do Stripe (https://docs.stripe.com/api?lang=node)

- No caso da stripe, como ele libera 2 chaves, uma pública e outra secreta, por mais que a publica possa ser vista, ela não pode fazer request para pegar produtos, forçando agente usar a chave secreta, nesse caso então é interessante as requisições serem feitas pelo lado do servidor do next.js e não pelo lado do cliente, para esconder essa chave secreta que será usada.

## Instalando lib do Stripe

- npm install --save stripe
  - Exemplo:
    ```tsx
    <Image
      src={product.imageUrl}
      alt={product.name}
      placeholder="blur"
      blurDataURL={product.imageUrl}
      width={520}
      height={480}
    />
    ```

## Commit

- feat: fetching strip products

# Usando SSG

- importante saber: Quando estou em ambiente de desenvolvimento, o next trata o getStaticProps exatamente como um getServerSideProps
- Exemplo de uso

  ```ts
  export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const response = await stripe.products.list({
      expand: ["data.default_price"],
    });

    const products = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        price: price.unit_amount ? price.unit_amount / 100 : 0,
        imageUrl: product.images[0],
      };
    });

    return {
      props: {
        products,
      },
    };
  };
  ```

- Uma coisa interessante de saber sobre o getStaticProps é que ele não tem um contexto de requisição, diferentemente do getServerSideProps.
- O getServerSideProps sempre executa quando carregamos a página, oque permite que o next consiga pegar o contexto da requisição (receber o parametro de requisicão e resposta na função), já o getStaticProps não consegue porque ele só é executado no momento que o next faz o cache.
- Toda pagina renderizada com SSG é cacheada, no momento do build o next gera várias páginas estáticas que podem ter uma duração no cache
- Exemplo
  - Quando você roda: npm run build, o next vai em todas as páginas que tem getStaticProps e gera uma versão estática

## Commit

- feat: using SSG

# Formatando o preço

## Commit

- feat: formatting price
