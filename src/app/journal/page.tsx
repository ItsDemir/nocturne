import Reveal from "@/components/Reveal";

const featured = {
  tag: "Craft",
  title: "The art of the dark room",
  excerpt:
    "Why we pour every candle in near-darkness, and what that costs us in yield. A conversation with the man who insists on it.",
};

const articles = [
  { tag: "Scent", title: "Why oud is the only note that matters", excerpt: "A note that divides a room. We built an entire collection around that divide." },
  { tag: "Ritual", title: "Morning rituals of men who move slowly", excerpt: "Six men, six routines, one shared refusal to rush the first hour." },
  { tag: "Style", title: "The case for one good chair", excerpt: "Furnish less. Furnish once. A short argument against the showroom." },
  { tag: "Craft", title: "What 45 hours of burn time actually means", excerpt: "The math and the mistakes behind a number we don't inflate." },
  { tag: "Interviews", title: "A glassblower on matte black", excerpt: "Twelve years making vessels no one is supposed to notice." },
  { tag: "Ritual", title: "The last light of the day", excerpt: "On lighting a candle as a way of closing a door." },
];

export default function JournalPage() {
  return (
    <div className="bg-black">
      <section className="text-center px-6 pt-32 pb-20">
        <Reveal>
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            Journal
          </p>
          <h1 className="font-serif-nocturne font-light text-5xl md:text-6xl">
            Ritual. Scent. Style. Craft.
          </h1>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center" >
          <div className="aspect-[4/3]" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1c1c1c, #050505 70%)" }} />
          <div>
            <p className="label mb-4" style={{ color: "#c9a96e" }}>
              {featured.tag}
            </p>
            <p className="font-serif-nocturne font-light text-4xl mb-6">{featured.title}</p>
            <p style={{ color: "#888", lineHeight: 1.7 }} className="mb-8 max-w-md">
              {featured.excerpt}
            </p>
            <a href="#" className="text-link" data-cursor-hover>
              Read more
            </a>
          </div>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {articles.map((a) => (
          <Reveal key={a.title}>
            <a href="#" data-cursor-hover className="block">
              <div
                className="aspect-[4/3] mb-6"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1c1c1c, #050505 70%)" }}
              />
              <p className="label mb-3" style={{ color: "#c9a96e" }}>
                {a.tag}
              </p>
              <p className="font-serif-nocturne text-2xl mb-3">{a.title}</p>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6 }} className="mb-4">
                {a.excerpt}
              </p>
              <span className="text-link">Read more</span>
            </a>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
