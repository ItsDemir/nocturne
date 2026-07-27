"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const gradients: Record<string, string> = {
  day: "radial-gradient(ellipse 90% 70% at 50% 25%, #2a2620 0%, #0c0c0c 55%, #000 100%)",
  night: "radial-gradient(ellipse 90% 70% at 50% 35%, #1a1a1a 0%, #060606 55%, #000 100%)",
};

export default function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState<"Travel 4oz" | "Standard 10oz">("Standard 10oz");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const price = size === "Standard 10oz" ? product.price : product.travelPrice;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const handleAdd = () => {
    addItem({ slug: product.slug, name: product.name, size, price, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* Images */}
        <div className="px-6 md:px-10 pt-16 pb-10 lg:pt-24">
          <div
            className="aspect-square w-full mb-4 transition-transform duration-[400ms] hover:scale-[1.02]"
            style={{ background: gradients[product.collection] }}
          />
          <div className="grid grid-cols-4 gap-4">
            {["Vessel", "Texture", "Lifestyle", "Flame"].map((label) => (
              <div
                key={label}
                className="aspect-square"
                style={{ background: "linear-gradient(160deg, #161616, #000)" }}
                title={label}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="px-6 md:px-10 pt-16 pb-16 lg:pt-24 border-t lg:border-t-0 lg:border-l" style={{ borderColor: "#1e1e1e" }}>
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            {product.collectionLabel}
          </p>
          <h1 className="font-serif-nocturne font-light text-5xl mb-4">{product.name}</h1>
          <p className="text-xl mb-6">${price}</p>
          <p style={{ color: "#888" }} className="mb-10 max-w-sm">
            {product.description}
          </p>

          {/* Scent profile */}
          <div className="mb-10">
            <p className="label mb-4">Scent Profile</p>
            {[
              { label: "Top notes", value: product.notes.top, w: "35%" },
              { label: "Heart notes", value: product.notes.heart, w: "65%" },
              { label: "Base notes", value: product.notes.base, w: "90%" },
            ].map((row) => (
              <div key={row.label} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span style={{ fontSize: "13px", color: "#ccc" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", color: "#888" }}>{row.value.join(", ")}</span>
                </div>
                <div className="h-[1px] w-full" style={{ background: "#2a2a2a" }}>
                  <div className="h-[1px]" style={{ background: "#c9a96e", width: row.w }} />
                </div>
              </div>
            ))}
          </div>

          {/* Burn profile */}
          <div className="mb-10">
            <p className="label mb-4">Burn Profile</p>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Burn time", product.burn.time],
                  ["Wax type", product.burn.wax],
                  ["Wick material", product.burn.wick],
                  ["Vessel material", product.burn.vessel],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b" style={{ borderColor: "#1e1e1e" }}>
                    <td className="py-3" style={{ color: "#888" }}>
                      {k}
                    </td>
                    <td className="py-3 text-right">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="italic mb-10" style={{ color: "#c9a96e", fontSize: "14px" }}>
            {product.pairing}
          </p>

          {/* Size */}
          <div className="mb-8">
            <p className="label mb-4">Size</p>
            <div className="flex gap-3">
              {(["Travel 4oz", "Standard 10oz"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className="px-5 py-2 text-xs uppercase tracking-[0.1em] border transition-colors duration-[400ms]"
                  style={{
                    borderColor: size === s ? "#c9a96e" : "#2a2a2a",
                    color: size === s ? "#c9a96e" : "#888",
                  }}
                  data-cursor-hover
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-10">
            <p className="label mb-4">Quantity</p>
            <div className="flex items-center gap-6 border w-fit px-4 py-2" style={{ borderColor: "#2a2a2a" }}>
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} data-cursor-hover>
                −
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} data-cursor-hover>
                +
              </button>
            </div>
          </div>

          <button onClick={handleAdd} className="btn-fill w-full mb-4" data-cursor-hover>
            {added ? "Added ✓" : "Add to ritual"}
          </button>
          <button className="text-link block mx-auto mt-2" data-cursor-hover>
            Add to wishlist
          </button>

          <div className="mt-12">
            <Accordion
              items={[
                {
                  title: "Care instructions",
                  content:
                    "Trim the wick to 1/4 inch before every burn. Burn in sight, on a stable surface, away from drafts. Let the wax pool reach the edge on first light to prevent tunneling.",
                },
                {
                  title: "Shipping",
                  content: "Ships within 2 business days. Free shipping on orders over $120.",
                },
                {
                  title: "Returns",
                  content: "Unburned candles may be returned within 30 days. Once lit, the ritual is yours.",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* The making of */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <p className="label mb-6">The Making Of</p>
          <p className="font-serif-nocturne font-light text-2xl" style={{ lineHeight: 1.6 }}>
            {product.making}
          </p>
        </Reveal>
      </section>

      {/* Related */}
      <section className="px-6 md:px-10 pb-32">
        <p className="label text-center mb-16">You May Also Burn</p>
        <div className="max-w-[1400px] mx-auto flex gap-6 overflow-x-auto sm:grid sm:grid-cols-4">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <div className="text-center pb-16">
        <Link href="/shop" className="text-link">
          Back to shop
        </Link>
      </div>
    </div>
  );
}
