"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, MapPin, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { buildSiteVisitWhatsApp } from "@/lib/whatsapp";

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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <span className="section-label">On-Site Experience</span>
            <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-6 leading-tight">
              Experience the Location <br />
              <span className="text-[#C8A45D]">in Person.</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#C8A45D] mb-6" />
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">
              Connect with the Kopou Developers team to arrange a convenient guided visit to the Kopou Apartments site in Harigaon, Tezpur.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1DA]">
                <div className="w-10 h-10 rounded-full bg-[#C8A45D]/15 flex items-center justify-center flex-shrink-0 text-[#C8A45D]">
                  <MapPin size={20} />
                </div>
                <div className="text-sm">
                  <strong className="text-[#171717] block mb-0.5 font-semibold">Address</strong>
                  <span className="text-[#6B6B6B] text-xs leading-relaxed">
                    University Road, Harigaon, Tezpur, Assam 784501
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1DA]">
                <div className="w-10 h-10 rounded-full bg-[#C8A45D]/15 flex items-center justify-center flex-shrink-0 text-[#C8A45D]">
                  <Clock size={20} />
                </div>
                <div className="text-sm">
                  <strong className="text-[#171717] block mb-0.5 font-semibold">Visiting Hours</strong>
                  <span className="text-[#6B6B6B] text-xs leading-relaxed">
                    Monday to Saturday: 10:00 AM – 5:30 PM (Prior appointment requested)
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#C8A45D] text-xs text-[#6B6B6B] rounded-r-lg">
              * Site visit requests are provisional and subject to confirmation by the developer sales team.
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] border border-[#E5E1DA] rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/[0.03]">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#171717] mb-2">
                    Site Visit Request Prepared
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mb-6 max-w-md mx-auto leading-relaxed">
                    Your visit preferences have been compiled. Click below to send your request directly to Kopou Developers on WhatsApp.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all mb-4"
                  >
                    <MessageCircle size={18} /> Send Request on WhatsApp
                  </a>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#A98747] underline hover:text-[#171717] transition-colors"
                    >
                      ← Modify Request Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="border-b border-[#E5E1DA] pb-4 mb-4">
                    <h3 className="text-xl font-serif font-semibold text-[#171717]">
                      Book a Guided Site Tour
                    </h3>
                    <p className="text-xs text-[#6B6B6B] mt-1">
                      Choose your preferred date and time to explore Kopou Apartments.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white border border-[#E5E1DA] rounded-lg text-base text-[#171717] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] transition-all"
                        {...register("name")}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 bg-white border border-[#E5E1DA] rounded-lg text-base text-[#171717] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] transition-all"
                        {...register("phone")}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-3 bg-white border border-[#E5E1DA] rounded-lg text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] transition-all"
                        {...register("date")}
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Preferred Time *
                      </label>
                      <select
                        className="w-full px-3 py-3 bg-white border border-[#E5E1DA] rounded-lg text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] transition-all"
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
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Interested In *
                      </label>
                      <select
                        className="w-full px-3 py-3 bg-white border border-[#E5E1DA] rounded-lg text-sm text-[#171717] focus:outline-none focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] transition-all"
                        {...register("config")}
                      >
                        <option value="">Select</option>
                        <option value="2 BHK Apartment">2 BHK Apartment</option>
                        <option value="3 BHK Apartment">3 BHK Apartment</option>
                        <option value="Both / Exploring">Both / Exploring</option>
                      </select>
                      {errors.config && <p className="text-red-500 text-xs mt-1">{errors.config.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Notes or Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., number of visitors, questions on floor plan or pricing"
                      className="w-full px-4 py-3 bg-white border border-[#E5E1DA] rounded-lg text-base text-[#171717] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] transition-all"
                      {...register("note")}
                    />
                  </div>

                  {/* Clean, Full-Width Luxury Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-[#171717] hover:bg-[#C8A45D] text-white hover:text-[#171717] font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                  >
                    <span>{isSubmitting ? "Processing..." : "Schedule Site Visit"}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
