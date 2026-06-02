import { Phone, MapPin, Globe } from "lucide-react";
import Section from "@/components/ui/Section";
import { COMPANY } from "@/data/content";

export default function Contact() {
  return (
    <Section id="kontak" className="border-t border-white/5 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Contact Cards */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">
              Siap berinovasi bersama?
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Mari diskusikan bagaimana solusi digital kami dapat membantu pertumbuhan bisnis Anda secara optimal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <a
                href={COMPANY.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300 shrink-0">
                  <img
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/whatsapp.png"
                    alt="WhatsApp logo"
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-semibold group-hover:text-emerald-400 transition-colors duration-300 text-sm">
                    WhatsApp Chat
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {COMPANY.contact.phone}
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={COMPANY.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              >
                <div className="p-2.5 rounded-xl bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors duration-300 shrink-0">
                  <img
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/instagram.png"
                    alt="Instagram logo"
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-semibold group-hover:text-pink-400 transition-colors duration-300 text-sm">
                    Instagram
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    @nexora.tech.tif
                  </span>
                </div>
              </a>

              {/* Telepon Card */}
              <a
                href={`tel:${COMPANY.contact.phone}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300 text-sm">
                    Hubungi Telepon
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {COMPANY.contact.phone}
                  </span>
                </div>
              </a>

              {/* Website Card */}
              <a
                href={`https://${COMPANY.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-violet-500/10 border border-white/10 hover:border-violet-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-black transition-colors duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="text-white font-semibold group-hover:text-violet-400 transition-colors duration-300 text-sm truncate">
                    Website Resmi
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 truncate max-w-[140px] sm:max-w-none">
                    {COMPANY.contact.website}
                  </span>
                </div>
              </a>
            </div>

            {/* Address Information */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
              <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="text-xs text-slate-500">Alamat Kantor</span>
                <span className="text-sm text-slate-300 font-medium mt-0.5">
                  {COMPANY.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive View */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-3 h-[380px] sm:h-[450px] transition-all duration-500 hover:border-blue-500/30 shadow-2xl">
              {/* Ambient Background Glow behind map */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3364408544977!2d113.72146497576409!3d-8.168817291862085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695f70a1a0db7%3A0xb30cc00d6b0a7cbf!2sJl.%20Mastrip%2C%20Sumbersari%2C%20Kec.%20Sumbersari%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1717310000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl opacity-75 group-hover:opacity-95 transition-all duration-500 grayscale brightness-95 contrast-[105%] hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
