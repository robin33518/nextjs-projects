// Dynamic product page using App Router
"use client"
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
}
