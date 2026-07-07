import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Network, Cloud, Cpu, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Strategy",
    description: "Align your technological capabilities with long-term business objectives. We map out precise roadmaps for market dominance.",
    icon: Lightbulb,
    span: "md:col-span-2 row-span-1"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems without disrupting ongoing operations.",
    icon: Network,
    span: "col-span-1 row-span-1"
  },
  {
    title: "Cloud & Infrastructure",
    description: "Resilient, highly-available architectures deployed across multi-cloud environments.",
    icon: Cloud,
    span: "col-span-1 row-span-2"
  },
  {
    title: "AI & Automation",
    description: "Intelligent workflows, LLM integration, and predictive analytics that dramatically reduce human error and operational costs.",
    icon: Cpu,
    span: "md:col-span-2 row-span-1"
  },
  {
    title: "Cybersecurity",
    description: "Zero-trust architectures and rigorous penetration testing to protect your most valuable assets.",
    icon: ShieldCheck,
    span: "col-span-1 row-span-1"
  },
  {
    title: "M&A Advisory",
    description: "Technical due diligence for enterprise acquisitions. We assess codebases, infrastructure, and team capabilities before you sign.",
    icon: TrendingUp,
    span: "col-span-1 row-span-1"
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive technical capabilities tailored for the modern enterprise. We deliver engineering excellence across six core disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[280px]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card border rounded-2xl p-6 md:p-8 flex flex-col group hover:border-primary/50 hover:shadow-lg transition-all ${service.span}`}
              >
                <div className="flex-1">
                  <service.icon className="w-9 h-9 text-primary mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
                </div>
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors cursor-default">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-[1000ms] ease-in-out group-hover:translate-x-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 bg-primary rounded-3xl p-12 md:p-20 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Require a custom engagement?</h2>
              <p className="text-primary-foreground/80 text-lg">
                For unique architectural challenges, our specialized task forces can be deployed globally within 48 hours.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="rounded-xl h-14 px-8 shrink-0" asChild>
              <Link href="/contact">Contact Leadership</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
