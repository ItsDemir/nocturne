import Link from "next/link";
import Reveal, { RevealItem, RevealStagger } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import DropCountdownSection from "@/components/DropCountdownSection";
import { products } from "@/lib/products";

const journal = [
  {
    tag: "Craft",
    title: "The art of the dark room",
    excerpt:
      "Why we pour every candle in near-darkness, and what that costs us in yield.",
  },
  {
    tag: "Scent",
    title: "Why oud is the only note that matters",
    excerpt:
      "A note that divides a room. We built an entire collection around that divide.",
  },
  {
    tag: "Ritual",
    title: "Morning rituals of men who move slowly",
    excerpt: "Six men, six routines, one shared refusal to rush the first hour.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center moody-panel grain">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 50% 68%, rgba(201,169,110,0.18), transparent 60%)",
          }}
        />
        <div className="flame-glow absolute w-40 h-56 left-1/2 -translate-x-1/2 bottom-[8%]" />
        <div className="flame absolute left-1/2 -translate-x-1/2 bottom-[14%] w-3 h-10 rounded-full" style={{ background: "linear-gradient(to top, #c9a96e, #f0d9a8 60%, transparent)" }} />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <p className="label mb-6" style={{ color: "#c9a96e" }}>
              Handcrafted Luxury
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif-nocturne font-light tracking-[0.06em] text-[18vw] leading-none sm:text-[96px]">
              NOCTURNE
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg" style={{ color: "#888", fontWeight: 300 }}>
              Day. Night. Obsidian.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/shop" className="btn-outline mt-12 inline-block" data-cursor-hover>
              Explore the collection
            </Link>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="scroll-indicator" />
        </div>
      </section>

      {/* Brand statement */}
      <section className="bg-black py-40 px-6">
        <Reveal className="max-w-[700px] mx-auto text-center">
          <p className="font-serif-nocturne font-light" style={{ fontSize: "36px", lineHeight: 1.6 }}>
            Some men light a candle for ambiance. You light it for ritual.
          </p>
        </Reveal>
      </section>

      {/* Day / Night split */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 min-h-[70vh] flex items-center justify-center px-8 py-24" style={{ background: "#111111" }}>
          <Reveal className="max-w-sm text-center">
            <p className="label mb-6" style={{ color: "#c9a96e" }}>
              Meridian — Day
            </p>
            <p style={{ color: "#ccc", fontSize: "17px", lineHeight: 1.7 }} className="mb-10">
              Bergamot. White cedar. Black pepper. Clarity in every breath.
            </p>
            <Link href="/collections#day" className="btn-outline" data-cursor-hover>
              Shop Day Collection
            </Link>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2 min-h-[70vh] flex items-center justify-center px-8 py-24 bg-black">
          <Reveal className="max-w-sm text-center">
            <p className="label mb-6" style={{ color: "#c9a96e" }}>
              Obsidian — Night
            </p>
            <p style={{ color: "#ccc", fontSize: "17px", lineHeight: 1.7 }} className="mb-10">
              Oud. Vetiver. Leather smoke. Burn it when the world goes quiet.
            </p>
            <Link href="/collections#night" className="btn-outline" data-cursor-hover>
              Shop Night Collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-black py-32 px-6 md:px-10">
        <Reveal className="text-center mb-16">
          <p className="label">The Collection</p>
        </Reveal>
        <div className="max-w-[1400px] mx-auto flex gap-6 overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4 pb-4 sm:pb-0">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* The ritual values */}
      <section className="bg-[#0a0a0a] py-32 px-6">
        <RevealStagger className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { title: "100% soy wax", desc: "Hand-poured in small batches." },
            { title: "45+ hour burn", desc: "Slow, intentional, precise." },
            { title: "Matte black vessel", desc: "Designed to stay. Not just to sell." },
          ].map((v) => (
            <RevealItem key={v.title}>
              <div className="gold-line mx-auto mb-6" />
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6">
                <circle cx="12" cy="12" r="9" stroke="#c9a96e" strokeWidth="1" />
                <path d="M12 7v5l3 3" stroke="#c9a96e" strokeWidth="1" />
              </svg>
              <p className="label mb-3" style={{ fontSize: "13px" }}>
                {v.title}
              </p>
              <p style={{ color: "#888", fontSize: "14px" }}>{v.desc}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Limited drop */}
      <DropCountdownSection />

      {/* Journal preview */}
      <section className="bg-black py-32 px-6 md:px-10">
        <Reveal className="text-center mb-16">
          <p className="label">From the Journal</p>
        </Reveal>
        <RevealStagger className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {journal.map((a) => (
            <RevealItem key={a.title}>
              <Link href="/journal" data-cursor-hover className="block group">
                <div
                  className="aspect-[4/3] mb-6"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 30%, #1c1c1c, #050505 70%)",
                  }}
                />
                <p className="label mb-3" style={{ color: "#c9a96e" }}>
                  {a.tag}
                </p>
                <p className="font-serif-nocturne text-2xl mb-3">{a.title}</p>
                <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6 }}>{a.excerpt}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-32 px-6 border-t" style={{ borderColor: "#1e1e1e" }}>
        <Reveal className="text-center">
          <h2 className="font-serif-nocturne font-light text-4xl mb-10">Enter the dark.</h2>
          <NewsletterForm />
          <p className="mt-6" style={{ color: "#555", fontSize: "12px" }}>
            Early access to limited drops. No spam. Ever.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
