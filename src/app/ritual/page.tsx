import Reveal, { RevealItem, RevealStagger } from "@/components/Reveal";

const steps = [
  { step: "01", title: "Sourcing", desc: "We go to the source, not the broker. A bergamot estate in Calabria. An oud farm in Assam." },
  { step: "02", title: "Blending", desc: "Every formula goes through at least eight revisions before it earns a name." },
  { step: "03", title: "Testing", desc: "Burned in real rooms, over real weeks, by people who didn't know they were testing anything." },
  { step: "04", title: "Pouring", desc: "Small batches, poured by hand, in near-darkness so we can watch the wax settle." },
];

const never = ["Paraffin", "Synthetic dye", "Artificial fragrance", "Lead-core wicks", "Phthalates"];

export default function RitualPage() {
  return (
    <div className="bg-black">
      <section
        className="relative h-[80vh] w-full moody-panel grain flex items-end justify-center px-6 pb-20"
      >
        <div className="absolute inset-0 bg-black/30" />
        <Reveal className="relative z-10 text-center">
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            The Ritual
          </p>
          <h1 className="font-serif-nocturne font-light text-5xl md:text-6xl">
            We didn&apos;t start a candle company.
          </h1>
        </Reveal>
      </section>

      <section className="max-w-xl mx-auto px-6 py-32 text-center">
        <Reveal>
          <p style={{ color: "#ccc", fontSize: "18px", lineHeight: 1.8 }}>
            I burned through every candle I could find looking for one that didn&apos;t smell like
            a hotel lobby or an apology. There wasn&apos;t one. So I found a chemist, a glassblower,
            and eighteen months, and we made it ourselves. Nocturne isn&apos;t a mission statement.
            It&apos;s the candle I wanted on my own desk.
          </p>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-20">
          <p className="label">How We Build a Scent</p>
        </Reveal>
        <RevealStagger className="flex flex-col gap-16">
          {steps.map((s) => (
            <RevealItem key={s.step}>
              <div className="flex gap-8 items-start border-b pb-16" style={{ borderColor: "#1e1e1e" }}>
                <span className="font-serif-nocturne font-light text-3xl" style={{ color: "#c9a96e" }}>
                  {s.step}
                </span>
                <div
                  className="w-32 h-32 shrink-0 hidden sm:block"
                  style={{ background: "linear-gradient(160deg, #161616, #000)" }}
                />
                <div>
                  <p className="font-serif-nocturne text-2xl mb-3">{s.title}</p>
                  <p style={{ color: "#888" }} className="max-w-md">
                    {s.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-[#0a0a0a] py-32 px-6">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="font-serif-nocturne font-light text-3xl mb-10">
            We don&apos;t use anything we wouldn&apos;t put in our own home.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {never.map((n) => (
              <span key={n} className="label" style={{ color: "#8b2020" }}>
                No {n}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="aspect-[4/5]" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1a1a1a, #050505 70%)" }} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            The Vessel
          </p>
          <p className="font-serif-nocturne font-light text-3xl mb-6">Matte black glass.</p>
          <p style={{ color: "#888" }}>
            Rebuyable. Recyclable. Built to sit on a shelf long after the wax is gone.
          </p>
        </Reveal>
      </section>

      <section className="bg-black py-40 px-6 border-t" style={{ borderColor: "#1e1e1e" }}>
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="font-serif-nocturne font-light text-4xl" style={{ lineHeight: 1.5 }}>
            A room says more about a man than his words do. We just give it something to say.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
