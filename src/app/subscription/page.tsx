import Reveal, { RevealItem, RevealStagger } from "@/components/Reveal";
import Accordion from "@/components/Accordion";

const plans = [
  {
    name: "Monthly",
    price: "$64",
    cadence: "/mo",
    features: ["1 candle of your choice", "Free shipping", "10% off all shop purchases"],
    featured: false,
  },
  {
    name: "Quarterly",
    price: "$174",
    cadence: "/quarter",
    features: [
      "3 curated candles chosen by Nocturne",
      "Exclusive scent access",
      "Custom engraved vessel",
      "15% off all shop purchases",
    ],
    featured: true,
  },
];

export default function SubscriptionPage() {
  return (
    <div className="bg-black">
      <section className="text-center px-6 pt-32 pb-24">
        <Reveal>
          <p className="label mb-4" style={{ color: "#c9a96e" }}>
            The Obsidian Ritual
          </p>
          <h1 className="font-serif-nocturne font-light text-5xl md:text-6xl mb-6">
            Never run out. Never settle.
          </h1>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1}>
            <div
              className="p-10 h-full flex flex-col"
              style={{
                background: "#161616",
                border: `1px solid ${plan.featured ? "#c9a96e" : "#2a2a2a"}`,
              }}
            >
              {plan.featured && (
                <p className="label mb-4" style={{ color: "#c9a96e" }}>
                  Featured
                </p>
              )}
              <p className="font-serif-nocturne text-2xl mb-2">{plan.name}</p>
              <p className="mb-8">
                <span className="text-4xl font-serif-nocturne font-light">{plan.price}</span>
                <span style={{ color: "#888" }}>{plan.cadence}</span>
              </p>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "#ccc" }}>
                    <span style={{ color: "#c9a96e" }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="btn-fill w-full" data-cursor-hover>
                Choose {plan.name}
              </button>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-[#0a0a0a] py-32 px-6">
        <Reveal className="text-center mb-20">
          <p className="label">How It Works</p>
        </Reveal>
        <RevealStagger className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { n: "01", t: "Choose your plan", d: "Monthly for one. Quarterly for three, curated." },
            { n: "02", t: "We curate / you choose", d: "Pick your own, or let us send what's next." },
            { n: "03", t: "Ships on your schedule", d: "No cart, no reminder. It just arrives." },
          ].map((s) => (
            <RevealItem key={s.n}>
              <p className="font-serif-nocturne font-light text-3xl mb-4" style={{ color: "#c9a96e" }}>
                {s.n}
              </p>
              <p className="label mb-3">{s.t}</p>
              <p style={{ color: "#888", fontSize: "14px" }}>{s.d}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-32">
        <Reveal className="text-center mb-12">
          <p className="label">FAQ</p>
        </Reveal>
        <Accordion
          items={[
            { title: "Can I cancel anytime?", content: "Yes. Cancel or pause from your account with no penalty, effective the next billing cycle." },
            { title: "Can I skip a shipment?", content: "Skip any upcoming shipment from your account up to 5 days before it ships." },
            { title: "What if I don't like a scent?", content: "Quarterly members can swap any curated candle before it ships. Monthly members choose their own from the start." },
            { title: "Is the engraved vessel a one-time gift?", content: "Quarterly members receive a newly engraved vessel with their first shipment of each year." },
          ]}
        />
      </section>
    </div>
  );
}
