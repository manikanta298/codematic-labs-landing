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
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  useReveal();

  return (
    <main className="overflow-x-clip">
      <section className="home-hero">
        <img src={heroImage} alt="Abstract blue glass forms representing connected software systems" width={1920} height={1088} className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[760px] max-w-site items-end px-page pb-16 pt-36 sm:pb-24 lg:min-h-[850px]">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
            <div className="max-w-[980px]">
              <p className="index-label mb-7"><span>01</span> Product engineering studio</p>
              <h1 className="display-title max-w-6xl"><AnimatedWords text="Real software. Built to move." accentFrom={2} /></h1>
            </div>
            <div className="hero-brief">
              <p className="text-base leading-7 text-muted-foreground">We turn ambitious ideas into dependable digital products—clear in purpose, solid in production, and ready to scale.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></Link>
                <Link to="/case-studies" className="button-quiet">See our work <MoveRight className="size-4" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-mark" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </section>

      <LogoMarquee />

      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <div><p className="index-label"><span>02</span> Capabilities</p><h2 className="section-title mt-5">Built around the <span className="text-gradient">outcome.</span></h2></div>
            <p>Focused teams combine product thinking, expressive design, and robust engineering to build software that earns its place.</p>
          </div>
          <div className="capability-index mt-14">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="capability-row group" data-reveal>
                <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="capability-icon"><Icon className="size-5" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/services" aria-label={`Explore ${title}`} className="capability-link"><ArrowUpRight className="size-5" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <KineticShowcase />

      <section className="section-shell editorial-band">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <div><p className="index-label"><span>03</span> Our method</p><h2 className="section-title mt-5">Decide clearly. <span className="text-gradient">Deliver confidently.</span></h2></div>
            <p>A practical path from first conversation to production, with visible progress and useful decisions at every stage.</p>
          </div>
          <div className="process-grid mt-14">
            {process.map(({ number, icon: Icon, title, text, outcomes }) => (
              <article key={number} className="process-card" data-reveal>
                <div className="flex items-start justify-between"><span className="process-number">{number}</span><Icon className="size-6 text-primary-glow" /></div>
                <h3>{title}</h3><p>{text}</p>
                <ul>{outcomes.map((item) => <li key={item}><Check className="size-4" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <Link to="/why-us" className="button-outline mt-10">See how we deliver <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <div><p className="index-label"><span>04</span> Selected work</p><h2 className="section-title mt-5">Proof in the <span className="text-gradient">product.</span></h2></div>
            <div><p className="sample-note">Sample portfolio content — replace with client work</p><Link to="/case-studies" className="card-link mt-5">View all projects <ArrowRight className="size-4" /></Link></div>
          </div>
          <div className="project-editorial-grid mt-12">
            {projects.map((project, index) => (
              <Link key={project.slug} to="/case-studies/$slug" params={{ slug: project.slug }} className={`project-editorial-card group project-card-${index + 1}`} data-reveal>
                <div className="media-frame"><img src={project.image} alt="Representative sample project" width={1408} height={912} loading="lazy" /></div>
                <div className="project-card-copy"><div><p>{project.category}</p><span>{project.result}</span></div><h3>{project.title}</h3><span className="project-name">{project.name}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

function LogoMarquee() {
  return <section className="trust-band"><div className="mx-auto grid max-w-site gap-7 px-page md:grid-cols-[210px_1fr] md:items-center"><p className="index-label"><span>Trusted</span> Sample client names</p><div className="marquee"><div className="marquee-track">{[...clientNames, ...clientNames].map((name, index) => <span className="marquee-item" key={`${name}-${index}`}>{name}</span>)}</div></div></div></section>;
}

function KineticShowcase() {
  const items = [...services.slice(0, 4), ...services.slice(0, 4)];
  const reverse = [...services.slice(2, 6), ...services.slice(2, 6)];
  return <section className="loop-section" aria-label="Codematic Labs capabilities in motion"><div className="loop-heading mx-auto max-w-site px-page" data-reveal><p className="index-label"><span>Built to move</span> One connected team</p><p>Strategy, design, and engineering moving in the same direction.</p></div><div className="loop-viewport"><div className="loop-track">{items.map(({ icon: Icon, title }, index) => <div className="loop-card" key={`${title}-forward-${index}`}><Icon className="size-5" /><span>{title}</span><small>Codematic Labs</small></div>)}</div><div className="loop-track loop-track-reverse">{reverse.map(({ icon: Icon, title }, index) => <div className="loop-card loop-card-muted" key={`${title}-reverse-${index}`}><Icon className="size-5" /><span>{title}</span><small>From idea to launch</small></div>)}</div></div></section>;
}

function CTA() {
  return <section className="cta-band"><div className="cta-rule" aria-hidden="true" /><div className="relative mx-auto grid max-w-site gap-10 px-page lg:grid-cols-[1fr_auto] lg:items-end" data-reveal><div><p className="index-label"><span>05</span> Start a project</p><h2 className="section-title mt-5 max-w-4xl">Let’s build something <span className="text-gradient">that works.</span></h2></div><Link to="/contact" className="button-solid">Start a conversation <ArrowUpRight className="size-4" /></Link></div></section>;
}