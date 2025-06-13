import { styled } from "../index";

export const ShoppingBagSidebarContainer = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "30rem",
  background: "$gray800",
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.8)",
  padding: "3rem",
  paddingTop: "4.5rem",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s ease-in-out",
  zIndex: 1000,

  "button.close-button": {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "1.5rem",
    right: "1.5rem",
  },

  h1: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
  },

  ul: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",

    li: {
      display: "flex",
      gap: "1.5rem",

      h2: {
        fontWeight: 400,
        fontSize: "$md",
        color: "$gray300",
        lineHeight: 1.6,
      },
      strong: {
        fontSize: "$md",
        lineHeight: 1.6,
        marginTop: "0.5rem",
        span: {
          fontSize: "$sm",
          color: "$gray400",
        },
      },
      button: {
        background: "transparent",
        border: "none",
        color: "$green500",
        fontSize: "$base",
        fontWeight: 700,
        cursor: "pointer",
        lineHeight: 1.6,
        marginTop: "0.5rem",
      },

      "& + li": {
        marginTop: "1.5rem",
      },
    },
  },

  footer: {
    marginTop: "auto",
    paddingTop: "1rem",

    div: {
      display: "flex",
      justifyContent: "space-between",

      strong: {
        fontSize: "$lg",
      },

      "& + div": {
        marginTop: "0.5rem",
      },
    },
    button: {
      background: "$green500",
      color: "$white",
      border: "none",
      padding: "1.25rem",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "$md",
      lineHeight: 1.6,
      marginTop: "3.5rem",
      width: "100%",

      "&:hover:not(:disabled)": {
        background: "$green300",
      },
      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    isOpen: {
      true: {
        transform: "translateX(0)",
      },
      false: {
        transform: "translateX(100%)",
      },
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 100,
  height: 95,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
