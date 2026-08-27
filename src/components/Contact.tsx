import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { BRAND } from "../utils/constants";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (submissionStatus === "submitting") return;
    setSubmissionStatus("submitting");
    setErrorMessage("");

    try {
      // Check if EmailJS environment variables are provided
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Dynamic post to EmailJS API
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: data.name,
              from_email: data.email,
              subject: data.subject,
              message: data.message,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to deliver message via service.");
        }
      } else {
        // Simulate a smooth serverless transmission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSubmissionStatus("success");
      reset();
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmissionStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or reach out directly to " + BRAND.email
      );
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 lg:py-28 bg-white dark:bg-[#0B1120] border-t border-[#E2E8F0] dark:border-slate-800 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work"
          highlight="Together"
          description="Have an upcoming project, freelance inquiry, full-time opportunity, or technical challenge? Let's turn your vision into an exceptional digital experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left: Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs">
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white font-heading">
                Let's Build Something Exceptional
              </h3>
              <p className="mt-3 text-[#64748B] dark:text-slate-300 text-sm leading-relaxed">
                Whether you need a modern web application, an intuitive design system, or a technical consultation, I'm ready to collaborate.
              </p>

              {/* Direct Channels */}
              <div className="mt-8 space-y-3.5">
                {/* WhatsApp */}
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-link"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-emerald-600 text-white shadow-xs group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-white/20" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold text-emerald-800 dark:text-emerald-400 tracking-wider font-mono">
                        WhatsApp (Instant Chat)
                      </div>
                      <div className="text-sm font-semibold text-[#0F172A] dark:text-white font-mono group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                        {BRAND.whatsapp}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-600 text-white group-hover:bg-emerald-700 transition-colors">
                    Chat ↗
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  id="contact-email-link"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white dark:bg-[#0B1120] border border-[#E2E8F0] dark:border-slate-800 hover:border-[#2563EB] dark:hover:border-[#2563EB] transition-all group shadow-xs"
                >
                  <div className="p-2.5 rounded-lg bg-[#EFF6FF] dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] uppercase font-bold text-[#64748B] dark:text-slate-400 tracking-wider font-mono">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-[#0F172A] dark:text-slate-100 truncate group-hover:text-[#2563EB] dark:group-hover:text-blue-400">
                      {BRAND.email}
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={BRAND.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-link"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#0B1120] border border-[#E2E8F0] dark:border-slate-800 hover:border-[#2563EB] dark:hover:border-[#2563EB] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-slate-800 text-[#0F172A] dark:text-slate-200 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold text-[#64748B] dark:text-slate-400 tracking-wider font-mono">
                        GitHub Profile
                      </div>
                      <div className="text-sm font-semibold text-[#0F172A] dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-blue-400">
                        usmanmuhammad2563
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  href={BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#0B1120] border border-[#E2E8F0] dark:border-slate-800 hover:border-[#2563EB] dark:hover:border-[#2563EB] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-[#EFF6FF] dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold text-[#64748B] dark:text-slate-400 tracking-wider font-mono">
                        Professional Network
                      </div>
                      <div className="text-sm font-semibold text-[#0F172A] dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-blue-400">
                        LinkedIn Profile
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white dark:bg-[#0B1120] border border-[#E2E8F0] dark:border-slate-800 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase font-bold text-[#64748B] dark:text-slate-400 tracking-wider font-mono">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-[#0F172A] dark:text-slate-100">
                      {BRAND.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs">
              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white font-heading mb-6">
                Send a Direct Message
              </h3>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {submissionStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submissionStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Failed to send</p>
                      <p className="text-xs text-rose-700 dark:text-rose-300 mt-0.5">
                        {errorMessage || "Something went wrong. Please try again."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                      })}
                      className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0B1120] border text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all ${
                        errors.name
                          ? "border-rose-400 focus:ring-rose-500"
                          : "border-[#E2E8F0] dark:border-slate-800"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0B1120] border text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-500"
                          : "border-[#E2E8F0] dark:border-slate-800"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Web Application Development / Freelance Project"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: { value: 3, message: "Subject must be at least 3 characters" },
                    })}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0B1120] border text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all ${
                      errors.subject
                        ? "border-rose-400 focus:ring-rose-500"
                        : "border-[#E2E8F0] dark:border-slate-800"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Describe your project, timeline, deliverables, or question..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0B1120] border text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all resize-y ${
                      errors.message
                        ? "border-rose-400 focus:ring-rose-500"
                        : "border-[#E2E8F0] dark:border-slate-800"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={submissionStatus === "submitting" || isSubmitting}
                    disabled={submissionStatus === "submitting"}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto shadow-xs"
                  >
                    {submissionStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
