import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  return <p>product: {router.query.id}</p>;
}
