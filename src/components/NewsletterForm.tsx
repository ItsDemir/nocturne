"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex items-end gap-6 max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 2500);
      }}
    >
      <div className="flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full bg-transparent border-0 border-b py-3 outline-none transition-colors duration-[400ms] placeholder:text-[#555]"
          style={{ borderColor: "#2a2a2a" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a96e")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>
      <button type="submit" className="text-link pb-3" data-cursor-hover>
        {submitted ? "Sent" : "Submit"}
      </button>
    </form>
  );
}
