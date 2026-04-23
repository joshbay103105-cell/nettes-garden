import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>();

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof ContactForm) => {
    if (errors[field]) validate();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    toast.success("Message sent! We'll be in touch within 1-2 business days.");
    setForm(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-background"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <Mail className="w-3.5 h-3.5 mr-1.5" />
            Get in Touch
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're interested in our products, education programs, or
            just want to say hello — we're here and happy to help.
          </p>
        </div>

        <div
          ref={formRef}
          className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto"
        >
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-8 ${formVisible ? "slide-left" : "opacity-0-initial"}`}
          >
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Farm Address
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      123 Green Valley Road
                      <br />
                      Harvest County, CA 94102
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+14155550123"
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      +1 (415) 555-0123
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@greenharvestfarm.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      hello@greenharvestfarm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 rounded-xl bg-muted/40 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">
                Farm Hours
              </h4>
              <div className="space-y-1.5 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium text-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                  data-ocid="contact.instagram_link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                  data-ocid="contact.facebook_link"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                  data-ocid="contact.twitter_link"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-5 ${formVisible ? "slide-up animate-delayed-2" : "opacity-0-initial"}`}
            noValidate
            data-ocid="contact.form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-sm font-medium">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Eleanor Marsh"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => handleBlur("name")}
                  className={errors.name ? "border-destructive" : ""}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  data-ocid="contact.name_input"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-xs text-destructive"
                    data-ocid="contact.name_field_error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="text-sm font-medium">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => handleBlur("email")}
                  className={errors.email ? "border-destructive" : ""}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  data-ocid="contact.email_input"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-xs text-destructive"
                    data-ocid="contact.email_field_error"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact-subject" className="text-sm font-medium">
                Subject
              </Label>
              <Input
                id="contact-subject"
                type="text"
                placeholder="Workshop inquiry, product order, farm visit..."
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                data-ocid="contact.subject_input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact-message" className="text-sm font-medium">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your interest in Green Harvest Farm — products, programs, tours, partnerships..."
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onBlur={() => handleBlur("message")}
                className={
                  errors.message
                    ? "border-destructive resize-none"
                    : "resize-none"
                }
                aria-describedby={errors.message ? "message-error" : undefined}
                data-ocid="contact.message_textarea"
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-xs text-destructive"
                  data-ocid="contact.message_field_error"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-sm font-medium"
              data-ocid="contact.submit_button"
            >
              {isSubmitting ? (
                <span
                  className="flex items-center gap-2"
                  data-ocid="contact.loading_state"
                >
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending Message...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
