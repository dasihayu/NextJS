import { useRouter } from "next/router";
export default function DetailProduct() {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product : {query.slug}</p>
    </div>
  );
}
