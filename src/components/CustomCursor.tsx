"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      setHover(!!target.closest("a, button, input, [data-cursor-hover]"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease-out, width 300ms ease-out, height 300ms ease-out",
        width: hover ? 36 : 10,
        height: hover ? 36 : 10,
        borderRadius: "50%",
        border: hover ? "1px solid #c9a96e" : "1px solid #f0f0f0",
        boxShadow: hover ? "0 0 16px rgba(201,169,110,0.6)" : "0 0 6px rgba(240,240,240,0.3)",
        background: hover ? "rgba(201,169,110,0.08)" : "transparent",
      }}
    />
  );
}
