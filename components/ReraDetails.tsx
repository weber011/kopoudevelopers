"use client";
import { useState } from "react";
import { BadgeCheck, ChevronDown, ExternalLink, FileText, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { EclipseButton } from "@/components/ui/eclipse-button";

const { rera } = SITE_CONFIG;

const mainDetails = [
  { label: "Project Name", value: rera.projectName },
  { label: "Promoter / Developer", value: rera.promoter },
  { label: "RERA Registration Number", value: rera.registrationNumber, highlight: true },
  { label: "Registration Validity", value: rera.registrationValidity },
  { label: "District", value: rera.district },
  { label: "State", value: rera.state },
  { label: "Location / Taluka", value: rera.location },
  { label: "Project Status", value: rera.status },
];

const additionalDetails = [
  { label: "Approving Authority", value: rera.approvingAuthority },
  { label: "Applicant Type", value: rera.applicantType },
  { label: "Submission Date", value: rera.submissionDate },
  { label: "Building Permit Reference", value: rera.buildingPermit },
  { label: "Permit Issuing Authority", value: rera.permitAuthority },
  { label: "Planning Permit Date", value: rera.planningPermitDate },
  { label: "NOC Issue Date", value: rera.nocIssueDate },
  { label: "NOC Validity", value: rera.nocValidity },
  { label: "Land Area (sq.m)", value: rera.landArea.sqm + " sq.m" },
  { label: "Land Area (Traditional)", value: rera.landArea.traditional },
  { label: "Permissible FAR", value: rera.far.permissible },
  { label: "Proposed FAR", value: rera.far.proposed },
];

export default function ReraDetails() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="rera" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">RERA &amp; Project Information</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4">
            Registered &amp;<br />
            <span className="text-[#C8A45D]">Transparent.</span>
          </h2>
          <p className="text-[#6B6B6B] mt-4 max-w-xl mx-auto text-sm">
            Kopou Apartments is registered under the Assam Real Estate Regulatory
            Authority (RERA). Verify the registration details on the official portal.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* RERA Badge */}
          <div className="flex items-center justify-center gap-3 bg-[#171717] text-[#C8A45D] p-4 mb-8 text-center">
            <BadgeCheck size={22} />
            <span className="font-bold tracking-wider text-sm uppercase">
              RERA Registration: {rera.registrationNumber}
            </span>
          </div>

          {/* Main Details Table */}
          <div className="border border-[#E5E1DA] overflow-hidden mb-4">
            {mainDetails.map((d, i) => (
              <div
                key={d.label}
                className={`grid grid-cols-2 ${i !== mainDetails.length - 1 ? "border-b border-[#E5E1DA]" : ""}`}
              >
                <div className="px-5 py-3.5 bg-[#F4F1EA] text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest border-r border-[#E5E1DA]">
                  {d.label}
                </div>
                <div className={`px-5 py-3.5 text-sm ${d.highlight ? "font-bold text-[#C8A45D]" : "text-[#171717]"}`}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Details Accordion */}
          <div className="border border-[#E5E1DA] mb-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between px-5 py-4 bg-[#F4F1EA] hover:bg-[#E9E3D8] transition-colors"
              aria-expanded={expanded}
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-[#171717]">
                <FileText size={16} className="text-[#C8A45D]" />
                Additional Project &amp; Permit Details
              </div>
              <ChevronDown
                size={18}
                className={`text-[#6B6B6B] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
            {expanded && (
              <div className="border-t border-[#E5E1DA]">
                {additionalDetails.map((d, i) => (
                  <div
                    key={d.label}
                    className={`grid grid-cols-2 ${i !== additionalDetails.length - 1 ? "border-b border-[#E5E1DA]" : ""}`}
                  >
                    <div className="px-5 py-3 bg-[#F8F6F1] text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest border-r border-[#E5E1DA]">
                      {d.label}
                    </div>
                    <div className="px-5 py-3 text-sm text-[#171717]">{d.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Commencement Certificate */}
          <div className="border border-[#E5E1DA] p-6 mb-8 bg-[#F4F1EA]">
            <div className="flex items-start gap-3 mb-4">
              <FileText size={18} className="text-[#C8A45D] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#171717] text-sm mb-1">Commencement Certificate</div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  M/s Kopou Developers commenced the project from <strong>1 September 2025</strong>,
                  as per the commencement certificate letter dated <strong>26 July 2025</strong>
                  to the Tezpur Development Authority. Ref: TDA/BP/Hari Gaon/356/2025.
                </p>
              </div>
            </div>
            {/* The actual commencement certificate image */}
            <a
              href="/images/commencement-certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A45D] hover:underline"
            >
              <ExternalLink size={12} />
              View Commencement Certificate
            </a>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-4 mb-8">
            <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              The details above are sourced from supplied documentation and must be verified
              against official records on the Assam RERA portal before relying upon them.
              Registration validity date should not be assumed to be the construction completion date.
            </p>
          </div>

          {/* Verify CTA */}
          <div className="text-center">
            <EclipseButton
              variant="outline"
              text="Verify on Assam RERA Portal"
              rightIcon={<ExternalLink size={14} />}
              size="default"
              onClick={() => window.open(rera.officialPortal, "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
