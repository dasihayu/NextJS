import { useRouter } from "next/router";
export default function ShopPage() {
  const { query } = useRouter();
  // console.log(query)
  return (
    <div>
      <h1>Shop Page</h1>
      <p>
        Shop : {query.shops && query.shops[0]} - {query.shops && query.shops[1]}
      </p>
    </div>
  );
}
