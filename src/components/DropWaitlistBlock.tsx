"use client";

import { useMemo, useState } from "react";
import Countdown from "@/components/Countdown";

export default function DropWaitlistBlock() {
  const target = useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 6 + 1000 * 60 * 60 * 7, []);
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="border p-10 md:p-16 text-center" style={{ borderColor: "#2a2a2a", background: "#0a0a0a" }}>
      <p className="label mb-4" style={{ color: "#c9a96e" }}>
        Solstice — 001
      </p>
      <p className="font-serif-nocturne text-3xl font-light mb-2">One formula. One run.</p>
      <p style={{ color: "#888" }} className="mb-10">
        Cade oil. Frankincense. Aged sandalwood. 100 units, numbered by hand.
      </p>
      <Countdown target={target} />
      {joined ? (
        <p className="mt-10 label" style={{ color: "#c9a96e" }}>
          You&apos;re on the list.
        </p>
      ) : (
        <form
          className="mt-10 flex items-end gap-6 max-w-sm mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            if (!email) return;
            setJoined(true);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="flex-1 bg-transparent border-0 border-b py-3 outline-none placeholder:text-[#555]"
            style={{ borderColor: "#2a2a2a" }}
          />
          <button type="submit" className="text-link pb-3" data-cursor-hover>
            Join
          </button>
        </form>
      )}
    </div>
  );
}
