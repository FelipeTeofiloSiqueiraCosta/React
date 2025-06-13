import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  ".products-container": {
    display: "grid",
    placeItems: "center",
    marginBottom: "3rem",
    width: "100%",

    ul: {
      display: "flex",
      listStyle: "none",
      justifyContent: "space-between",
    },
  },

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("li", {
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "&:hover": {
    transform: "scale(1.1)",
    zIndex: 1,
  },

  boxShadow: "0 0 60px rgba(0, 0, 0, 0.8)",

  img: {
    objectFit: "cover",
  },
});
