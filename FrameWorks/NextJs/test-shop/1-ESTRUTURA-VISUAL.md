# Configurando o Stitches

- É uma biblioteca de estilização, uma alternativa ao styed components porém ele tem uma forma de escrever as estilizações de uma maneira um pouco diferente, principalmente quando queremos trabalhar com componentes que tem muitas variações de estilo baseada em propriedade.
- Funciona muito bem com o next.js tbm

## Instalando e Configurando

- https://stitches.dev/
- npm install @stitches/react
- Crie um arrquivo em ./styles/index.ts

  - veja a doc, caso precise: https://stitches.dev/docs/installation#configure-stitches
  - Exemplo:

    ```ts
    import { createStitches } from "@stitches/react";

    export const {
      styled,
      css,
      globalCss,
      keyframes,
      getCssText,
      theme,
      createTheme,
      config,
    } = createStitches({
      theme: {
        colors: {
          testShop: "#8257e6",
        },
      },
    });
    ```

## Usando

- Depois é só usar em qualquer outro componente:

  - Exemplo:

    ```ts
    import { styled } from "../styles";

    const Button = styled("button", {
      backgroundColor: "$testShop",
      color: "white",
      borderRadius: 4,
      padding: 10,
      // acessando componentes filhos
      span: {
        color: "red",
      },

      "&:hover": {
        filter: "brightness(0.8)",
      },
    });

    export default function Home() {
      return (
        <div>
          <Button>
            <span>test</span>
            Hello World
          </Button>
        </div>
      );
    }
    ```

## SSR no stitches

- Se formos no navegador e desabilitar o js, iremos perceber que o css não vai ter sido aplicado, porque o stitches é uma lib que aplica o css em runtime (em tempo de execução)
- Portanto vai no seu \_document.tsx e coloque:
  ```tsx
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  ```
  Dentro do header
- Veja a doc, se necessário: https://stitches.dev/docs/server-side-rendering

# Estilos globais

- https://stitches.dev/docs/styling
-

# Imagens no Next.js

- https://nextjs.org/docs/app/getting-started/images
- Se eu tiver uma imagem grande (sla 1080x1080) mas eu estiver apresentando ela no meu site apenas no tamanho 100 x 100, porque eu estou usando essa imagem grande? Isso acabaria pesando meu site mais doque deveria, ou sela, se eu tenho uma imagem .png sem transparência, isso pode causar processamento ou uso de recursos desnecessário comparado a um .jpg.
- O next ele tem um sistema que otimiza isso automaticamente para nós, ou seja, se eu tiver uma imagem grande (1080 x 1080) mas estiver usando só (100 x 100), oque o nexte vai fazer é criar uma versão 100x100 para otimizar, ele consegue criar imagem responsiva e etc.
- Se qusier fazer o teste:

  - Pegue uma imagem grande e coloque na pasta assets
  - Então coloque essa imagem no \_app.tsx, exmeplo:

    ```tsx
    import type { AppProps } from "next/app";
    import imageGrande from "../assets/imageGrande.png";
    import Image from "next/image";

    export default function App({ Component, pageProps }: AppProps) {
      return (
        <div>
          <Image src={imageGrande} alt="logo" width={400} />
          <Component {...pageProps} />
        </div>
      );
    }
    ```

  - Agora quando você for no navegador, abra a network e procure por imageGrande, você vai ver que o tamanho em KB mudou, e possivelmente o tipo da imagem mudou tbm

# Estrutura da home

- veja o commit: feat: home structure

# Criando o carrossel

- veja o commit: feat: creating carrossel
