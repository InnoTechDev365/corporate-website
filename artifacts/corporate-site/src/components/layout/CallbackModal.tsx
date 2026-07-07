import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function CallbackModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      setName("");
      setPhone("");
      toast({
        title: "Request received",
        description: "A partner will call you back within 2 business hours.",
      });
    }, 900);
  }

  return (
    <>
      <motion.button
        data-testid="button-callback-trigger"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground rounded-full shadow-xl px-5 py-3 text-sm font-semibold cursor-pointer border-0"
        aria-label="Request a callback"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Request a Call</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="fixed bottom-20 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm bg-card border rounded-2xl shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">Request a Callback</h3>
                  <p className="text-sm text-muted-foreground">We call back within 2 business hours.</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close"
                  data-testid="button-callback-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="cb-name">Your Name</label>
                  <Input
                    id="cb-name"
                    data-testid="input-callback-name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="cb-phone">Phone Number</label>
                  <Input
                    id="cb-phone"
                    data-testid="input-callback-phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-11 rounded-xl"
                  disabled={submitting}
                  data-testid="button-callback-submit"
                >
                  {submitting ? "Submitting…" : "Call Me Back"}
                </Button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
