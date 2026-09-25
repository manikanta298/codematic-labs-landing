import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import heroImage from "../assets/hero-tech.jpg";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { clientNames, process, projects, services } from "../lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Codematic Labs — Full-Stack Software & UI/UX Studio" },
    { name: "description", content: "Codematic Labs designs and builds dependable web, mobile, commerce, and internal software products." },
    { property: "og:title", content: "Codematic Labs — Building software. Delivering solutions." },
    { property: "og:description", content: "A full-stack software development and UI/UX studio focused on shipping real products." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return <main className="overflow-x-clip">
    <section className="relative min-h-[780px] overflow-hidden pt-24">
      <img src={heroImage} alt="Abstract blue glass forms representing connected software systems" width={1920} height={1088} className="hero-image" />
      <div className="hero-overlay" />
      <div className="relative mx-auto flex min-h-[680px] max-w-site items-end px-page pb-20 pt-24 sm:pb-24">
        <div className="max-w-[900px]">
          <p className="eyebrow mb-7">Software development, without the runaround</p>
          <h1 className="display-title max-w-5xl"><AnimatedWords text="Real software. Built to move." accentFrom={2} /></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">We design and engineer dependable digital products—clear in purpose, solid in production, and ready for what comes next.</p>
          <div className="mt-10 flex flex-wrap gap-4"><Link to="/contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></Link><Link to="/case-studies" className="button-outline">See our work <MoveRight className="size-4" /></Link></div>
        </div>
      </div>
    </section>
    <LogoMarquee />
    <section className="section-shell"><div className="mx-auto max-w-site px-page"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end" data-reveal><div><p className="eyebrow">What we do</p><h2 className="section-title mt-5">From idea to <span className="text-gradient">working product.</span></h2></div><p className="max-w-xl justify-self-end text-lg leading-8 text-muted-foreground">Focused product teams combine clear thinking, expressive design, and robust engineering to create software that earns its place in your business.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.slice(0,6).map(({icon:Icon,title,description})=><article key={title} className="dark-card group p-7 sm:p-8" data-reveal><div className="icon-badge"><Icon className="size-5" /></div><h3 className="mt-10 text-xl font-extrabold">{title}</h3><p className="mt-4 min-h-20 leading-7 text-muted-foreground">{description}</p><Link to="/services" className="card-link mt-8">Explore service <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></article>)}</div></div></section>
    <section className="section-shell border-y border-border bg-surface"><div className="mx-auto max-w-site px-page"><div data-reveal><p className="eyebrow">Our method</p><h2 className="section-title mt-5 max-w-4xl">Clarity at every stage. <span className="text-gradient">Momentum throughout.</span></h2></div><div className="mt-14 divide-y divide-border border-y border-border">{process.map(({number,icon:Icon,title,text,outcomes})=><article key={number} className="grid gap-7 py-9 md:grid-cols-[70px_.7fr_1fr_1fr] md:py-12" data-reveal><span className="font-mono text-sm text-primary-glow">{number}</span><div><div className="icon-badge"><Icon className="size-5" /></div><h3 className="mt-5 text-2xl font-extrabold">{title}</h3></div><p className="text-lg leading-8 text-muted-foreground">{text}</p><ul className="space-y-3">{outcomes.map((item)=><li key={item} className="flex gap-3 text-sm font-bold"><Check className="mt-0.5 size-4 text-primary-glow" />{item}</li>)}</ul></article>)}</div><Link to="/why-us" className="button-outline mt-10">See how we deliver <ArrowRight className="size-4" /></Link></div></section>
    <section className="section-shell"><div className="mx-auto max-w-site px-page"><div className="flex flex-wrap items-end justify-between gap-8" data-reveal><div><p className="eyebrow">Selected work</p><h2 className="section-title mt-5">Products built for <span className="text-gradient">real outcomes.</span></h2></div><Link to="/case-studies" className="button-outline">View all projects <ArrowRight className="size-4" /></Link></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-primary-glow">Sample portfolio content — replace with client work</p><div className="mt-10 grid gap-5 lg:grid-cols-3">{projects.map((project)=><Link key={project.slug} to="/case-studies/$slug" params={{slug:project.slug}} className="dark-card group overflow-hidden"><div className="media-frame border-0 border-b"><img src={project.image} alt="Representative sample project" width={1408} height={912} loading="lazy" className="aspect-[1.45] w-full object-cover" /></div><div className="p-6"><div className="flex items-center justify-between gap-4"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-glow">{project.category}</p><span className="text-sm font-extrabold text-foreground">{project.result}</span></div><p className="mt-5 text-sm font-bold text-muted-foreground">{project.name}</p><h3 className="mt-2 text-2xl font-extrabold leading-tight">{project.title}</h3></div></Link>)}</div></div></section>
    <CTA />
  </main>;
}

function LogoMarquee(){ const names=[...clientNames,...clientNames]; return <section className="border-y border-border py-8"><div className="mx-auto grid max-w-site gap-6 px-page md:grid-cols-[190px_1fr] md:items-center"><p className="text-xs font-bold uppercase tracking-[.15em] text-muted-foreground">Trusted by ambitious teams<br/>Sample client names</p><div className="marquee"><div className="marquee-track">{names.map((name,index)=><span className="marquee-item" key={`${name}-${index}`}>{name}</span>)}</div></div></div></section> }
function CTA(){ return <section className="relative overflow-hidden border-t border-border py-24 sm:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_42%)]"/><div className="relative mx-auto flex max-w-site flex-col items-start justify-between gap-10 px-page lg:flex-row lg:items-end" data-reveal><div><p className="eyebrow">Ready when you are</p><h2 className="section-title mt-5 max-w-4xl">Let’s build something <span className="text-gradient">that works.</span></h2></div><Link to="/contact" className="button-solid">Start a conversation <ArrowUpRight className="size-4" /></Link></div></section> }