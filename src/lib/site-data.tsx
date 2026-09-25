import {
  Blocks, Box, Braces, Cloud, Code2, Compass, Database, Figma, Gauge,
  GitBranch, Globe2, Layers3, LayoutDashboard, MonitorSmartphone, PenTool,
  Rocket, ServerCog, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Wrench,
  type LucideIcon,
} from "lucide-react";
import { loadImageAsset } from "./loadImageAsset";
import commerceImage from "../assets/project-commerce.jpg.asset.json";
import cafeImage from "../assets/project-cafe.jpg.asset.json";
import communityImage from "../assets/project-community.jpg.asset.json";
import webImage from "../assets/service-web.jpg.asset.json";
import uxImage from "../assets/service-ux.jpg.asset.json";
import ecommerceImage from "../assets/service-commerce.jpg.asset.json";
import toolingImage from "../assets/service-tooling.jpg.asset.json";
import mobileImage from "../assets/service-mobile.jpg.asset.json";
import marketingImage from "../assets/service-marketing.jpg.asset.json";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  { slug: "full-stack-web-development", icon: Code2, title: "Full-Stack Web Development", description: "Modern web applications engineered for speed, scale, and long-term maintainability.", details: ["Product architecture", "Frontend and backend engineering", "API and systems integration"], image: loadImageAsset(webImage), imageAlt: "Software source code open in a developer workspace" },
  { slug: "ui-ux-design", icon: Figma, title: "UI/UX Design", description: "Research-led interfaces that make complex workflows feel clear, natural, and useful.", details: ["Product discovery", "UX flows and prototyping", "Design systems"], image: loadImageAsset(uxImage), imageAlt: "Hand-drawn interface wireframes used during a product design workshop" },
  { slug: "e-commerce-solutions", icon: ShoppingBag, title: "E-commerce Solutions", description: "High-converting storefronts, secure checkout flows, and connected operations.", details: ["Custom storefronts", "Payments and fulfilment", "Commerce analytics"], image: loadImageAsset(ecommerceImage), imageAlt: "Small business owner packing skincare products for an online order" },
  { slug: "business-tooling", icon: Wrench, title: "Business & Internal Tooling", description: "Purpose-built dashboards and systems that replace bottlenecks with momentum.", details: ["Operations dashboards", "Workflow automation", "Data visualisation"], image: loadImageAsset(toolingImage), imageAlt: "Professional team reviewing operations together in a modern office" },
  { slug: "mobile-apps", icon: Smartphone, title: "Mobile Apps", description: "Responsive, dependable mobile products designed around real-world use.", details: ["Cross-platform apps", "Mobile product design", "Launch support"], image: loadImageAsset(mobileImage), imageAlt: "Person using a mobile application on a smartphone" },
  { slug: "marketing-websites", icon: Globe2, title: "Marketing Websites", description: "Fast, distinctive websites that turn your positioning into measurable action.", details: ["Creative direction", "Responsive development", "Performance and SEO"], image: loadImageAsset(marketingImage), imageAlt: "Creative team discussing a campaign around a conference table" },
];

export type Project = {
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  name: string;
  title: string;
  result: string;
  summary: string;
  challenge: string;
  approach: string;
};

export const projects: Project[] = [
  { slug: "north-and-form", image: loadImageAsset(commerceImage), imageAlt: "Contemporary retail showroom with curated product displays", category: "E-commerce · Sample project", name: "North & Form", title: "A considered storefront built to convert", result: "+38% conversion", summary: "A refined commerce experience joining product storytelling, fast discovery, and frictionless checkout.", challenge: "The sample brand needed to make a broad catalogue feel curated without slowing down frequent buyers.", approach: "We paired a modular design system with focused search, fast product comparison, and a streamlined purchase path." },
  { slug: "counterday", image: loadImageAsset(cafeImage), imageAlt: "Baristas serving a customer at a lively neighbourhood café counter", category: "Operations · Sample project", name: "Counterday", title: "A faster point-of-sale experience for growing cafés", result: "-42% order time", summary: "A resilient point-of-sale and operations platform shaped around the pace of a busy service floor.", challenge: "Disconnected tools were adding steps to every order and making end-of-day reporting harder than it needed to be.", approach: "We mapped staff workflows, reduced the core interface to essential actions, and unified ordering with live reporting." },
  { slug: "localloop", image: loadImageAsset(communityImage), imageAlt: "A diverse group collaborating around a table in a bright city office", category: "Mobile product · Sample project", name: "LocalLoop", title: "Connecting neighbourhoods to what matters nearby", result: "3.2× engagement", summary: "A community listings product that makes useful local information easier to find, trust, and act on.", challenge: "Residents had information across several channels, while organisers lacked a dependable way to reach local audiences.", approach: "We designed a location-first experience with focused categories, clear trust signals, and simple publishing tools." },
];

export const differentiators = [
  { number: "01", icon: ShieldCheck, title: "Built for the real world", text: "Practical decisions, durable architecture, and software your team can confidently own." },
  { number: "02", icon: Layers3, title: "One team, end to end", text: "Strategy, product design, and engineering work together from the first conversation to launch." },
  { number: "03", icon: Gauge, title: "Progress you can see", text: "Clear milestones, useful demos, and honest communication keep delivery moving and risks visible." },
];

export const process = [
  { number: "01", icon: Compass, title: "Discover", text: "Frame the right problem, align on outcomes, and create a focused delivery roadmap.", outcomes: ["Product priorities", "User insights", "Technical direction"] },
  { number: "02", icon: PenTool, title: "Design", text: "Make the experience tangible early and validate decisions before they become expensive.", outcomes: ["UX prototypes", "Visual system", "Solution architecture"] },
  { number: "03", icon: Rocket, title: "Deliver", text: "Build in visible increments, test continuously, and release dependable software.", outcomes: ["Production releases", "Quality assurance", "Launch support"] },
];

export const technologyGroups = [
  { title: "Frontend", description: "Fast, accessible interfaces that stay maintainable.", items: [{ name: "React", icon: Braces }, { name: "Next.js", icon: Layers3 }, { name: "TypeScript", icon: Code2 }, { name: "Tailwind CSS", icon: Sparkles }, { name: "React Native", icon: MonitorSmartphone }] },
  { title: "Backend", description: "Reliable services and APIs shaped around the product.", items: [{ name: "Node.js", icon: ServerCog }, { name: "Express", icon: Blocks }, { name: "NestJS", icon: Box }, { name: "REST & GraphQL", icon: GitBranch }] },
  { title: "Database", description: "Data models designed for clarity, performance, and growth.", items: [{ name: "PostgreSQL", icon: Database }, { name: "MongoDB", icon: Database }, { name: "Redis", icon: Gauge }, { name: "Firebase", icon: Sparkles }] },
  { title: "DevOps & Hosting", description: "Repeatable delivery, observability, and secure infrastructure.", items: [{ name: "AWS", icon: Cloud }, { name: "Vercel", icon: Globe2 }, { name: "Docker", icon: Box }, { name: "GitHub Actions", icon: GitBranch }, { name: "Cloudflare", icon: ShieldCheck }] },
];

export const clientNames = ["ARCLINE", "NORTHSTAR", "VANTAGE", "BRIGHTCO", "FIELDWORK", "ORBITAL"];
