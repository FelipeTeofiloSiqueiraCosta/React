import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
  },
});
