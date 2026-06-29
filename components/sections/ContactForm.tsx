"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  projectType: z.enum(["commercial", "residential", "fitout", "interior-design", "other"]),
  message: z.string().min(20, "Please give us a bit more detail (20 characters min)"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-[#0E0F11]/20 bg-white px-4 py-3 font-body text-sm text-[#0E0F11] placeholder-[#0E0F11]/30 outline-none transition-colors focus:border-[#3A5248] focus:ring-0";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please email us directly at info@proudlock.com.au");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 border border-[#3A5248] p-10">
        <p className="font-heading text-2xl font-bold text-[#0E0F11]">Message received.</p>
        <p className="font-body text-[#0E0F11]/60">We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#0E0F11]/60">
            Name <span aria-hidden="true">*</span>
          </label>
          <input id="name" type="text" autoComplete="name" placeholder="Your name" {...register("name")} className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="mt-1 font-body text-xs text-red-600" role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#0E0F11]/60">
            Email <span aria-hidden="true">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" placeholder="your@email.com" {...register("email")} className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className="mt-1 font-body text-xs text-red-600" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#0E0F11]/60">
            Phone <span className="text-[#0E0F11]/30">(optional)</span>
          </label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+61 4xx xxx xxx" {...register("phone")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="projectType" className="mb-1.5 block font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#0E0F11]/60">
            Project type <span aria-hidden="true">*</span>
          </label>
          <select id="projectType" {...register("projectType")} className={inputClass} aria-invalid={!!errors.projectType}>
            <option value="">Select…</option>
            <option value="commercial">Commercial Construction</option>
            <option value="residential">Residential Construction</option>
            <option value="fitout">Fitout</option>
            <option value="interior-design">Interior Design</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <p className="mt-1 font-body text-xs text-red-600" role="alert">{errors.projectType.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#0E0F11]/60">
          Tell us about your project <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Location, size, timeline, and any other relevant details…"
          {...register("message")}
          className={inputClass + " resize-none"}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1 font-body text-xs text-red-600" role="alert">{errors.message.message}</p>}
      </div>

      {serverError && <p className="font-body text-sm text-red-600" role="alert">{serverError}</p>}

      <div>
        <Button type="submit" disabled={isSubmitting} className="bg-[#3A5248]">
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
