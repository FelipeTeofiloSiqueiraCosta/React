import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$testShop",
  color: "white",
  borderRadius: 4,
  padding: 10,

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
