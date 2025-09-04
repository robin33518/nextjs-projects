import { Suspense } from "react";
import ProductList from "./components/ProductList";

export const dynamic = "force-dynamic"; // Optional: force SSR on each request

// export const base_url = process.env.BASE_URL;

async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api/products`, {
    cache: "no-store", // Don't cache for SSR
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductList products={products} />
    </Suspense>
  );
}
