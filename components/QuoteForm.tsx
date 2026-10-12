"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) return <p>Thank you! We will get back to you shortly.</p>;

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input name="name" placeholder="YOUR NAME" required />
      <input name="phone" type="tel" placeholder="YOUR PHONE NUMBER" required />
      <input name="email" type="email" placeholder="YOUR EMAIL ADDRESS" required />
      <input name="vehicle" placeholder="VEHICLE MAKE & MODEL" required />
      <textarea
        name="message"
        placeholder="PLEASE LET US KNOW WHAT SERVICE YOU WOULD LIKE AND ANY ADDITIONAL COMMENTS"
        required
      />
      <button type="submit" className="btn">REQUEST QUOTE</button>
    </form>
  );
}
