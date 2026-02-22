import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, User, MessageSquare, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { socialLinks } from "@/lib/socials";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY?.trim()) {
      toast.error("Contact form is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio Contact from ${form.name.trim()}`,
          botcheck: "", // Hidden field for spam protection; leave empty for real users
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface-container">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="m3-chip mb-4">Connect</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="m3-surface-elevated p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Email</p>
                <a
                  href="mailto:masudhasan.mdh@gmail.com"
                  className="text-foreground font-medium hover:opacity-80"
                >
                  masudhasan.mdh@gmail.com
                </a>
              </div>
            </div>

            <div className="m3-surface-elevated p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Mobile</p>
                <a href="tel:+8801675345286" className="text-foreground font-medium hover:opacity-80 block">
                  +880 1675-345286
                </a>
                <a href="tel:+8801716632755" className="text-foreground font-medium hover:opacity-80 block">
                  +880 1716-632755
                </a>
              </div>
            </div>

            <div className="m3-surface-elevated p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Location</p>
                <p className="text-foreground font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <p className="text-muted-foreground text-sm mt-2">
              Feel free to reach out for collaborations, speaking engagements,
              or educational partnerships.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="m3-surface-elevated p-8 flex flex-col gap-5"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-1">
              Send a Message
            </h3>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="m3-input pl-12 w-full"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="m3-input pl-12 w-full"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-muted-foreground" size={18} />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="m3-input pl-12 resize-none w-full"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="m3-filled-button justify-center gap-2 py-3 text-base disabled:opacity-60"
            >
              {isLoading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
