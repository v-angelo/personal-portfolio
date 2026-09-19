import { Button } from "@/components/Button";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "v.angelo003@gmail.com",
    href: "mailto:v.angelo003@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9496437283",
    href: "rel:+919496437283",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kochi, Kerala",
    href: "#",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log(serviceId, templateId, publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-m-5 overflow-hidden px-3 py-16"
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="animate-fade-in text-sm font-medium tracking-wider text-secondary-foreground uppercase">
            Get In Touch
          </span>
          <h2 className="animation-delay-100 mt-4 mb-6 animate-fade-in text-4xl font-bold text-secondary-foreground md:text-5xl">
            Let's build{" "}
            <span className="font-serif font-normal text-white italic">
              something great.
            </span>
          </h2>
          <p className="animation-delay-200 animate-fade-in text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        {/* left - contact form */}
        <div className="animation-delay-300 animate-fade-in rounded-3xl glass border border-primary/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                id="name"
                type="text"
                required
                placeholder="Your name..."
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                id="message"
                type="text"
                required
                placeholder="Your message..."
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <Button
              className="mt-4 w-full"
              type="submit"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send className="h-5 w-5" />
                </>
              )}
            </Button>

            {/* success/error message */}
            {submitStatus.type && (
              <div
                className={`flex items-center gap-3 rounded-xl p-4 ${
                  submitStatus.type === "success"
                    ? "border border-green-500/20 bg-green-500/10 text-green-400"
                    : "border border-red-500/20 bg-red-500/10 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="h-5 w-5 shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* right - contact details */}
        <div className="animation-delay-400 flex animate-fade-in flex-col items-center justify-between gap-4">
          {/* contact info */}
          <div className="w-full rounded-3xl glass p-8">
            <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-surface"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* availability card */}
          <div className="rounded-3xl glass border border-primary/30 p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
              <span className="font-medium">Currently Available</span>
            </div>
            <p className="text-sm text-muted-foreground">
              I'm currently open to new opportunities and exciting projects.
              Whether you need a full-time developer or a freelance consultant,
              let's talk!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
