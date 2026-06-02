import { Phone, MapPin, Globe } from "lucide-react";
import Section from "@/components/ui/Section";
import { COMPANY } from "@/data/content";

export default function Contact() {
  return (
    <Section id="kontak" className="border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Siap berinovasi bersama?
        </h2>
        <p className="text-lg text-slate-400 mb-12">
          Mari diskusikan bagaimana solusi digital kami dapat membantu
          pertumbuhan bisnis Anda.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <a
            href={`tel:${COMPANY.contact.phone}`}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Phone
              className="w-6 h-6 text-blue-400 mb-3"
              aria-hidden="true"
            />
            <span className="text-white font-medium">
              {COMPANY.contact.phone}
            </span>
            <span className="text-xs text-slate-500">Telepon &amp; WhatsApp</span>
          </a>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
            <MapPin
              className="w-6 h-6 text-blue-400 mb-3"
              aria-hidden="true"
            />
            <span className="text-white font-medium text-center text-sm">
              {COMPANY.contact.address}
            </span>
            <span className="text-xs text-slate-500 mt-1">Lokasi Kantor</span>
          </div>

          <a
            href={`https://${COMPANY.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Kunjungi ${COMPANY.contact.website} (buka di tab baru)`}
          >
            <Globe
              className="w-6 h-6 text-blue-400 mb-3"
              aria-hidden="true"
            />
            <span className="text-white font-medium">
              {COMPANY.contact.website}
            </span>
            <span className="text-xs text-slate-500">Website Resmi</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
