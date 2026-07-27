import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="bg-black min-h-screen py-32 px-6 md:px-10">
      <Reveal className="text-center mb-20">
        <p className="label mb-4">Shop All</p>
        <h1 className="font-serif-nocturne font-light text-5xl">The Collection</h1>
      </Reveal>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
