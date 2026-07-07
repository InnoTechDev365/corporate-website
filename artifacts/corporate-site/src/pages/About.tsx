import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, Eye, Award, Users, Calendar, Briefcase, ChevronRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We treat every deliverable as if a Fortune 10 board will review it Monday morning.",
    span: "md:col-span-2",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No billable hour obfuscation. No scope creep. Every engagement begins with a fixed outcome and a clear price.",
    span: "",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hire in the top 1% across every discipline. Our standards are non-negotiable.",
    span: "",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We embed with your team rather than parachute in with a deck. Your success is our KPI.",
    span: "md:col-span-2",
  },
];

const leadership = [
  { name: "Eleanor Voss", title: "Chief Executive Officer", tenure: "2014 – Present", bg: "from-blue-600 to-indigo-700" },
  { name: "Marcus Tan", title: "Chief Technology Officer", tenure: "2016 – Present", bg: "from-slate-700 to-slate-900" },
  { name: "Priya Nair", title: "Managing Partner, Strategy", tenure: "2018 – Present", bg: "from-indigo-500 to-blue-700" },
  { name: "James O'Brien", title: "Managing Partner, M&A", tenure: "2019 – Present", bg: "from-slate-600 to-indigo-800" },
];

const milestones = [
  { year: "2014", event: "Founded in New York by former McKinsey and Google principals." },
  { year: "2016", event: "Surpassed 50 enterprise clients; opened San Francisco and Chicago offices." },
  { year: "2018", event: "Launched proprietary DeployIQ framework — now the industry standard for zero-downtime migrations." },
  { year: "2020", event: "Named #1 Enterprise Technology Consultancy by CIO Magazine two years running." },
  { year: "2022", event: "Expanded to London, Singapore, and Toronto. $1B in client value delivered." },
  { year: "2024", event: "Launched AI Practice Group; first firm to achieve ISO 42001 AI Management certification." },
  { year: "2026", event: "500+ enterprise clients, 18 industries, $4.2B in cumulative client value delivered." },
];

const openRoles = [
  { role: "Senior Cloud Architect", location: "New York, NY (Hybrid)", type: "Full-time" },
  { role: "AI/ML Engineering Lead", location: "San Francisco, CA (Remote OK)", type: "Full-time" },
  { role: "Enterprise Strategy Consultant", location: "Chicago, IL (Hybrid)", type: "Full-time" },
  { role: "Cybersecurity Principal", location: "Remote – US Only", type: "Full-time" },
];

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-16">

        {/* Hero */}
        <section className="py-20 md:py-28 border-b bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.p
              {...fadeUp}
              className="text-sm font-semibold uppercase tracking-widest text-primary mb-4"
            >
              About Nexus Consulting
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Built by operators.<br />Trusted by enterprises.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Nexus Consulting was founded on one belief: the best technology advice comes from people
              who have actually built and scaled the systems they recommend. We are practitioner-led,
              outcome-obsessed, and allergic to slide decks that go nowhere.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                {...fadeUp}
                className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground"
              >
                <Target className="w-10 h-10 mb-6 opacity-80" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed">
                  To deliver measurable, lasting technological transformation that enables enterprises
                  to compete and win — not just today, but for the next decade.
                </p>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="bg-card border rounded-3xl p-8 md:p-12"
              >
                <Eye className="w-10 h-10 text-primary mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A world where every enterprise, regardless of legacy constraints, can operate with
                  the agility and intelligence of a technology-native company.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values — Bento */}
        <section className="py-20 md:py-28 bg-muted/10 border-y">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Core Values</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Four principles that govern every engagement, every hire, and every decision.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`bg-card border rounded-3xl p-8 hover:shadow-md hover:border-primary/30 transition-all ${v.span}`}
                >
                  <v.icon className="w-9 h-9 text-primary mb-5" />
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Leadership</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Our partners bring decades of experience from McKinsey, Google, Palantir, and the US military.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((person, i) => (
                <motion.div
                  key={person.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl overflow-hidden border bg-card hover:shadow-lg transition-all group"
                >
                  <div className={`h-40 bg-gradient-to-br ${person.bg} flex items-end p-6`}>
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl font-bold">
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{person.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{person.title}</p>
                    <p className="text-muted-foreground text-xs">{person.tenure}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 md:py-28 bg-muted/10 border-y">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeUp} className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Our History</h2>
              <p className="text-muted-foreground text-lg">A decade of relentless forward motion.</p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-8 pl-12">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="relative"
                    data-testid={`milestone-${m.year}`}
                  >
                    <div className="absolute -left-[2.35rem] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">{m.year}</span>
                    <p className="mt-1 text-foreground leading-relaxed">{m.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Licenses & Certifications */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Licenses & Certifications</h2>
              <p className="text-muted-foreground text-lg max-w-xl">Our work meets the highest regulatory and industry standards.</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {["ISO 27001", "SOC 2 Type II", "FedRAMP Authorized", "ISO 42001 AI", "HIPAA Compliant", "PCI DSS Level 1", "CMMC Level 3", "CSA STAR"].map((cert, i) => (
                <motion.div
                  key={cert}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="border rounded-2xl px-5 py-4 flex items-center gap-3 bg-card hover:border-primary/40 transition-colors"
                >
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 md:py-28 bg-muted/10 border-y">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Open Positions</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                We hire exceptionally rarely and for the long term. If you're in the top 1% of your craft, we want to talk.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {openRoles.map((role, i) => (
                <motion.div
                  key={role.role}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex flex-col bg-card border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all group"
                  data-testid={`job-${i}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">{role.type}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{role.role}</h3>
                    <p className="text-muted-foreground text-sm">{role.location}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Full-time · On-site / Hybrid</span>
                    <Button variant="outline" size="sm" className="rounded-xl shrink-0 group-hover:border-primary group-hover:text-primary transition-colors" asChild>
                      <Link href="/contact">
                        Apply <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
