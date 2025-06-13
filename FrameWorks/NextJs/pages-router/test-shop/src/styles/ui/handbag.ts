import { styled } from "../index";

export const HandbagContainer = styled("button", {
  display: "grid",
  placeItems: "center",
  padding: "0.75rem",
  borderRadius: 6,
  cursor: "pointer",
  border: "none",
  position: "relative",

  strong: {
    position: "absolute",
    top: -10,
    right: -10,
    padding: 6,
    border: "3px solid $gray900",
    borderRadius: "50%",
    background: "$green500",
    color: "$white",
    fontSize: "0.875rem",
  },

  variants: {
    color: {
      default: {
        background: "$gray800",
      },
      green: {
        background: "$green500",
        strong: {
          display: "none",
        },
      },
    },
  },
  defaultVariants: {
    color: "default",
  },
});
