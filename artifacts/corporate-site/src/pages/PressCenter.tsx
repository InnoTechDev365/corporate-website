import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Newspaper, Download, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const featured = {
  category: "Company News",
  date: "June 15, 2026",
  title: "Nexus Consulting Achieves ISO 42001 AI Management Certification — First in the Industry",
  summary:
    "Nexus becomes the first enterprise consultancy globally to achieve the ISO 42001 AI Management System certification, underscoring our commitment to responsible, auditable, and ethical AI deployment for clients across regulated industries.",
  readTime: "4 min read",
};

const articles = [
  {
    category: "Insight",
    date: "June 8, 2026",
    title: "The Agentic Enterprise: Why 2026 is the Year AI Moves Off the Slide Deck",
    summary: "LLM-powered automation is no longer a pilot program. We examine the six architectural patterns that separate real deployment from vaporware.",
    readTime: "7 min read",
  },
  {
    category: "Press Release",
    date: "May 22, 2026",
    title: "Nexus Consulting Closes $180M Series D, Expands to Toronto and Singapore",
    summary: "Funding will accelerate hiring in AI and cloud practices and fund two new regional offices, bringing total global headcount to 1,200.",
    readTime: "2 min read",
  },
  {
    category: "Case Study",
    date: "May 10, 2026",
    title: "How Horizon Healthcare Cut Patient Record Access Time by 60% in 90 Days",
    summary: "A deep-dive into our HIPAA-compliant data lake architecture, built across 400+ regional facilities with zero downtime during migration.",
    readTime: "9 min read",
  },
  {
    category: "Insight",
    date: "April 28, 2026",
    title: "Zero-Trust in Practice: Beyond the Buzzword",
    summary: "Most enterprises declare zero-trust. Very few implement it correctly. Our security principals walk through the five stages of a proper deployment.",
    readTime: "11 min read",
  },
  {
    category: "Press Release",
    date: "April 3, 2026",
    title: "Nexus Consulting Named Top 10 Best Workplaces in Technology 2026",
    summary: "Fortune Magazine recognizes Nexus for the third consecutive year, citing exceptional leadership development programs and above-market compensation.",
    readTime: "2 min read",
  },
  {
    category: "Insight",
    date: "March 18, 2026",
    title: "Cloud Cost Governance: Stopping the $400K Monthly Bill No One Approved",
    summary: "Cloud sprawl is the silent killer of enterprise margins. We outline a governance framework that has saved clients an average of $3.2M annually.",
    readTime: "8 min read",
  },
];

const pressReleases = [
  { date: "May 22, 2026", title: "Nexus Consulting Closes $180M Series D", file: "#" },
  { date: "April 3, 2026", title: "Named Top 10 Best Workplaces in Technology 2026", file: "#" },
  { date: "Feb 14, 2026", title: "Nexus Launches AI Practice Group with 120-Person Team", file: "#" },
  { date: "Jan 6, 2026", title: "Nexus DeployIQ Framework Version 4.0 Released", file: "#" },
];

const categoryColors: Record<string, string> = {
  "Company News": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Insight: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  "Press Release": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  "Case Study": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export default function PressCenter() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-16">

        {/* Header */}
        <section className="py-20 md:py-28 border-b bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.p {...fadeUp} className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Press Center
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              News, insights &amp;<br className="hidden sm:block" /> press releases.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Stay current with Nexus Consulting's latest research, company announcements, and
              thought leadership published by our partners and practice leads.
            </motion.p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight">Featured Story</h2>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 flex flex-col md:flex-row gap-8 items-start group cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/20 rounded-full px-3 py-1">
                    {featured.category}
                  </span>
                  <span className="text-sm text-primary-foreground/70 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {featured.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">{featured.title}</h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">{featured.summary}</p>
                <div className="flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                  Read full article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <div className="md:w-48 md:shrink-0 flex items-center justify-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/10 flex items-center justify-center">
                  <Newspaper className="w-14 h-14 md:w-16 md:h-16 opacity-60" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight">Latest Articles</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <motion.article
                  key={article.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-card border rounded-3xl p-7 flex flex-col gap-4 hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer"
                  data-testid={`article-${i}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{article.summary}</p>
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <FileText className="w-3.5 h-3.5" /> {article.readTime}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 md:py-28 bg-muted/10 border-y">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Official Press Releases</h2>
              <p className="text-muted-foreground">For editorial inquiries: <a href="mailto:press@nexusconsulting.io" className="text-primary hover:underline">press@nexusconsulting.io</a></p>
            </motion.div>
            <div className="space-y-4">
              {pressReleases.map((pr, i) => (
                <motion.div
                  key={pr.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-card border rounded-2xl p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{pr.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{pr.date}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl shrink-0" asChild>
                    <a href={pr.file}>
                      <Download className="w-4 h-4 mr-2" /> PDF
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <motion.div {...fadeUp} className="space-y-6">
              <Badge className="uppercase tracking-widest text-xs px-4 py-1.5" variant="outline">Media Resources</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Need our media kit?</h2>
              <p className="text-muted-foreground text-lg">
                Download logos, brand guidelines, executive headshots, and approved company descriptions in a single package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-xl h-13 px-8" asChild>
                  <a href="#">
                    <Download className="w-4 h-4 mr-2" /> Download Media Kit
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl h-13 px-8" asChild>
                  <a href="mailto:press@nexusconsulting.io">Contact Press Team</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
