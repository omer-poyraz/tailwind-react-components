"use client";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import {
  Check, X, Info, AlertTriangle, Search, Star, ArrowRight, Github,
  TrendingUp, Users, DollarSign, Bell, ChevronRight,
} from "lucide-react";

const BUNDLE = "https://omerpoyraz.gumroad.com/l/nextjs-admin-bundle";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-display text-lg font-bold mb-4">{title}</h2>
      <div className="card p-6 flex flex-wrap items-center gap-4">{children}</div>
    </section>
  );
}

export default function Home() {
  const [tab, setTab] = useState(0);
  const [on, setOn] = useState(true);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center gap-3">
          <span className="font-display font-bold text-lg">Tailwind<span className="text-[var(--brand)]">UI</span></span>
          <span className="text-xs text-[var(--muted)] hidden sm:inline">· free copy-paste components</span>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <a href="https://github.com/omer-poyraz/tailwind-react-components" className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--surface-2)]"><Github size={16} /> Star</a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">Tailwind React Components</h1>
          <p className="text-[var(--muted)] mt-4">A free, growing set of clean, accessible UI components for Next.js + Tailwind. Copy, paste, ship. Dark mode included.</p>
        </div>

        <div className="space-y-10">
          {/* BUTTONS */}
          <Section id="buttons" title="Buttons">
            <button className="h-10 px-4 rounded-lg bg-[var(--brand)] text-white text-sm font-medium hover:opacity-90">Primary</button>
            <button className="h-10 px-4 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--surface-2)]">Secondary</button>
            <button className="h-10 px-4 rounded-lg bg-[var(--brand-soft)] text-[var(--brand)] text-sm font-medium">Soft</button>
            <button className="h-10 px-4 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)]">Ghost</button>
            <button className="h-10 px-4 rounded-lg bg-rose-600 text-white text-sm font-medium hover:opacity-90">Danger</button>
            <button className="inline-flex items-center gap-1.5 h-10 px-4 rounded-lg bg-[var(--brand)] text-white text-sm font-medium">Continue <ArrowRight size={15} /></button>
          </Section>

          {/* BADGES */}
          <Section id="badges" title="Badges">
            {[["Active", "bg-emerald-100 text-emerald-700"], ["Pending", "bg-amber-100 text-amber-700"], ["Error", "bg-rose-100 text-rose-700"], ["Info", "bg-sky-100 text-sky-700"], ["Neutral", "bg-gray-200 text-gray-700"]].map(([l, c]) => (
              <span key={l} className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${c}`}>{l}</span>
            ))}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--brand-soft)] text-[var(--brand)]"><Star size={11} /> Pro</span>
          </Section>

          {/* ALERTS */}
          <Section id="alerts" title="Alerts">
            <div className="w-full space-y-3">
              {[
                { Icon: Info, wrap: "bg-sky-50 border-sky-200 text-sky-800", icon: "text-sky-500", msg: "Heads up — this is an informational message." },
                { Icon: Check, wrap: "bg-emerald-50 border-emerald-200 text-emerald-800", icon: "text-emerald-500", msg: "Success! Your changes have been saved." },
                { Icon: AlertTriangle, wrap: "bg-amber-50 border-amber-200 text-amber-800", icon: "text-amber-500", msg: "Warning — please review before continuing." },
                { Icon: X, wrap: "bg-rose-50 border-rose-200 text-rose-800", icon: "text-rose-500", msg: "Error — something went wrong." },
              ].map(({ Icon, wrap, icon, msg }, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${wrap}`}>
                  <Icon size={17} className={`${icon} shrink-0`} /> <span>{msg}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* STAT CARDS */}
          <Section id="stats" title="Stat Cards">
            {[[DollarSign, "Revenue", "$48,210", "+12.4%"], [Users, "Users", "8,942", "+6.1%"], [TrendingUp, "Growth", "23%", "+3.2%"]].map(([Icon, l, v, d]: any, i) => (
              <div key={i} className="card p-5 flex-1 min-w-[180px]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">{l}</span>
                  <Icon size={16} className="text-[var(--brand)]" />
                </div>
                <div className="text-2xl font-bold mt-2">{v}</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">{d} vs last week</div>
              </div>
            ))}
          </Section>

          {/* INPUTS */}
          <Section id="inputs" title="Inputs">
            <div className="w-full grid sm:grid-cols-2 gap-4">
              <input placeholder="Default input" className="h-11 px-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] outline-none focus:border-[var(--brand)] text-sm" />
              <div className="flex items-center gap-2 h-11 px-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] focus-within:border-[var(--brand)]">
                <Search size={16} className="text-[var(--muted)]" />
                <input placeholder="Search…" className="bg-transparent outline-none text-sm w-full" />
              </div>
            </div>
          </Section>

          {/* TOGGLE + AVATARS */}
          <Section id="toggle" title="Toggle & Avatars">
            <button onClick={() => setOn((v) => !v)} className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-[var(--brand)]" : "bg-[var(--border)]"}`}>
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${on ? "translate-x-5" : ""}`} />
            </button>
            <span className="text-sm text-[var(--muted)]">{on ? "On" : "Off"}</span>
            <div className="flex -space-x-2 ml-4">
              {["A", "B", "C", "D"].map((x, i) => (
                <span key={x} className="grid place-items-center w-9 h-9 rounded-full ring-2 ring-[var(--surface)] bg-[var(--brand-soft)] text-[var(--brand)] text-sm font-semibold">{x}</span>
              ))}
              <span className="grid place-items-center w-9 h-9 rounded-full ring-2 ring-[var(--surface)] bg-[var(--surface-2)] text-[var(--muted)] text-xs font-semibold">+6</span>
            </div>
          </Section>

          {/* TABS */}
          <Section id="tabs" title="Tabs">
            <div className="w-full">
              <div className="flex gap-1 border-b border-[var(--border)]">
                {["Overview", "Activity", "Settings"].map((t, i) => (
                  <button key={t} onClick={() => setTab(i)} className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${tab === i ? "border-[var(--brand)] text-[var(--brand)]" : "border-transparent text-[var(--muted)] hover:text-[var(--fg)]"}`}>{t}</button>
                ))}
              </div>
              <div className="py-4 text-sm text-[var(--muted)]">Content for the <b className="text-[var(--fg)]">{["Overview", "Activity", "Settings"][tab]}</b> tab.</div>
            </div>
          </Section>

          {/* TABLE */}
          <Section id="table" title="Table">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="text-left text-[var(--muted)] border-b border-[var(--border)]">
                  <th className="font-medium py-2.5 pr-4">Name</th><th className="font-medium py-2.5 pr-4">Role</th><th className="font-medium py-2.5">Status</th>
                </tr></thead>
                <tbody>
                  {[
                    { name: "Ava Chen", role: "Admin", cls: "bg-emerald-100 text-emerald-700", status: "Active" },
                    { name: "Liam Ng", role: "Editor", cls: "bg-amber-100 text-amber-700", status: "Pending" },
                    { name: "Mia Park", role: "Viewer", cls: "bg-gray-100 text-gray-700", status: "Inactive" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-[var(--border)] last:border-0">
                      <td className="py-2.5 pr-4 font-medium">{r.name}</td><td className="py-2.5 pr-4 text-[var(--muted)]">{r.role}</td>
                      <td className="py-2.5"><span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${r.cls}`}>{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* PROGRESS + PAGINATION */}
          <Section id="misc" title="Progress & Pagination">
            <div className="w-full space-y-4">
              <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden"><div className="h-full bg-[var(--brand)] w-2/3" /></div>
              <div className="flex items-center gap-1">
                {["1", "2", "3", "…", "8"].map((p, i) => (
                  <button key={i} className={`grid place-items-center w-9 h-9 rounded-lg text-sm font-medium ${p === "2" ? "bg-[var(--brand)] text-white" : "border border-[var(--border)] hover:bg-[var(--surface-2)]"}`}>{p}</button>
                ))}
                <button className="grid place-items-center w-9 h-9 rounded-lg border border-[var(--border)] hover:bg-[var(--surface-2)]"><ChevronRight size={16} /></button>
              </div>
            </div>
          </Section>
        </div>

        {/* CTA */}
        <div className="card p-8 mt-14 text-center" style={{ background: "var(--brand-soft)" }}>
          <Bell size={22} className="mx-auto text-[var(--brand)]" />
          <h2 className="font-display text-2xl font-bold mt-3">Want full dashboards, not just components?</h2>
          <p className="text-[var(--muted)] mt-2 max-w-lg mx-auto">Get six production-ready Next.js admin dashboards — e-commerce, CRM, SaaS metrics, blog, projects & help desk.</p>
          <a href={BUNDLE} className="inline-flex items-center gap-2 mt-5 h-11 px-6 rounded-xl bg-[var(--brand)] text-white font-medium">Get all 6 for $99 <ArrowRight size={17} /></a>
        </div>

        <footer className="mt-12 pt-8 border-t border-[var(--border)] text-sm text-[var(--muted)] flex flex-col sm:flex-row justify-between gap-3">
          <span>MIT © Ömer Poyraz</span>
          <a href="https://github.com/omer-poyraz/tailwind-react-components" className="hover:text-[var(--fg)] inline-flex items-center gap-1.5"><Github size={15} /> GitHub</a>
        </footer>
      </div>
    </div>
  );
}
