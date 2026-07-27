"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t" style={{ borderColor: "#2a2a2a" }}>
      {items.map((item, i) => (
        <div key={item.title} className="border-b" style={{ borderColor: "#2a2a2a" }}>
          <button
            className="w-full flex items-center justify-between py-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            data-cursor-hover
          >
            <span className="label text-text" style={{ fontSize: "12px" }}>
              {item.title}
            </span>
            <span style={{ color: "#c9a96e" }}>{open === i ? "−" : "+"}</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="pb-6 text-sm" style={{ color: "#888", lineHeight: 1.7 }}>
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
