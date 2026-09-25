import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";
import { Button } from "./button";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Why us", to: "/why-us" },
  { label: "Case studies", to: "/case-studies" },
  { label: "Tech stack", to: "/tech-stack" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="mx-auto flex h-20 max-w-site items-center justify-between gap-6 px-page sm:h-24">
        <Link to="/" aria-label="Codematic Labs home" onClick={() => setOpen(false)}><BrandLogo inverted nav /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Link to="/contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></Link></div>
        <Button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} variant="ghost" size="icon" className="text-foreground lg:hidden" onClick={() => setOpen((value) => !value)}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</Button>
      </div>
      {open && <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation"><Link to="/" onClick={() => setOpen(false)}>Home</Link>{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link to="/contact" onClick={() => setOpen(false)} className="button-solid mt-4">Talk to our team <ArrowUpRight className="size-4" /></Link></nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-site px-page py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div><BrandLogo inverted nav /><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Building software. Delivering solutions. No theatre—just thoughtful products that work.</p><div className="mt-6 flex gap-3"><a className="social-link" href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin className="size-4" /></a><a className="social-link" href="https://github.com" aria-label="GitHub"><Github className="size-4" /></a></div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3"><FooterColumn title="Services" links={[{label:"Web development",to:"/services"},{label:"UI/UX design",to:"/services"},{label:"Mobile apps",to:"/services"}]} /><FooterColumn title="Company" links={[{label:"Why choose us",to:"/why-us"},{label:"Case studies",to:"/case-studies"},{label:"Tech stack",to:"/tech-stack"}]} /><FooterColumn title="Contact" links={[{label:"Start a project",to:"/contact"},{label:"hello@codematiclabs.com",to:"/contact"}]} /></div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Codematic Labs. All rights reserved.</div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: "/services" | "/why-us" | "/case-studies" | "/tech-stack" | "/contact" }[] }) {
  return <div><h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">{title}</h2><ul className="mt-5 space-y-3 text-sm text-muted-foreground">{links.map((link) => <li key={link.label}><Link to={link.to} className="transition-colors hover:text-primary-glow">{link.label}</Link></li>)}</ul></div>;
}
