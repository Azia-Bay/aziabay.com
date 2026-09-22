"use client";

import { useState } from "react";

import { post } from "@/lib/actions";

import HoveredUnderline from "@/components/vfx/hovered_underline";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(formData: FormData) {
    setStatus("sending");

    const result = await post(formData);
    
    setStatus(result.success ? "sent" : "error");
  }

  return (
    <form
      action={submit}
      className="w-100 max-w-full flex flex-col gap-4">
      <div
        className="flex flex-col gap-2">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="cursor-text px-2 py-1 rounded-lg border-4 border-dark border-double bg-light text-dark" />

        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="cursor-text px-2 py-1 rounded-lg border-4 border-dark border-double bg-light text-dark" />
        
        <textarea
          name="message"
          placeholder="Message"
          required
          className="cursor-text px-2 py-1 rounded-lg border-4 border-dark border-double bg-light text-dark" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${status !== "sending" ? "cursor-pointer" : "cursor-not-allowed"} group relative overflow-hidden mx-auto px-6 py-2 rounded-lg border-4 border-light border-double bg-dark`}>
        <div
          className="relative">
          <div
            className="text-light text-lg font-bold uppercase">
            {status === "sending" ? "Sending..." : "Submit"}
          </div>

          {status !== "sending" &&
            <HoveredUnderline bottom="0.5" bgColor="bg-light" />
          }
        </div>
      </button>

      {status === "sent" &&
        <div
          className="text-sm text-center">
          Message sent — thank you!
        </div>
      }

      {status === "error" &&
        <div
          className="text-sm text-center">
          Something went wrong — please try again.
        </div>
      }
    </form>
  );
}
