import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Check, ChevronDown, ClipboardList, MessageSquareText, Package, Sparkles, Store, Users, WandSparkles } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

const features = [
  { icon: WandSparkles, title: "Create content in a blink", text: "Write platform-ready posts, product copy, and campaigns in English or Bangla." },
  { icon: Package, title: "Know your stock", text: "Keep products, categories, and low-stock alerts organized in one place." },
  { icon: ClipboardList, title: "Orders, under control", text: "Track every order from confirmation to delivery without spreadsheet chaos." },
  { icon: MessageSquareText, title: "Reply with confidence", text: "Turn customer questions into thoughtful, on-brand responses in seconds." },
  { icon: BarChart3, title: "See what’s working", text: "Understand sales and business trends with a clear, practical overview." },
  { icon: Users, title: "Build customer loyalty", text: "Keep customer details and order history together for better service." },
];

const plans = [
  { name: "Free", price: "৳0", detail: "A great place to get organized.", items: ["Basic business dashboard", "Up to 20 products", "Limited AI generations", "Basic order tracking"] },
  { name: "Starter", price: "৳299", detail: "For businesses ready to grow.", items: ["Everything in Free", "More AI generations", "Product & order management", "Sales analytics", "Save generated content"], featured: true },
  { name: "Business", price: "৳699", detail: "More power for your next chapter.", items: ["Everything in Starter", "Higher AI usage limits", "Advanced analytics", "Marketing campaigns", "Priority support"] },
];

const faqs = [
  { q: "Is Bizz Manager only for online shops?", a: "Not at all. It is designed for local retailers, Facebook sellers, online shops, and independent entrepreneurs." },
  { q: "Can I use it in Bangla?", a: "Yes. AI tools are being designed to support both Bangla and English content and customer replies." },
  { q: "Will AI guarantee more sales?", a: "No tool can guarantee business results. AI suggestions are a starting point for your judgment and experience." },
  { q: "Can I change plans later?", a: "Plans are designed to be configurable, with upgrade and downgrade options. Payment processing will be enabled after provider setup." },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-brand-700">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">{title}</h2><p className="mt-4 text-base leading-7 text-slate-600">{description}</p></div>;
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
          <div className="pointer-events-none absolute -right-32 top-12 -z-10 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />
          <div className="container-wide grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr]">
            <div className="max-w-[620px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-brand-700 shadow-sm"><Sparkles size={14} /> Your AI-powered business workspace <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px]">MADE FOR GROWTH</span></div>
              <h1 className="text-[clamp(2.8rem,6vw,4.7rem)] font-bold leading-[1.05] tracking-[-.055em] text-navy-950">Run Your Business <span className="text-gradient">Smarter with AI.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Create content, manage orders, respond to customers, and grow your business from one intelligent dashboard.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700">Start free <ArrowRight size={16} /></Link>
                <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-navy-900 transition hover:border-brand-200 hover:bg-brand-50">Explore features</a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500"><span className="flex -space-x-2"><span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-orange-100 text-[10px] font-bold text-orange-700">BD</span><span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-[10px] font-bold text-violet-700">AI</span><span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[10px] font-bold text-emerald-700">SM</span></span><span>Built for the way small businesses work</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-brand-100/90 via-white to-violet-100/70 blur-xl" />
              <div className="relative rounded-[22px] border border-white bg-white p-3 shadow-[0_30px_90px_-28px_rgba(47,39,112,.25)]">
                <div className="overflow-hidden rounded-[15px] border border-slate-100 bg-[#f8f8fc]">
                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-950 text-white"><Store size={15} /></span><div><p className="text-xs font-bold text-navy-950">Good morning, Ayesha</p><p className="text-[10px] text-slate-500">Here’s your business at a glance</p></div></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">● Live overview</span></div>
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {[{ label: "Revenue", value: "৳84,250", change: "+12.8%", icon: BarChart3 }, { label: "Orders", value: "128", change: "+8.2%", icon: ClipboardList }, { label: "Products", value: "46", change: "4 low stock", icon: Package }, { label: "Customers", value: "312", change: "+18 this month", icon: Users }].map((item) => <div key={item.label} className="rounded-xl border border-slate-100 bg-white p-3.5"><div className="flex items-center justify-between"><span className="text-[10px] font-medium text-slate-500">{item.label}</span><item.icon size={14} className="text-brand-600" /></div><p className="mt-2 text-lg font-bold tracking-tight text-navy-950">{item.value}</p><p className="mt-1 text-[9px] font-semibold text-emerald-600">{item.change}</p></div>)}
                  </div>
                  <div className="mx-4 mb-4 rounded-xl border border-slate-100 bg-white p-4"><div className="flex items-center justify-between"><div><p className="text-xs font-bold text-navy-950">Sales overview</p><p className="mt-1 text-[10px] text-slate-500">Your business, moving forward</p></div><span className="rounded-lg border border-slate-100 px-2 py-1 text-[9px] text-slate-500">Last 30 days⌄</span></div><div className="mt-5 flex h-[90px] items-end gap-2">{[35, 48, 39, 68, 51, 79, 58, 88, 63, 95, 72, 100, 82, 91].map((height, i) => <div key={i} style={{ height: `${height}%` }} className={`flex-1 rounded-t-[4px] ${i === 11 ? "bg-brand-600" : "bg-brand-100"}`} />)}</div><div className="mt-2 flex justify-between text-[8px] text-slate-400"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div>
                </div>
              </div>
              <div className="absolute -left-7 top-1/3 hidden max-w-[175px] rounded-2xl border border-white bg-white p-3 shadow-card sm:block"><div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Bot size={15} /></span><span className="text-[10px] font-bold text-navy-950">AI business tip</span></div><p className="mt-2 text-[10px] leading-4 text-slate-600">Your best-selling item is almost out of stock.</p></div>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-slate-100 bg-[#fbfbfe] py-20 sm:py-24"><div className="container-wide"><SectionHeading eyebrow="A little help goes a long way" title="Everything your business needs, together." description="Less time switching between apps. More time doing the work that helps your business move forward." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-card"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white"><Icon size={20} /></span><h3 className="mt-5 text-base font-bold text-navy-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>

        <section id="how-it-works" className="py-20 sm:py-24"><div className="container-wide"><SectionHeading eyebrow="Simple from day one" title="A clearer way to run your business." description="Get set up in a few steps, then bring your everyday business work into one calm, connected workspace." /><div className="grid gap-8 md:grid-cols-3">{[{ n: "01", title: "Set up your business", text: "Add your business details and choose the tools that fit the way you work." }, { n: "02", title: "Bring your work together", text: "Organize your products, customer details, and orders in one easy-to-find place." }, { n: "03", title: "Put AI to work", text: "Create useful drafts and get practical suggestions, with you always in control." }].map((step) => <div key={step.n} className="relative border-t border-slate-200 pt-6"><span className="text-xs font-bold tracking-widest text-brand-600">STEP {step.n}</span><h3 className="mt-3 text-lg font-bold text-navy-950">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p></div>)}</div></div></section>

        <section id="pricing" className="bg-navy-950 py-20 text-white sm:py-24"><div className="container-wide"><SectionHeading eyebrow="Straightforward plans" title="Start small. Grow when you’re ready." description="Choose a plan that fits today. Prices and included limits are subject to final configuration before launch." /><div className="grid gap-4 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`rounded-2xl border p-6 ${plan.featured ? "border-brand-400 bg-white text-navy-950 shadow-glow" : "border-white/10 bg-white/[.045] text-white"}`}><div className="flex items-center justify-between"><h3 className="font-bold">{plan.name}</h3>{plan.featured && <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">Popular</span>}</div><p className={`mt-2 text-sm ${plan.featured ? "text-slate-600" : "text-slate-400"}`}>{plan.detail}</p><p className="mt-6 text-3xl font-bold">{plan.price}<span className={`ml-1 text-sm font-normal ${plan.featured ? "text-slate-500" : "text-slate-400"}`}>/ month</span></p><Link href="/auth/signup" className={`mt-5 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${plan.featured ? "bg-brand-600 text-white hover:bg-brand-700" : "border border-white/15 text-white hover:bg-white/10"}`}>Get started <ArrowRight size={15} /></Link><ul className="mt-6 space-y-3">{plan.items.map((item) => <li key={item} className={`flex gap-2.5 text-sm ${plan.featured ? "text-slate-700" : "text-slate-300"}`}><Check size={16} className="shrink-0 text-brand-400" />{item}</li>)}</ul></article>)}</div><p className="mt-5 text-center text-xs text-slate-400">No payment is collected on this preview. Billing will only activate after payment providers are configured.</p></div></section>

        <section className="py-20 sm:py-24"><div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-brand-700">A few questions</p><h2 className="text-3xl font-bold tracking-tight text-navy-950">Good to know before you start.</h2><p className="mt-4 text-sm leading-6 text-slate-600">Still curious? We’re happy to help you figure out if Bizz Manager is the right fit.</p><a href="mailto:hello@bizzmanager.app" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Talk to our team <ArrowRight size={15} /></a></div><div className="divide-y divide-slate-100">{faqs.map((faq) => <details key={faq.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-navy-950">{faq.q}<ChevronDown size={17} className="shrink-0 text-slate-400 transition group-open:rotate-180" /></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{faq.a}</p></details>)}</div></div></section>

        <section className="pb-20"><div className="container-wide"><div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-[#5141ad] px-7 py-12 text-center text-white sm:px-12"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/70">Make room for what’s next</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Your next business breakthrough starts with a simpler day.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/75">Get your business organized and put helpful AI tools in your corner.</p><Link href="/auth/signup" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-50">Start free <ArrowRight size={15} /></Link></div></div></section>
      </main>
      <Footer />
    </>
  );
}
