"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Phone, Mail, ChevronDown, AlertCircle } from "lucide-react";
import { buildFormEnquiryWhatsApp } from "@/lib/whatsapp";
import { EclipseButton } from "@/components/ui/eclipse-button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.union([z.string().email("Please enter a valid email"), z.literal("")]).optional(),
  config: z.string().min(1, "Please select an apartment option"),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  contactMethod: z.string().min(1, "Please select a preferred contact method"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, { message: "Please provide consent to be contacted" }),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const contactMethod = watch("contactMethod");

  const onSubmit = (data: FormData) => {
    const url = buildFormEnquiryWhatsApp({
      name: data.name,
      phone: data.phone,
      config: data.config,
      enquiryType: data.enquiryType,
      message: data.message,
    });

    if (data.contactMethod === "WhatsApp") {
      setWhatsappUrl(url);
      setSubmitted(true);
    } else if (data.contactMethod === "Email") {
      window.location.href = `mailto:kopoudevelop@gmail.com?subject=Enquiry: ${data.config}&body=Name: ${data.name}%0APhone: ${data.phone}%0AEnquiry: ${data.enquiryType}`;
    } else {
      // Phone call
      setWhatsappUrl(url);
      setSubmitted(true);
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 border text-sm bg-white text-[#171717] focus:outline-none focus:border-[#C8A45D] transition-colors ${
      hasError ? "border-red-400" : "border-[#E5E1DA]"
    }`;

  return (
    <section id="contact" className="section bg-[#F4F1EA]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Enquire Now</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4">
              Let&rsquo;s Find Your<br />
              <span className="text-[#C8A45D]">Perfect Home.</span>
            </h2>
            <p className="text-[#6B6B6B] mt-4 text-sm">
              Fill in your details and we&rsquo;ll connect you with the Kopou Developers team.
            </p>
          </div>

          {submitted ? (
            /* Success State */
            <div className="bg-white border border-[#E5E1DA] p-8 text-center">
              <div className="w-16 h-16 bg-[#C8A45D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={28} className="text-[#C8A45D]" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#171717] mb-3">
                Your Enquiry is Ready
              </h3>
              <p className="text-[#6B6B6B] text-sm mb-2">
                Your details have been prepared. Click the button below to open WhatsApp
                and send your enquiry to Kopou Developers.
              </p>
              <p className="text-xs text-[#6B6B6B] italic mb-6">
                Your enquiry is not confirmed until you send the message on WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex mb-4"
              >
                <MessageCircle size={16} />
                Open WhatsApp to Send
              </a>
              <br />
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#6B6B6B] hover:text-[#C8A45D] underline mt-2"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white border border-[#E5E1DA] p-6 lg:p-10 space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className={fieldClass(!!errors.name)}
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-1.5">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  className={fieldClass(!!errors.phone)}
                  {...register("phone")}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-1.5">
                  Email Address <span className="font-normal text-[#6B6B6B]">(Optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={fieldClass(!!errors.email)}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Config + Enquiry Type */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="config" className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-1.5">
                    Apartment Type *
                  </label>
                  <div className="relative">
                    <select
                      id="config"
                      className={fieldClass(!!errors.config) + " appearance-none pr-10"}
                      {...register("config")}
                    >
                      <option value="">Select…</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] pointer-events-none" />
                  </div>
                  {errors.config && <p className="text-red-500 text-xs mt-1">{errors.config.message}</p>}
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-1.5">
                    Enquiry Type *
                  </label>
                  <div className="relative">
                    <select
                      id="enquiryType"
                      className={fieldClass(!!errors.enquiryType) + " appearance-none pr-10"}
                      {...register("enquiryType")}
                    >
                      <option value="">Select…</option>
                      <option value="Pricing">Pricing</option>
                      <option value="Floor Plan">Floor Plan</option>
                      <option value="Site Visit">Site Visit</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] pointer-events-none" />
                  </div>
                  {errors.enquiryType && <p className="text-red-500 text-xs mt-1">{errors.enquiryType.message}</p>}
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-2">
                  Preferred Contact Method *
                </label>
                <div className="flex gap-3 flex-wrap">
                  {["WhatsApp", "Phone Call", "Email"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value={m}
                        className="accent-[#C8A45D]"
                        {...register("contactMethod")}
                      />
                      <span className="text-sm text-[#171717]">{m}</span>
                    </label>
                  ))}
                </div>
                {errors.contactMethod && (
                  <p className="text-red-500 text-xs mt-1">{errors.contactMethod.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#171717] uppercase tracking-widest mb-1.5">
                  Message <span className="font-normal text-[#6B6B6B]">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Any specific questions or requirements?"
                  className={fieldClass(false)}
                  {...register("message")}
                />
              </div>

              {/* WhatsApp notice */}
              {contactMethod === "WhatsApp" && (
                <div className="flex items-start gap-2 bg-green-50 border border-green-200 p-3">
                  <AlertCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-green-800">
                    WhatsApp will open with your details pre-filled. You must send the message yourself.
                    Your enquiry is not submitted until you press send on WhatsApp.
                  </p>
                </div>
              )}

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-[#C8A45D] flex-shrink-0"
                    {...register("consent")}
                  />
                  <span className="text-xs text-[#6B6B6B] leading-relaxed">
                    I consent to Kopou Developers contacting me via my selected method to
                    respond to this enquiry. *
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
              </div>

              {/* Submit */}
              <EclipseButton
                type="submit"
                variant="primary"
                text={isSubmitting ? "Preparing…" : "Send Enquiry"}
                isLoading={isSubmitting}
                size="default"
                className="w-full"
              />

              <p className="text-xs text-[#6B6B6B] text-center">
                No commitment required. We&rsquo;ll respond with project information only.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
