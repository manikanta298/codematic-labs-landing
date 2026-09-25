import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Blocks, Check,
  ChevronDown, Code2, Compass, Figma, Globe2, Layers3, Menu, MonitorSmartphone,
  PenTool, Quote, Rocket, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Wrench, X,
} from "lucide-react";
import { BrandLogo } from "../components/brand-logo";
import { Button } from "../components/button";
import commerceImage from "../assets/case-commerce.jpg";
import cafeImage from "../assets/case-cafe-pos.jpg";
import communityImage from "../assets/case-community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codematic Labs — Software Development & UI/UX Studio" },
      { name: "description", content: "Codematic Labs designs and builds reliable web, mobile, commerce, and internal software products." },
      { property: "og:title", content: "Codematic Labs — Building software. Delivering solutions." },
      { property: "og:description", content: "A full-stack software development and UI/UX studio focused on shipping real products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Code2, title: "Full-Stack Web Development", text: "Modern MERN applications engineered for speed, scale, and long-term maintainability." },
  { icon: Figma, title: "UI/UX Design", text: "Research-led interfaces that make complex workflows feel clear, natural, and useful." },
  { icon: ShoppingBag, title: "E-commerce Solutions", text: "High-converting storefronts, secure checkout flows, and connected operations." },
  { icon: Wrench, title: "Business & Internal Tooling", text: "Purpose-built dashboards and systems that replace bottlenecks with momentum." },
  { icon: Smartphone, title: "Mobile Apps", text: "Responsive, dependable mobile products designed around real-world use." },
  { icon: Globe2, title: "Marketing Websites", text: "Fast, distinctive websites that turn your positioning into measurable action." },
];

const projects = [
  { image: commerceImage, category: "E-commerce · Sample project", title: "A considered storefront built to convert", name: "North & Form" },
  { image: cafeImage, category: "Operations · Sample project", title: "A faster point-of-sale experience for growing cafés", name: "Counterday" },
  { image: communityImage, category: "Mobile product · Sample project", title: "Connecting neighborhoods to what matters nearby", name: "LocalLoop" },
];

const testimonials = [
  { quote: "The team made a complex product feel straightforward. Every sprint moved us closer to something our people could actually use.", name: "Jordan Miles", role: "Product Director · Sample testimonial" },
  { quote: "Clear communication, thoughtful design, and dependable delivery. We always knew what was happening and why.", name: "Amara Reed", role: "Founder · Sample testimonial" },
  { quote: "They understood the business problem before reaching for technology. That discipline changed the quality of the result.", name: "Theo Bennett", role: "Operations Lead · Sample testimonial" },
];

function scrollTrack(ref: React.RefObject<HTMLDivElement | null>, direction: number) {
  ref.current?.scrollBy({ left: direction * Math.min(ref.current.clientWidth * 0.84, 660), behavior: "smooth" });
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.dataset.visible = "true");
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).dataset.visible = "true";
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav/90 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-site grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-page sm:h-24">
          <a href="#top" className="min-w-0" aria-label="Codematic Labs home"><BrandLogo inverted /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#services">What we do <ChevronDown className="size-3.5" /></a>
            <a className="nav-link" href="#method">How we deliver <ChevronDown className="size-3.5" /></a>
            <a className="nav-link" href="#work">Our work</a>
            <a className="nav-link" href="#insights">Insights</a>
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="#work" className="text-sm font-bold text-nav-foreground transition-opacity hover:opacity-70">See our work</a>
            <a href="#contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></a>
          </div>
          <Button aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} variant="ghost" size="icon" className="text-nav-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-nav-border bg-nav px-page pb-8 pt-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {[['What we do', '#services'], ['How we deliver', '#method'], ['Our work', '#work'], ['Insights', '#insights']].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-nav-border py-4 text-lg font-bold text-nav-foreground">{label}</a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="button-solid mt-5">Talk to our team <ArrowUpRight className="size-4" /></a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="hero-mesh relative min-h-[760px] bg-hero pt-24 text-hero-foreground sm:pt-28">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
        <div className="relative mx-auto flex min-h-[635px] max-w-site flex-col justify-end px-page pb-16 pt-28 sm:pb-20 lg:pt-36">
          <div className="max-w-5xl" data-reveal>
            <p className="eyebrow text-hero-muted"><span className="eyebrow-line bg-primary" />Software development, without the runaround.</p>
            <h1 className="mt-7 max-w-5xl font-display text-[clamp(3.4rem,8vw,7.7rem)] font-extrabold leading-[0.91] tracking-tight">
              Software that works.<br /><span className="font-serif font-normal italic text-hero-accent">Results that last.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">
              We turn ambitious ideas into dependable digital products—designed with intent, engineered for scale, and shipped without the theatre.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></a>
              <a href="#work" className="button-outline-light">See our work <ArrowDownRight className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="relative border-t border-nav-border">
          <div className="mx-auto grid max-w-site gap-7 px-page py-8 md:grid-cols-[180px_1fr] md:items-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-hero-muted">Trusted by teams<br />building what’s next</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm font-extrabold tracking-[0.12em] text-client-logo sm:grid-cols-3 lg:grid-cols-5">
              <span>ARCLINE</span><span>NORTHSTAR</span><span>VANTAGE</span><span>BRIGHTCO</span><span>FIELDWORK</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface" id="why-us">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <p className="eyebrow"><span className="eyebrow-line" />Why Codematic Labs</p>
            <h2>We close the gap between<br /><span className="font-serif font-normal italic text-primary">good ideas and working software.</span></h2>
          </div>
          <div className="mt-16 grid border-y border-border md:grid-cols-3">
            {[
              ["01", "Built for the real world", "Practical decisions, durable architecture, and software your team can confidently own."],
              ["02", "One team, end to end", "Strategy, product design, and engineering work together from the first conversation to launch."],
              ["03", "Progress you can see", "Clear milestones, useful demos, and honest communication keep delivery moving and risks visible."],
            ].map(([n, title, text], index) => (
              <article key={n} data-reveal className={`py-10 md:px-8 md:py-12 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
                <span className="font-mono text-sm font-bold text-primary">{n}</span>
                <h3 className="mt-14 text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="mx-auto max-w-site px-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end" data-reveal>
            <div><p className="eyebrow"><span className="eyebrow-line" />What we do</p><h2>Everything needed<br />to move from idea<br /><span className="font-serif font-normal italic text-primary">to impact.</span></h2></div>
            <p className="max-w-xl justify-self-end text-lg leading-8 text-muted-foreground">Focused teams combine product thinking, expressive design, and robust engineering to create software that earns its place in your business.</p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-card group" data-reveal>
                <div className="icon-badge"><Icon className="size-5" /></div>
                <h3 className="mt-10 text-xl font-extrabold">{title}</h3>
                <p className="mt-4 min-h-20 leading-7 text-muted-foreground">{text}</p>
                <a href="#contact" className="card-link">Explore service <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="section-shell bg-brand-wash">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal><p className="eyebrow"><span className="eyebrow-line" />Our method</p><h2>Clarity at every stage.<br /><span className="font-serif font-normal italic text-primary">Momentum all the way through.</span></h2></div>
          <div className="mt-16 divide-y divide-border border-y border-border">
            {[
              { n: "01", icon: Compass, name: "Discover", desc: "We frame the right problem, align on the outcome, and define a focused path forward.", bullets: ["Product goals and priorities", "User and workflow insights", "Delivery roadmap"] },
              { n: "02", icon: PenTool, name: "Design", desc: "We make the experience tangible early, testing flows and technical decisions before they become expensive.", bullets: ["UX flows and prototypes", "Visual design system", "Technical architecture"] },
              { n: "03", icon: Rocket, name: "Deliver", desc: "We build in visible increments, validate continuously, and ship reliable software ready for real users.", bullets: ["Production-ready releases", "Quality assurance", "Launch and handover"] },
            ].map(({ n, icon: Icon, name, desc, bullets }) => (
              <article key={n} className="grid gap-8 py-10 md:grid-cols-[70px_1fr_1.2fr_1fr] md:items-start md:py-14" data-reveal>
                <span className="font-mono text-sm font-bold text-primary">{n}</span>
                <div><div className="icon-badge"><Icon className="size-5" /></div><h3 className="mt-5 text-3xl font-extrabold">{name}</h3></div>
                <p className="text-lg leading-8 text-muted-foreground">{desc}</p>
                <ul className="space-y-3">{bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
          <a href="#contact" className="button-dark mt-10">Start a conversation <ArrowUpRight className="size-4" /></a>
        </div>
      </section>

      <section className="section-shell bg-hero text-hero-foreground" id="engagement">
        <div className="mx-auto max-w-site px-page">
          <div className="grid gap-8 lg:grid-cols-2" data-reveal><div><p className="eyebrow text-hero-muted"><span className="eyebrow-line bg-primary" />How we engage</p><h2>Built around the way<br /><span className="font-serif font-normal italic text-hero-accent">you need to move.</span></h2></div><p className="max-w-xl self-end text-lg leading-8 text-hero-muted">Different goals call for different working models. The common thread is a senior, accountable team with your outcome in view.</p></div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg bg-dark-border lg:grid-cols-3">
            {[
              [Layers3, "Dedicated Development Team", "A stable, cross-functional team that embeds with yours and scales with the roadmap."],
              [Blocks, "Fixed-Scope Projects", "A defined outcome, clear milestones, and disciplined delivery for focused initiatives."],
              [Sparkles, "Ongoing Product Partnership", "Continuous design and engineering support to evolve, improve, and grow your product."],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Layers3;
              return <article key={title as string} className="group bg-dark-card p-8 transition-colors hover:bg-dark-card-hover sm:p-10" data-reveal><ItemIcon className="size-7 text-primary-glow" /><h3 className="mt-16 text-2xl font-extrabold">{title as string}</h3><p className="mt-4 leading-7 text-hero-muted">{text as string}</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-hero-foreground">Find the right fit <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section-shell" id="work">
        <div className="mx-auto max-w-site px-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5" data-reveal>
            <div><p className="eyebrow"><span className="eyebrow-line" />Selected work</p><h2>Products made to<br /><span className="font-serif font-normal italic text-primary">move businesses forward.</span></h2></div>
            <div className="hidden gap-2 sm:flex"><Button variant="outline" size="icon" aria-label="Previous project" onClick={() => scrollTrack(projectsRef, -1)}><ArrowLeft className="size-4" /></Button><Button variant="outline" size="icon" aria-label="Next project" onClick={() => scrollTrack(projectsRef, 1)}><ArrowRight className="size-4" /></Button></div>
          </div>
          <p className="mt-7 inline-flex rounded-full bg-sample px-3 py-1.5 text-xs font-bold text-sample-foreground">Sample portfolio content — replace with client work</p>
          <div ref={projectsRef} className="carousel-track mt-10">
            {projects.map((project) => <article key={project.name} className="project-card group" data-reveal><div className="overflow-hidden"><img src={project.image} alt="Representative sample project presentation" loading="lazy" width={1408} height={912} className="aspect-[1.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div><div className="p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{project.category}</p><p className="mt-3 text-sm font-bold text-muted-foreground">{project.name}</p><h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">{project.title}</h3><a href="#contact" className="card-link">Read case study <ArrowUpRight className="size-4" /></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell bg-surface" id="testimonials">
        <div className="mx-auto max-w-site px-page">
          <div className="grid gap-6 border-b border-border pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end" data-reveal><div><p className="eyebrow"><span className="eyebrow-line" />What partnership feels like</p><div className="mt-8 text-7xl font-extrabold text-primary sm:text-9xl">100%</div><p className="mt-3 max-w-sm text-xl font-bold">Focused on software people can depend on.</p></div><blockquote className="max-w-2xl justify-self-end font-serif text-3xl italic leading-tight text-brand-ink sm:text-5xl">“Delivery works best when trust is built into the process—not added at the end.”</blockquote></div>
          <div className="mt-12 flex justify-end gap-2"><Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => scrollTrack(quotesRef, -1)}><ArrowLeft className="size-4" /></Button><Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => scrollTrack(quotesRef, 1)}><ArrowRight className="size-4" /></Button></div>
          <div ref={quotesRef} className="carousel-track mt-6">
            {testimonials.map((item, index) => <article key={item.name} className="quote-card" data-reveal><Quote className="size-7 text-primary" /><p className="mt-10 text-xl font-bold leading-8">“{item.quote}”</p><div className="mt-10 flex items-center gap-4"><div className="grid size-11 place-items-center rounded-full bg-avatar text-sm font-extrabold text-primary">{String(index + 1).padStart(2, '0')}</div><div><p className="font-bold">{item.name}</p><p className="mt-1 text-xs text-muted-foreground">{item.role}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background py-12">
        <div className="mx-auto max-w-site px-page" data-reveal><p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Recognition & standards · sample badges</p><div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4"><Badge icon={ShieldCheck} label="Security minded" /><Badge icon={Sparkles} label="Design excellence" /><Badge icon={Code2} label="Modern engineering" /><Badge icon={MonitorSmartphone} label="Device ready" /></div></div>
      </section>

      <section className="section-shell" id="insights">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal><p className="eyebrow"><span className="eyebrow-line" />Resources</p><h2>Useful thinking for<br /><span className="font-serif font-normal italic text-primary">people building products.</span></h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ["Field guide", "Before the first sprint: five questions that save a software project", Compass],
              ["Studio notes", "Why your internal tools deserve the same care as customer products", Wrench],
              ["Product briefing", "A practical guide to balancing speed, quality, and scope", Rocket],
            ].map(([category, title, Icon], index) => { const ItemIcon = Icon as typeof Compass; return <article key={title as string} className="resource-card group" data-reveal><div className={`resource-art resource-art-${index + 1}`}><ItemIcon className="size-12" /></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{category as string} · Sample</p><h3 className="mt-4 text-xl font-extrabold leading-snug">{title as string}</h3><a href="#contact" className="card-link">Read the resource <ArrowUpRight className="size-4" /></a></div></article> })}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="cta-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-site gap-10 px-page lg:grid-cols-[1fr_auto] lg:items-end" data-reveal><div><p className="eyebrow text-primary-foreground/70"><span className="eyebrow-line bg-primary-foreground" />Ready when you are</p><h2 className="mt-7 max-w-4xl text-[clamp(3rem,6vw,6.5rem)] leading-[0.95]">Let’s build something<br /><span className="font-serif font-normal italic">that works.</span></h2></div><a href="mailto:hello@codematiclabs.com" className="button-light">Talk to our team <ArrowUpRight className="size-4" /></a></div>
      </section>

      <footer className="bg-footer text-footer-foreground">
        <div className="mx-auto max-w-site px-page pb-8 pt-16 sm:pt-20">
          <div className="grid gap-12 border-b border-footer-border pb-14 lg:grid-cols-[1.3fr_2fr]">
            <div><BrandLogo inverted /><p className="mt-7 max-w-sm leading-7 text-footer-muted">A full-stack software development and UI/UX studio building dependable digital products.</p><div className="mt-8 flex gap-3"><Social label="in" /><Social label="x" /><Social label="gh" /></div></div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4"><FooterLinks title="Services" links={["Web development", "UI/UX design", "E-commerce", "Mobile apps"]} /><FooterLinks title="Deliver" links={["Discover", "Design", "Develop", "Launch"]} /><FooterLinks title="Company" links={["Why us", "Our work", "Engagements", "Contact"]} /><FooterLinks title="Resources" links={["Field guides", "Studio notes", "Briefings", "Newsletter"]} /></div>
          </div>
          <div className="grid gap-8 border-b border-footer-border py-10 sm:grid-cols-3"><Office city="Lagos" detail="Delivery studio · Sample location" /><Office city="London" detail="Client partnerships · Sample location" /><div className="flex items-center gap-3 sm:justify-end"><ShieldCheck className="size-6 text-primary-glow" /><span className="text-xs font-bold uppercase tracking-[0.12em] text-footer-muted">Security-first delivery</span></div></div>
          <div className="flex flex-col gap-3 pt-8 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Codematic Labs. All rights reserved.</p><div className="flex gap-6"><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Accessibility</a></div></div>
        </div>
      </footer>
    </main>
  );
}

function Badge({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) { return <div className="flex min-h-24 items-center justify-center gap-3 border border-border bg-surface px-4 text-center"><Icon className="size-6 text-primary" /><span className="text-sm font-extrabold uppercase tracking-[0.1em]">{label}</span></div>; }
function Social({ label }: { label: string }) { return <a href="#top" aria-label={label} className="grid size-10 place-items-center rounded-full border border-footer-border text-xs font-extrabold uppercase transition-colors hover:bg-footer-hover">{label}</a>; }
function FooterLinks({ title, links }: { title: string; links: string[] }) { return <div><h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">{title}</h3><ul className="mt-5 space-y-3 text-sm text-footer-muted">{links.map((link) => <li key={link}><a href="#contact" className="transition-colors hover:text-footer-foreground">{link}</a></li>)}</ul></div>; }
function Office({ city, detail }: { city: string; detail: string }) { return <div><p className="font-bold">{city}</p><p className="mt-1 text-sm text-footer-muted">{detail}</p></div>; }
