"use client";

import { MessageCircle } from "lucide-react";

type StickyWhatsAppCTAProps = {
  href: string;
  label?: string;
};

export function StickyWhatsAppCTA({
  href,
  label = "Probar en WhatsApp",
}: StickyWhatsAppCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bgMain via-brand-bgMain/95 to-transparent" />
      <div className="relative mx-auto w-full max-w-xl px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-base font-extrabold text-slate-900 shadow-xl shadow-emerald-300/40 ring-1 ring-emerald-500/30 transition hover:brightness-[0.98] active:translate-y-[1px]"
        >
          <MessageCircle className="size-5" strokeWidth={2.2} aria-hidden />
          {label}
        </a>
      </div>
    </div>
  );
}

