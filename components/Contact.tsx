import { Phone, MapPin, Globe } from "lucide-react";
import Section from "@/components/ui/Section";
import { COMPANY } from "@/data/content";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.49 0 9.951-4.462 9.955-9.955.002-2.661-1.03-5.163-2.905-7.039C16.446 1.733 13.948.7 11.288.7 5.795.7 1.333 5.161 1.329 10.655c-.001 1.565.413 3.097 1.2 4.453l-.994 3.635 3.738-.981c1.312.715 2.766 1.092 4.374 1.092zm8.93-6.52c-.312-.156-1.848-.912-2.134-1.017-.286-.104-.494-.156-.701.156-.208.313-.807.156-.99.365-.182.21-.364.23-.676.073-.312-.156-1.316-.486-2.507-1.549-.926-.826-1.552-1.847-1.733-2.16-.182-.313-.02-.482.136-.638.14-.14.312-.365.468-.547.156-.182.208-.313.312-.52.104-.21.052-.392-.026-.548-.078-.156-.701-1.688-.96-2.313-.252-.607-.51-.523-.7-.533l-.597-.01c-.208 0-.546.078-.832.392-.286.313-1.092 1.068-1.092 2.604 0 1.536 1.118 3.02 1.274 3.23.156.21 2.2 3.359 5.328 4.709.744.321 1.325.513 1.777.656.748.238 1.43.204 1.968.124.6-.09 1.848-.756 2.108-1.485.26-.73.26-1.355.182-1.486-.078-.13-.286-.208-.598-.364z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

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
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                  <WhatsAppIcon className="w-5 h-5" />
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
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                  <InstagramIcon className="w-5 h-5" />
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
