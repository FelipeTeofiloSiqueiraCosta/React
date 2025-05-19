## Conceitos do Next.js

Antes de começarmos, vamos entender o contexto de como funcionavam as aplicações tradicionais baseadas em SPA (Single Page Application).

### SPA vs SSR

#### SPA (Single Page Application)

- Em uma SPA, se quisermos fazer uma requisição para uma API, a aplicação precisa ter ao menos um JavaScript básico já carregado no navegador. Esse JS é responsável por fazer a requisição, receber os dados e renderizá-los na tela.
- O problema é que esse modelo traz dificuldades quando o assunto é **indexação no Google**. Os bots/crawlers do Google — que são responsáveis por acessar sites, ler o conteúdo (textos, imagens, links...), entender do que se trata a página e salvar essas informações no índice do Google — geralmente acessam os sites com o JavaScript **desabilitado** ou por **um tempo bem curto**.
- Ou seja: se o conteúdo da sua página depende de uma requisição assíncrona para aparecer, e o bot acessa seu site sem JS ou não espera tempo suficiente, ele **não vê nada**. Resultado? Sua página não é indexada corretamente, ou nem aparece nas buscas.

#### SSR (Server-Side Rendering)

- Foi aí que o Next.js trouxe uma solução muito massa: o **SSR (Server-Side Rendering)**.
- Com SSR, em vez do usuário acessar diretamente uma página front-end (client), ele acessa primeiro um servidor do próprio Next.js — que roda em um ambiente **Node.js**.
- Como o React é apenas JavaScript, e o Node.js consegue rodar JS no lado do servidor, isso significa que o Next.js pode renderizar sua aplicação **antes mesmo do conteúdo chegar no navegador**.
- Funciona assim: quando alguém acessa sua página, o servidor Next.js faz uma requisição à API, recebe os dados, **monta o HTML completo** com essas informações e **envia a página prontinha** para o navegador.
- O resultado? Os bots de indexação vão ver uma página já renderizada, com **todo o conteúdo visível de cara**. Assim, mesmo que o bot tenha o JS desativado ou fique pouco tempo na página, ele já consegue pegar as informações mais importantes para indexar no Google — sem perder nada.

#### SSG (Static Site Generation)

- Imagina que temos um site que exibe uma lista de produtos que só é atualizada a cada 4 horas. Agora pensa: e se **1 bilhão de pessoas** acessarem essa página?
- Se usarmos renderização tradicional no servidor (como o SSR), o Next.js teria que fazer 1 bilhão de requisições para a API, gerar o HTML 1 bilhão de vezes e devolver esse conteúdo para o front-end. É aí que o **SSG** entra como solução.
- Com o SSG, o Next.js gera o HTML de forma estática **apenas uma vez**, durante o processo de build ou com base em uma revalidação agendada. No primeiro acesso após o cache expirar (por exemplo, a cada 4 horas), o servidor faz a requisição para a API, gera o HTML e armazena esse conteúdo em cache.
- Depois disso, qualquer outra pessoa que acessar a mesma página vai receber esse HTML direto do cache, sem precisar passar novamente por todo o processo de geração.

✅ **Vantagens do SSG:**

- Redução extrema da carga no servidor
- Menos requisições para a API
- Carregamento ultra rápido para o usuário
- Escalabilidade absurda com pouco esforço

O resultado? Uma aplicação rápida, eficiente e preparada pra receber milhões (ou bilhões) de acessos com tranquilidade.

## Criando projeto com Next.js

- https://nextjs.org/docs
- Criar app: npx create-next-app@latest

## Criando rotas da aplicação

-

## Sobre o Next.js

- o arquivo /pages/index.tsx -> sempre vai ser o home
