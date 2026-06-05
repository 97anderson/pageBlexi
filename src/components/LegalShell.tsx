import Image from "next/image";

import blexiLogo from "@/app/img/blexi_logo.png";
import { Footer } from "@/components/sections/Footer";

export interface TocItem {
  id: string;
  label: string;
}

interface LegalShellProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalShell({
  title,
  subtitle,
  lastUpdated,
  toc,
  children,
}: LegalShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bgMain">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
        <div className="container-page flex h-14 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center overflow-hidden rounded-xl bg-white shadow ring-1 ring-black/[0.06]">
              <Image src={blexiLogo} alt="BLEXI" width={22} height={22} />
            </span>
            <span className="font-grotesk text-base font-extrabold tracking-tight text-brand-textDark">
              BLEXI
            </span>
          </a>
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-brand-textMuted transition-colors hover:text-brand-textDark"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver al inicio
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-grid-dark border-b border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-page py-12 sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            {lastUpdated}
          </span>
          <h1 className="mt-4 max-w-2xl font-grotesk text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="container-page flex-1 py-14">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* TOC sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Contenido
              </p>
              <ul className="space-y-0.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-lg px-3 py-1.5 text-sm text-brand-textMuted transition-colors hover:bg-slate-100 hover:text-brand-textDark"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="min-w-0">{children}</article>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Shared section primitives ─────────────────────────────────────── */

export function LegalSection({
  id,
  number,
  title,
  children,
  last = false,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-brand-primary">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="font-grotesk text-xl font-bold text-brand-textDark">
            {title}
          </h2>
          <div className="mt-4 space-y-4">{children}</div>
        </div>
      </div>
      {!last && <div className="my-10 h-px bg-brand-border" />}
    </section>
  );
}

export function LP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-7 text-slate-600">{children}</p>
  );
}

export function LUL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2.5">{children}</ul>;
}

export function LLI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-7 text-slate-600">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
      <span>{children}</span>
    </li>
  );
}

export function LB({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-brand-textDark">{children}</strong>
  );
}

export function LA({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="font-medium text-brand-primary underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

export function LCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-700">
      {children}
    </code>
  );
}

export function LInfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-cyan-100 bg-cyan-50/60 px-5 py-4 text-[14px] leading-relaxed text-slate-600">
      {children}
    </div>
  );
}
