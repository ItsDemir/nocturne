import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-[70vh] flex items-center justify-center px-6 py-32">
      <Reveal className="text-center max-w-md">
        <p className="label mb-4" style={{ color: "#c9a96e" }}>
          Contact
        </p>
        <h1 className="font-serif-nocturne font-light text-4xl mb-8">Say less.</h1>
        <p style={{ color: "#888" }} className="mb-10">
          For orders, press, and wholesale — write to us. We read everything.
        </p>
        <a href="mailto:hello@nocturne.com" className="text-link" data-cursor-hover>
          hello@nocturne.com
        </a>
      </Reveal>
    </div>
  );
}
