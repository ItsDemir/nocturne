import Reveal from "@/components/Reveal";
import DropWaitlistBlock from "@/components/DropWaitlistBlock";

const pastDrops = [
  { code: "EMBER — 002", name: "Ember", desc: "Cassis. Dried tobacco. Smoked oak.", units: 150 },
  { code: "VESPER — 003", name: "Vesper", desc: "Iris. Suede. Cold ash.", units: 120 },
  { code: "HALO — 004", name: "Halo", desc: "Frankincense. White musk. Stone.", units: 100 },
];

export default function DropsPage() {
  return (
    <div className="bg-black">
      <section className="text-center px-6 pt-32 pb-20">
        <Reveal>
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            Limited Drops
          </p>
          <h1 className="font-serif-nocturne font-light text-5xl md:text-6xl">
            Poured once. Never repeated.
          </h1>
        </Reveal>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32">
        <p className="label text-center mb-10">Upcoming</p>
        <DropWaitlistBlock />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <p className="label text-center mb-16">Past Drops</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {pastDrops.map((d) => (
            <Reveal key={d.code}>
              <div className="relative group">
                <div
                  className="aspect-[4/5] mb-4 relative overflow-hidden grayscale"
                  style={{ background: "linear-gradient(160deg, #1e1e1e, #000)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="label border px-4 py-2"
                      style={{ borderColor: "#8b2020", color: "#8b2020", letterSpacing: "0.2em" }}
                    >
                      Sold Out
                    </span>
                  </div>
                </div>
                <p className="label mb-1" style={{ color: "#c9a96e" }}>
                  {d.code}
                </p>
                <p className="font-serif-nocturne text-xl mb-1">{d.name}</p>
                <p style={{ color: "#888", fontSize: "13px" }}>{d.desc}</p>
                <p style={{ color: "#555", fontSize: "12px" }} className="mt-1">
                  {d.units} units
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
