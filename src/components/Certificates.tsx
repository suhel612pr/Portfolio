import { Award, ExternalLink, FileText } from "lucide-react";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-28 px-6 border-t border-[#1a1a1d]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#ece9e4] tracking-tight">
          Certificates
        </h2>
        <p className="mt-2 text-[#9c9a96] max-w-xl">
          Internship, training, and course completions.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="border border-[#262629] rounded-lg overflow-hidden hover:border-[#38383c] transition-colors"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-40 object-cover border-b border-[#262629]"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-24 flex items-center justify-center border-b border-[#262629] bg-[#131315] text-[#6b6966]">
                  <Award size={22} />
                </div>
              )}

              <div className="p-5">
                <h3 className="font-semibold text-[#ece9e4]">{cert.title}</h3>
                <p className="text-sm text-[#9c9a96] mt-0.5">
                  {cert.issuer} · {cert.date}
                </p>
                <p className="mt-3 text-sm text-[#9c9a96] leading-relaxed">
                  {cert.description}
                </p>

                {(cert.image || cert.pdf || cert.credentialUrl) && (
                  <div className="mt-4 flex items-center gap-4">
                    {(cert.pdf || cert.image) && (
                      <a
                        href={cert.pdf ?? cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#c17a3d] hover:text-[#d68b49] transition-colors"
                      >
                        <FileText size={14} />
                        View certificate
                      </a>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#9c9a96] hover:text-[#ece9e4] transition-colors"
                      >
                        <ExternalLink size={14} />
                        Verify
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
