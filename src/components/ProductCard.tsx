"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";

const gradients: Record<string, string> = {
  day: "radial-gradient(ellipse 80% 60% at 50% 20%, #2a2620 0%, #0c0c0c 55%, #000 100%)",
  night: "radial-gradient(ellipse 80% 60% at 50% 30%, #1a1a1a 0%, #060606 55%, #000 100%)",
};

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group flex-shrink-0 w-[75vw] sm:w-auto">
      <Link href={`/product/${product.slug}`} className="block relative overflow-hidden" data-cursor-hover>
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{ background: gradients[product.collection] }}
        >
          <div
            className="absolute inset-0 transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
            style={{
              background: `radial-gradient(circle at 50% 65%, rgba(201,169,110,${0.12 - index * 0.01}), transparent 55%)`,
            }}
          />
          <div className="absolute bottom-4 left-4 label" style={{ color: "#c9a96e" }}>
            {product.collectionLabel}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem({
                slug: product.slug,
                name: product.name,
                size: "Standard 10oz",
                price: product.price,
                quantity: 1,
              });
            }}
            className="absolute bottom-4 right-4 btn-outline opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
            style={{ fontSize: "10px", padding: "10px 18px" }}
            data-cursor-hover
          >
            Add to cart
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <p className="font-serif-nocturne text-xl">{product.name}</p>
        <p className="label mt-1">{product.scentFamily}</p>
        <p className="mt-2 text-sm" style={{ color: "#888" }}>
          ${product.price}
        </p>
      </div>
    </div>
  );
}
