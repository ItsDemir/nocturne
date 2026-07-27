"use client";

import { useEffect, useState } from "react";

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ target }: { target: number }) {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    setTime(getRemaining(target));
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: [string, number][] = [
    ["Days", time?.days ?? 0],
    ["Hours", time?.hours ?? 0],
    ["Minutes", time?.minutes ?? 0],
    ["Seconds", time?.seconds ?? 0],
  ];

  return (
    <div className="flex gap-8 md:gap-14 justify-center">
      {units.map(([label, value]) => (
        <div key={label} className="text-center">
          <p className="font-serif-nocturne text-4xl md:text-6xl font-light tabular-nums">
            {time ? String(value).padStart(2, "0") : "--"}
          </p>
          <p className="label mt-2">{label}</p>
        </div>
      ))}
    </div>
  );
}
