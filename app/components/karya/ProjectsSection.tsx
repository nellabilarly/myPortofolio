"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Artwork = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  href?: string;
  gallery?: string[];
};

const artworks = [
  {
    src: "/1.png",
    alt: "Desain poster produk Classic Chocolate Cookie",
    title: "Classic Chocolate Cookie",
    description:
      "Desain poster produk yang menonjolkan cookie cokelat klasik dengan foto besar, tipografi tegas, dan palet cokelat hangat.",
  },
  {
    src: "/2.png",
    alt: "Desain poster Cookies Collection",
    title: "Cookies Collection",
    description:
      "Kampanye visual produk cookie yang memadukan susunan varian rasa, potongan melimpah, dan gaya editorial berwarna cokelat.",
  },
  {
    src: "/3.png",
    alt: "Poster portofolio Four Nattawat sebagai Riser Artist",
    title: "FOURTH — Riser Artist",
    description:
      "Desain portofolio artistik untuk Fourth Nattawat dengan komposisi hitam-putih, pose dinamis, serta tipografi bold bergaya editorial.",
  },
  {
    src: "/4.png",
    alt: "Poster profil Four Nattawat",
    title: "All About FOURTH",
    description:
      "Poster profil bertema era digital yang menampilkan identitas, rekam jejak kreatif, dan citra visual Nattawat Jirochtikul secara ringkas.",
  },
  {
    src: "/5.png",
    alt: "Poster ALRIGHT milik Fourth",
    title: "FOURTH — ALRIGHT",
    description:
      "Desain visual promosi lagu ALRIGHT yang menggabungkan nuansa foto, kontrol musik, dan susunan poster bertema monokrom kekinian.",
  },
  {
    src: "/7.png",
    alt: "Kolase karya dan album Fourth Nattawat",
    title: "Fourth — Riser Energy",
    description:
      "Kolase editorial tentang perjalanan seni Fourth Nattawat, memadukan cover lagu, visual konser, pertunjukan panggung, dan energi musik.",
  },
  {
    src: "/8.png",
    alt: "Poster profil Iqbaal Ramadhan",
    title: "Iqbaal Ramadhan — Baale",
    description:
      "Poster profil bergaya art fashion yang bermain dengan foto, kotak neon, efek pixel, dan tipografi tegas untuk menonjolkan karakter.",
  },
  {
    src: "/dg%20(1).png",
    alt: "Poster kreatif bertema Gemini dan Norawit",
    title: "Gemini — Creative Portrait",
    description:
      "Desain fan art bertema Gemini yang memadukan torn paper, warna merah muda-biru, potret model, dan tipografi besar yang ekspresif.",
  },
  {
    src: "/dg.png",
    alt: "Poster promosi musik FOURTH di GMMTV",
    title: "FOURTH — Born to Shine",
    description:
      "Poster promosi musisi dengan layout biru kekuningan, komposisi foto perspektif, dan slogan Born to Shine untuk kesan berani serta energik.",
  },
  {
    src: "/cozy1%20(3).png",
    alt: "Halaman utama LOCAYY coworking space",
    title: "LOCAYY — Coworking Space",
    description:
      "A cozy coworking space booking experience, from discovering spaces to managing reservations.",
    href: "https://github.com/nellabilarly/Coworking",
    gallery: [
      "/cozy1%20(1).png",
      "/cozy1%20(2).png",
      "/cozy1%20(3).png",
    ],
  },
  {
    src: "/Nusarasa.png",
    alt: "Halaman utama Nusarasa",
    title: "Nusarasa",
    description:
      "An Indonesian food ordering experience with a warm, authentic culinary atmosphere.",
    href: "https://github.com/Nellasalsabila/Nusarasa",
    gallery: [
      "/Nusarasa.png",
      "/Nusarasa%20(2).png",
      "/Nusarasa%20(3).png",
    ],
  },
  {
    src: "/10.png",
    alt: "Poster mengolah botol bekas",
    title: "Eco Bottle — Waste Management",
    description:
      "Poster edukasi lingkungan yang mengajak mengolah botol bekas menjadi daur ulang untuk masa depan yang lebih berkelanjutan.",
  },
  {
    src: "/11.png",
    alt: "Infografis era digital hidup sehat optimal",
    title: "Digital Wellbeing Infographic",
    description:
      "Infografis bertema era digital yang mengajarkan waktu istirahat, kebiasaan online aman, penggunaan informasi positif, dan gaya hidup sehat.",
  },
  {
    src: "/12.png",
    alt: "Poster acara Canva Creative",
    title: "Canva Creative 2025",
    description:
      "Desain poster acara Canva Creative untuk SMPN 9 Malang dengan visual pesta bintang, karakter pemandu, dan rangkaian kegiatan kreatif.",
  },
  {
    src: "/13.png",
    alt: "Materi kreativitas Canva",
    title: "Canva Creative Workshop",
    description:
      "Materi presentasi Canva yang menjelaskan konsep desain, rundown singkat, tujuan kegiatan, dan enam langkah dasar meningkatkan kreativitas.",
  },
] satisfies Artwork[];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<
    Artwork | null
  >(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedArtwork) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedArtwork(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArtwork]);

  return (
    <section
      ref={sectionRef}
      id="karya"
      className="scroll-mt-20 bg-[#fbf9f5] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-[clamp(2.8rem,8vw,5rem)] font-black uppercase leading-none tracking-[-0.06em]">
            My Experience
          </h2>

          <p className="mx-auto mt-4 w-max max-w-full whitespace-nowrap text-xs leading-6 text-[#68605d] sm:text-sm">
            Creative works, visual stories &amp; ideas.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#68605d]">
            Scroll sideways to explore · Select a work to view it larger
          </p>
        </div>

        {/* HORIZONTAL ARTWORK GALLERY */}
        <div
          role="region"
          aria-label="Portfolio karya, scroll ke samping untuk melihat semuanya"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-8"
        >
          {artworks.map((artwork, index) => (
            <article
              key={artwork.src}
              style={{
                transitionDelay: hasEntered ? `${index * 100}ms` : "0ms",
              }}
              className={`group w-[min(82vw,340px)] shrink-0 snap-start transition-all duration-700 ease-out ${
                hasEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* IMAGE */}
              <button
                type="button"
                onClick={() => setSelectedArtwork(artwork)}
                aria-label={`View details for ${artwork.title}`}
                className="relative block aspect-[4/3] w-full overflow-hidden border border-[#252525] bg-[#f0eeeb] text-left"
              >
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  fill
                  sizes="(max-width: 640px) 82vw, 340px"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <span className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] font-bold tracking-widest">
                  0{index + 1}
                </span>
                <span className="absolute left-2 top-2 bg-[#202020] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  View detail
                </span>
              </button>

              {/* DESCRIPTION */}
              <div className="min-h-[112px] pt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#d77c99]">
                  My Portofolio
                </p>

                <h3 className="mt-1 text-sm font-black uppercase text-[#202020]">
                  {artwork.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#66605d]">
                  {artwork.description ??
                    "A creative visual project showcasing ideas, creativity, and attention to detail."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#202020]/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="artwork-detail-title"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border-2 border-[#202020] bg-[#fbf9f5] p-4 shadow-[8px_8px_0_#f7a9ca] md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              className="absolute right-3 top-3 z-10 border border-[#202020] bg-[#fbf9f5] px-3 py-2 text-xs font-black uppercase tracking-wider transition hover:bg-[#f7a9ca]"
              aria-label="Close artwork details"
            >
              Close
            </button>
            {selectedArtwork.gallery ? (
              <div>
                <p className="mt-10 mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#68605d]">
                  Scroll sideways to view screenshots
                </p>
                <div
                  role="region"
                  aria-label={`${selectedArtwork.title} screenshots`}
                  className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3"
                >
                  {selectedArtwork.gallery.map((image, index) => (
                    <div
                      key={image}
                      className="relative aspect-video w-[82vw] max-w-[820px] shrink-0 snap-center overflow-hidden border border-[#252525] bg-[#f0eeeb]"
                    >
                      <Image
                        src={image}
                        alt={`${selectedArtwork.title}, screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 82vw, 820px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] font-bold tracking-widest">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative mx-auto mt-10 h-[min(70vh,65vw)] w-full max-w-[900px] bg-[#f0eeeb]">
                <Image
                  src={selectedArtwork.src}
                  alt={selectedArtwork.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 1024px"
                  className="object-contain"
                />
              </div>
            )}
            <div className="pt-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#d77c99]">
                Creative Portfolio
              </p>
              <h3
                id="artwork-detail-title"
                className="mt-1 text-lg font-black uppercase text-[#202020]"
              >
                {selectedArtwork.title}
              </h3>
              {selectedArtwork.description && (
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#66605d]">
                  {selectedArtwork.description}
                </p>
              )}
              {selectedArtwork.href && (
                <a
                  href={selectedArtwork.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex border border-[#202020] bg-[#f7a9ca] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#202020] transition hover:bg-white"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
