"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/lib/cart-store";

export default function CartDrawer() {
  const { items, isOpen, close, removeItem } = useCartStore();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-black border-l z-[101] flex flex-col"
            style={{ borderColor: "#1e1e1e" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between px-8 py-8 border-b" style={{ borderColor: "#1e1e1e" }}>
              <p className="label">Your Ritual ({items.length})</p>
              <button onClick={close} className="label" data-cursor-hover>
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8">
              {items.length === 0 && (
                <p style={{ color: "#888" }} className="text-sm">
                  Nothing here yet.
                </p>
              )}
              {items.map((item) => (
                <div key={item.slug + item.size} className="flex items-center gap-4 pb-6 border-b" style={{ borderColor: "#1e1e1e" }}>
                  <div className="w-16 h-20 shrink-0" style={{ background: "linear-gradient(160deg, #1e1e1e, #000)" }} />
                  <div className="flex-1">
                    <p className="font-serif-nocturne text-lg">{item.name}</p>
                    <p className="label mt-1">{item.size}</p>
                    <p style={{ color: "#888" }} className="text-sm mt-1">
                      Qty {item.quantity} · ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.slug, item.size)}
                    className="text-link"
                    data-cursor-hover
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="px-8 py-8 border-t" style={{ borderColor: "#1e1e1e" }}>
              <div className="flex justify-between mb-6">
                <span className="label">Subtotal</span>
                <span>${total}</span>
              </div>
              <button className="btn-fill w-full" data-cursor-hover>
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
