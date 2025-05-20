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
