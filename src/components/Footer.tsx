import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black pt-20 pb-10" style={{ borderColor: "#1e1e1e" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
        <div>
          <p className="label mb-6">Shop</p>
          <ul className="flex flex-col gap-4">
            {[
              ["Day Collection", "/collections#day"],
              ["Night Collection", "/collections#night"],
              ["Limited Drops", "/drops"],
              ["Subscription", "/subscription"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-6">Brand</p>
          <ul className="flex flex-col gap-4">
            {[
              ["The Ritual", "/ritual"],
              ["Journal", "/journal"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-6">Follow</p>
          <ul className="flex flex-col gap-4">
            {["Instagram", "Twitter / X", "Pinterest"].map((s) => (
              <li key={s}>
                <a href="#" className="text-link">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-6">Legal</p>
          <ul className="flex flex-col gap-4">
            {["Privacy Policy", "Terms of Service", "Shipping & Returns"].map((s) => (
              <li key={s}>
                <a href="#" className="text-link">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-serif-nocturne text-lg tracking-[0.25em]">NOCTURNE</p>
        <p style={{ color: "#555", fontSize: "11px" }}>
          NOCTURNE — Crafted for men who move with intention.
        </p>
        <p style={{ color: "#555", fontSize: "11px" }}>
          © {new Date().getFullYear()} Nocturne. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
