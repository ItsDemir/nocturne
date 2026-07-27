import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function CollectionsPage() {
  const day = products.filter((p) => p.collection === "day");
  const night = products.filter((p) => p.collection === "night");

  return (
    <div className="bg-black">
      <section id="day" className="scroll-mt-24 min-h-[50vh] py-32 px-6 md:px-10" style={{ background: "#111111" }}>
        <Reveal className="text-center mb-16">
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            Meridian
          </p>
          <h2 className="font-serif-nocturne font-light text-5xl mb-6">Day Collection</h2>
          <p style={{ color: "#888" }} className="max-w-md mx-auto">
            Bergamot. White cedar. Black pepper. Clarity in every breath.
          </p>
        </Reveal>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {day.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <section id="night" className="scroll-mt-24 min-h-[50vh] py-32 px-6 md:px-10 bg-black">
        <Reveal className="text-center mb-16">
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            Obsidian
          </p>
          <h2 className="font-serif-nocturne font-light text-5xl mb-6">Night Collection</h2>
          <p style={{ color: "#888" }} className="max-w-md mx-auto">
            Oud. Vetiver. Leather smoke. Burn it when the world goes quiet.
          </p>
        </Reveal>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {night.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <Link href="/subscription" className="text-link">
          Never run out — see the Obsidian Ritual subscription
        </Link>
      </section>
    </div>
  );
}
