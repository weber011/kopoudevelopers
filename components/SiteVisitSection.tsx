"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { buildSiteVisitWhatsApp } from "@/lib/whatsapp";
import { EclipseButton } from "@/components/ui/eclipse-button";

const visitSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time slot"),
  config: z.string().min(1, "Please select an apartment configuration"),
  note: z.string().optional(),
});

type VisitData = z.infer<typeof visitSchema>;

export default function SiteVisitSection() {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VisitData>({
    resolver: zodResolver(visitSchema),
  });

  const onSubmit = (data: VisitData) => {
    const url = buildSiteVisitWhatsApp({
      name: data.name,
      phone: data.phone,
      date: data.date,
      time: data.time,
      config: data.config,
      message: data.note,
    });
    setWaUrl(url);
    setSubmitted(true);
  };

  return (
    <section id="site-visit" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="section-label">On-Site Experience</span>
            <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-6">
              Experience the Location <br />
              <span className="text-[#C8A45D]">in Person.</span>
            </h2>
            <div className="divider" />
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
              Connect with the Kopou Developers team to arrange a convenient guided visit to the Kopou Apartments site in Harigaon, Tezpur.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#C8A45D] flex-shrink-0 mt-1" size={18} />
                <div className="text-sm">
                  <strong className="text-[#171717] block">Address</strong>
                  <span className="text-[#6B6B6B]">University Road, Harigaon, Tezpur, Assam 784501</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-[#C8A45D] flex-shrink-0 mt-1" size={18} />
                <div className="text-sm">
                  <strong className="text-[#171717] block">Visiting Hours</strong>
                  <span className="text-[#6B6B6B]">Monday to Saturday: 10:00 AM – 5:30 PM (Prior appointment required)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F8F6F1] border-l-2 border-[#C8A45D] text-xs text-[#6B6B6B]">
              * Site visit requests are provisional and subject to confirmation by the developer sales team.
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F8F6F1] border border-[#E5E1DA] p-6 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-serif font-semibold text-[#171717] mb-2">
                    Site Visit Request Prepared
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mb-6 max-w-md mx-auto">
                    Your site visit details have been formatted. Click below to send your request via WhatsApp to our sales coordinators.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex items-center gap-2 mb-4"
                  >
                    <MessageCircle size={18} /> Send Request on WhatsApp
                  </a>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#A98747] underline hover:text-[#171717]"
                    >
                      Modify Request Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <h3 className="text-lg font-serif font-semibold text-[#171717] mb-4">
                    Book a Guided Site Tour
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 bg-white border border-[#E5E1DA] text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D]"
                        {...register("name")}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        className="w-full px-4 py-2.5 bg-white border border-[#E5E1DA] text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D]"
                        {...register("phone")}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2.5 bg-white border border-[#E5E1DA] text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D]"
                        {...register("date")}
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1">
                        Preferred Time *
                      </label>
                      <select
                        className="w-full px-4 py-2.5 bg-white border border-[#E5E1DA] text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D]"
                        {...register("time")}
                      >
                        <option value="">Select slot</option>
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1:00 PM - 3:30 PM)">Afternoon (1 PM - 3:30 PM)</option>
                        <option value="Evening (3:30 PM - 5:30 PM)">Evening (3:30 PM - 5:30 PM)</option>
                      </select>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1">
                        Interested In *
                      </label>
                      <select
                        className="w-full px-4 py-2.5 bg-white border border-[#E5E1DA] text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D]"
                        {...register("config")}
                      >
                        <option value="">Select</option>
                        <option value="2 BHK Apartment">2 BHK Apartment</option>
                        <option value="3 BHK Apartment">3 BHK Apartment</option>
                        <option value="Both / Not sure">Both / Exploring</option>
                      </select>
                      {errors.config && <p className="text-red-500 text-xs mt-1">{errors.config.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] mb-1">
                      Notes or Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., number of persons visiting, questions regarding floor plans"
                      className="w-full px-4 py-2.5 bg-white border border-[#E5E1DA] text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D]"
                      {...register("note")}
                    />
                  </div>

                  <EclipseButton
                    type="submit"
                    variant="primary"
                    text={isSubmitting ? "Processing..." : "Schedule Site Visit"}
                    isLoading={isSubmitting}
                    className="w-full mt-2"
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
