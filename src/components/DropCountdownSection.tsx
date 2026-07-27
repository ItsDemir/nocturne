"use client";

import { useMemo } from "react";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";

export default function DropCountdownSection() {
  const target = useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 6 + 1000 * 60 * 60 * 7, []);

  return (
    <section className="relative bg-[#0a0a0a] py-32 px-6 grain overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,169,110,0.06), transparent 65%)" }}
      />
      <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="label mb-6" style={{ color: "#c9a96e" }}>
          Solstice — 001
        </p>
        <p className="font-serif-nocturne text-3xl md:text-4xl font-light mb-4">
          A single drop. 100 units. No restock.
        </p>
        <div className="my-12">
          <Countdown target={target} />
        </div>
        <Link href="/drops" className="btn-outline" data-cursor-hover>
          Join the waitlist
        </Link>
      </Reveal>
    </section>
  );
}
