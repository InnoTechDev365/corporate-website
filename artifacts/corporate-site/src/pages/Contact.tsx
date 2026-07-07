import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const offices = [
  { city: "New York", address: "1 Vanderbilt Ave, Suite 6500\nNew York, NY 10017", phone: "+1 (212) 555-0100", primary: true },
  { city: "San Francisco", address: "101 Mission St, Suite 1800\nSan Francisco, CA 94105", phone: "+1 (415) 555-0188", primary: false },
  { city: "Chicago", address: "77 W Wacker Dr, Suite 4500\nChicago, IL 60601", phone: "+1 (312) 555-0142", primary: false },
];

const requisites = [
  { label: "Legal Entity", value: "Nexus Consulting LLC" },
  { label: "EIN / Tax ID", value: "47-1234567" },
  { label: "DUNS Number", value: "12-345-6789" },
  { label: "NAICS Code", value: "541512 — Computer Systems Design" },
  { label: "GSA Schedule", value: "47QTCA22D007X" },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", service: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({ title: "Message Sent", description: "A partner will be in touch within 24 hours." });
    form.reset();
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-16">

        {/* Header */}
        <section className="py-16 md:py-24 border-b bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary mb-4"
            >
              Contact Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5"
            >
              Let's talk business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Connect with our leadership team to discuss your enterprise needs.
              All qualified inquiries receive a senior partner response within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Main grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Left info column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 space-y-10"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:+12125550100" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (212) 555-0100
                      </a>
                      <p className="text-xs text-muted-foreground mt-0.5">Mon–Fri, 8am–7pm ET</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:partners@nexusconsulting.io" className="text-muted-foreground hover:text-primary transition-colors break-all">
                        partners@nexusconsulting.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Response Commitment</h3>
                      <p className="text-muted-foreground text-sm">All enterprise inquiries receive a senior partner response within <span className="font-semibold text-foreground">24 business hours</span>.</p>
                    </div>
                  </div>
                </div>

                {/* Office locations */}
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" /> Our Offices
                  </h3>
                  <div className="space-y-4">
                    {offices.map(office => (
                      <div
                        key={office.city}
                        className={`rounded-2xl p-4 border ${office.primary ? "bg-primary/5 border-primary/20" : "bg-card"}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          <span className="font-semibold text-sm">{office.city}{office.primary ? " — HQ" : ""}</span>
                        </div>
                        <p className="text-sm text-muted-foreground pl-6 whitespace-pre-line">{office.address}</p>
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground pl-6 hover:text-primary transition-colors block mt-1">
                          {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 bg-card border rounded-3xl p-7 md:p-10 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} className="h-11 rounded-xl" data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" {...field} className="h-11 rounded-xl" data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Corporate Email <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="jane@acme.com" type="email" {...field} className="h-11 rounded-xl" data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" type="tel" {...field} className="h-11 rounded-xl" data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Interest <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-11 rounded-xl" data-testid="select-service">
                                <SelectValue placeholder="Select an area of expertise" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="strategy">Enterprise Strategy</SelectItem>
                              <SelectItem value="transformation">Digital Transformation</SelectItem>
                              <SelectItem value="cloud">Cloud & Infrastructure</SelectItem>
                              <SelectItem value="ai">AI & Automation</SelectItem>
                              <SelectItem value="security">Cybersecurity</SelectItem>
                              <SelectItem value="ma">M&A Advisory</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Briefly describe your objectives, current challenges, and timeline..."
                              className="min-h-[130px] rounded-xl resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 rounded-xl text-base active:scale-95" data-testid="button-submit-contact">
                      Submit Request
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our Privacy Policy. We never sell contact data.
                    </p>
                  </form>
                </Form>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Business Requisites */}
        <section className="py-16 md:py-20 border-t bg-muted/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold tracking-tight mb-2">Business Information</h2>
              <p className="text-muted-foreground text-sm">For procurement, vendor onboarding, and accounts payable.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requisites.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card border rounded-2xl px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{r.label}</p>
                  <p className="font-medium text-sm">{r.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
