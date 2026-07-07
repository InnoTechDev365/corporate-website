import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: 1,
    title: "Global Supply Chain Optimization",
    company: "Apex Logistics",
    industry: "Logistics",
    image: "/images/case-study-logistics.png",
    metrics: [
      { label: "Efficiency Gain", value: "34%" },
      { label: "Cost Reduction", value: "$42M" }
    ],
    summary: "Re-architected legacy tracking systems into a real-time, event-driven microservices architecture, dramatically reducing shipping delays."
  },
  {
    id: 2,
    title: "Algorithmic Trading Platform",
    company: "Meridian Capital",
    industry: "FinTech",
    image: "/images/case-study-fintech.png",
    metrics: [
      { label: "Latency Reduction", value: "12ms" },
      { label: "Throughput", value: "10x" }
    ],
    summary: "Designed a high-frequency trading backend utilizing Rust and Go, operating with near-zero latency across global exchanges."
  },
  {
    id: 3,
    title: "Automated Manufacturing Control",
    company: "Stellar Industries",
    industry: "Manufacturing",
    image: "/images/case-study-manufacturing.png",
    metrics: [
      { label: "Downtime", value: "-80%" },
      { label: "Yield Increase", value: "22%" }
    ],
    summary: "Implemented an IoT sensor network and predictive maintenance AI models to foresee equipment failures before they occur."
  },
  {
    id: 4,
    title: "Patient Data Interoperability",
    company: "Horizon Healthcare",
    industry: "Healthcare",
    image: "/images/case-study-healthcare.png",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Access Time", value: "-60%" }
    ],
    summary: "Built a secure, HIPAA-compliant data lake allowing instantaneous sharing of patient records across 400+ regional facilities."
  }
];

export default function CaseStudies() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We judge our success by the measurable impact we create. Review our track record of transforming enterprise operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground backdrop-blur hover:bg-background border-none shadow-sm px-3 py-1">
                      {study.industry}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">{study.company}</div>
                  <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                  <p className="text-muted-foreground mb-8 line-clamp-3">{study.summary}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
