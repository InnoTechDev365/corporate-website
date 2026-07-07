import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Globe, Network, Cpu } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="Corporate skyscraper atrium" className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Precision engineering for the <span className="text-primary">enterprise.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Nexus Consulting partners with Fortune 500 leaders to architect scalable, resilient, and intelligent systems.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-xl h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl h-14 px-8 text-base bg-background/50 backdrop-blur" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-y bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Minimalist text representations of logos */}
            <span className="text-2xl font-bold text-foreground">ACME Corp</span>
            <span className="text-2xl font-black tracking-tighter text-foreground">NEXGEN</span>
            <span className="text-2xl font-serif italic text-foreground">Stark Ind.</span>
            <span className="text-2xl font-bold tracking-widest text-foreground">GLOBEX</span>
            <span className="text-2xl font-medium text-foreground">Umbrella</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            <AnimatedCounter end={500} suffix="+" label="Enterprise Clients" />
            <AnimatedCounter end={4.2} prefix="$" suffix="B" label="Value Delivered" />
            <AnimatedCounter end={98} suffix="%" label="Client Retention" />
            <AnimatedCounter end={18} label="Industry Verticals" />
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Architecting the future.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">We don't just advise. We build, deploy, and scale solutions that redefine industry standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Card 1 */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              className="md:col-span-2 row-span-1 bg-card rounded-3xl p-8 border shadow-sm hover:shadow-md transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Network size={200} />
              </div>
              <Network className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3">Enterprise Architecture</h3>
              <p className="text-muted-foreground max-w-md">Modernize legacy systems with scalable, cloud-native microservices designed for high availability and zero downtime.</p>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-3xl p-8 shadow-sm text-primary-foreground hover:shadow-lg transition-all group"
            >
              <Zap className="w-10 h-10 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-3">Rapid Acceleration</h3>
              <p className="text-primary-foreground/80">Accelerate time-to-market by 40% with our proprietary deployment frameworks.</p>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-8 border shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              <ShieldCheck className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3">Zero-Trust Security</h3>
              <p className="text-muted-foreground">Military-grade compliance and data protection protocols baked into every layer.</p>
            </motion.div>

            {/* Bento Card 4 */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 row-span-1 bg-card rounded-3xl p-8 border shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <Cpu className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-3">AI & Automation</h3>
                  <p className="text-muted-foreground">Implement predictive models and intelligent workflows that reduce operational overhead by up to 60%.</p>
                  <Link href="/services" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary group/link">
                    Read case study
                    <ArrowRight className="w-4 h-4 transition-transform duration-[1000ms] ease-in-out group-hover/link:translate-x-3" />
                  </Link>
                </div>
                <div className="w-full md:w-1/2 h-full rounded-xl bg-muted/50 overflow-hidden relative">
                   <img src="/images/team-office.png" alt="Office" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Quantifiable Impact.</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We don't deal in vanity metrics. Our engagements are structured around clear, measurable return on investment. Use our calculator to estimate potential efficiency gains for your organization.
              </p>
              <ul className="space-y-4">
                {[
                  "Average 215% ROI within year one",
                  "40% reduction in operational bottlenecks",
                  "Zero disruption during digital transition"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ROICalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Globe className="w-16 h-16 mx-auto mb-8 text-primary opacity-80" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-background">Ready to scale?</h2>
          <p className="text-xl text-muted/80 mb-10">
            Partner with Nexus to transform your technological infrastructure and dominate your market.
          </p>
          <Button size="lg" className="rounded-xl h-14 px-10 text-lg" asChild>
            <Link href="/contact">Initiate Contact</Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
