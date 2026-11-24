
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, X, ChevronRight } from "lucide-react";

type Artwork = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  gallery?: string[];
  category: "Development Project" | "Graphic Design";
};

type CategoryItem = {
  src: string;
  title: string;
  type: "image" | "pdf";
};

type PortfolioCategory = {
  title: string;
  subtitle: string;
  color: string;
  items: CategoryItem[];
};

const artworks: Artwork[] = [
  {
    src: "/cozy1%20(3).png",
    alt: "LOCAYY Coworking Space",
    title: "LOCAYY — Coworking Space",
    description:
      "A coworking space booking experience designed to help users discover workspaces and manage reservations.",
    href: "https://github.com/nellabilarly/Coworking",
    category: "Development Project",
    gallery: ["/cozy1%20(1).png", "/cozy1%20(2).png", "/cozy1%20(3).png"],
  },
  {
    src: "/Nusarasa.png",
    alt: "Nusarasa Food Ordering",
    title: "Nusarasa",
    description:
      "An Indonesian food ordering experience with a warm visual identity and an authentic culinary atmosphere.",
    href: "https://github.com/Nellasalsabila/Nusarasa",
    category: "Development Project",
    gallery: ["/Nusarasa.png", "/Nusarasa%20(2).png", "/Nusarasa%20(3).png"],
  },
  {
    src: "/1.png",
    alt: "Classic Chocolate Cookie",
    title: "Classic Chocolate Cookie",
    description:
      "Desain grafis promosi produk kuliner soft cookies dengan palet warna cokelat hangat dan tipografi ekspresif untuk menonjolkan tekstur produk.",
    category: "Graphic Design",
  },
  {
    src: "/2.png",
    alt: "All About Fourth",
    title: "#1018",
    description:
      "Poster kolase bergaya editorial yang merangkum profil musisi serta peluncuran singel Alright milik Fourth Nattawat.",
    category: "Graphic Design",
  },
  {
    src: "/3.png",
    alt: "Libra Fourth Nattawat",
    title: "Libra - Fourth Nattawat",
    description:
      "Poster potret monokrom dengan aksen piksel kuning neon yang kontras untuk menciptakan kesan modern dan edgy.",
    category: "Graphic Design",
  },
  {
    src: "/4.png",
    alt: "A Day With Fourth",
    title: "A Day With Fourth",
    description:
      "Desain sampul bergaya majalah modern dengan permainan tipografi biru berlapis di belakang objek utama.",
    category: "Graphic Design",
  },
  {
    src: "/5.png",
    alt: "Riser Energy",
    title: "Riser Energy",
    description:
      "Poster kolase konser bergaya retro-modern dengan sentuhan warna ungu dan tekstur kertas.",
    category: "Graphic Design",
  },
  {
    src: "/7.png",
    alt: "Iqbaal Ramadhan",
    title: "Iqbaal Ramadhan",
    description:
      "Poster potret bergaya klasik-modern dengan permainan kontras warna oranye dan latar biru bertekstur.",
    category: "Graphic Design",
  },
  {
    src: "/8.png",
    alt: "Gemini Norawit",
    title: "Gemini - Who's That Man?",
    description:
      "Poster editorial dengan efek sobekan kertas dan perpaduan warna ungu-merah muda yang dinamis.",
    category: "Graphic Design",
  },
  {
    src: "/dg%20(1).png",
    alt: "Captcha Verify",
    title: "Captcha - Welcome Please Verify",
    description:
      "Poster kolase retro Y2K yang memadukan antarmuka verifikasi digital, efek halftone biru, dan elemen musik CD.",
    category: "Graphic Design",
  },
  {
    src: "/dg.png",
    alt: "Fourth Born to Shine",
    title: "Fourth Nattawat - Born to Shine",
    description:
      "Poster editorial minimalis dengan komposisi high-angle, tipografi melengkung, dan aksen kuning kontras.",
    category: "Graphic Design",
  },
  {
    src: "/10.png",
    alt: "Masa Depan Hijau",
    title: "Masa Depan Hijau",
    description:
      "Poster ilustrasi edukatif bertema daur ulang sampah plastik dengan gaya visual ramah anak dan penuh warna.",
    category: "Graphic Design",
  },
  {
    src: "/11.png",
    alt: "Era Digital Hidup Sehat Optimal",
    title: "Era Digital Hidup Sehat Optimal",
    description:
      "Infografis bertema gaya hidup sehat di era digital dengan tata letak panel dan akronim HIDUP.",
    category: "Graphic Design",
  },
  {
    src: "/12.png",
    alt: "Canva Creative SMPN 9 Malang",
    title: "Canva Creative - SMPN 9 Malang",
    description:
      "Poster promosi acara kreatif sekolah dengan elemen tipografi 3D dan ilustrasi bergaya fantasi.",
    category: "Graphic Design",
  },
  {
    src: "/13.png",
    alt: "Canva Creative Rundown",
    title: "Canva Creative - Rundown & Tips",
    description:
      "Poster informasi acara pelatihan desain grafis dengan jadwal kegiatan dan akronim edukatif CANVA.",
    category: "Graphic Design",
  },
];

const portfolioCategories: PortfolioCategory[] = [
  {
    title: "Certificates",
    subtitle: "Pelatihan, pembelajaran, dan pencapaian akademik.",
    color: "#DF7861",
    items: [
      { src: "/sertifikat/LombaPoster.jpeg", title: "Lomba Poster", type: "image" },
      { src: "/sertifikat/Ai.png", title: "Artificial Intelligence", type: "image" },
      { src: "/sertifikat/OlipiadeBiologi.png", title: "Olimpiade Biologi", type: "image" },
      { src: "/sertifikat/nodejs.png", title: "Node.js Intermediate", type: "image" },
      { src: "/sertifikat/problem.png", title: "Problem Solving Basic", type: "image" },
    ],
  },
  {
    title: "Badan Dakwah Islam",
    subtitle:
      "Mengelola pencatatan arus kas, anggaran, dan pelaporan keuangan organisasi secara transparan untuk mendukung program kerja.",
    color: "#ECB390",
    items: [
      { src: "/bdi/Screenshot%202026-11-24%20091450.png", title: "Financial Administration 01", type: "image" },
      { src: "/bdi/Screenshot%202026-11-24%20091547.png", title: "Financial Administration 02", type: "image" },
      { src: "/bdi/Screenshot%202026-11-24%20091625.png", title: "Financial Administration 03", type: "image" },
      { src: "/bdi/WhatsApp%20Image%202026-11-24%20at%2009.09.35.jpeg", title: "BDI Activity", type: "image" },
    ],
  },
  {
    title: "METIC",
    subtitle:
      "Menjalankan strategi pemasaran dan promosi produk maupun jasa digital untuk mendukung target penjualan organisasi.",
    color: "#DF7861",
    items: [
      { src: "/metic/5b765da9-7cfb-46a8-b692-5948778627d7.jpg", title: "METIC", type: "image" },
    ],
  },
  {
    title: "OSIS SMP",
    subtitle:
      "Merencanakan dan menjalankan program kerja yang menumbuhkan kedisiplinan serta jiwa nasionalisme di kalangan siswa.",
    color: "#D4E2D4",
    items: [
      { src: "/osis%20smp/WhatsApp%20Image%202026-11-24%20at%2009.06.53.jpeg", title: "OSIS Activity 01", type: "image" },
      { src: "/osis%20smp/WhatsApp%20Image%202026-11-24%20at%2009.06.54.jpeg", title: "OSIS Activity 02", type: "image" },
    ],
  },
  {
    title: "Pramuka SMP",
    subtitle:
      "Berpartisipasi aktif dalam kegiatan kepramukaan untuk melatih kemandirian, kepemimpinan, dan kerja sama tim.",
    color: "#ECB390",
    items: [
      { src: "/pramuka%20smp/56306bd8-22a0-4783-8c86-b6ae3bf1cb5e.jpg", title: "Pramuka Activity 01", type: "image" },
      { src: "/pramuka%20smp/f9794ccb-58a7-427a-bdc9-138a8aaa4c1a.jpg", title: "Pramuka Activity 02", type: "image" },
    ],
  },
  {
    title: "Palwaga",
    subtitle:
      "Merancang konsep, menyusun rundown, dan mengoordinasikan berbagai kegiatan kepencintaalaman.",
    color: "#D4E2D4",
    items: [
      { src: "/palwaga/db3ce3d4-cd0a-4377-9c6b-a9f902f9f561.jpg", title: "Palwaga Activity", type: "image" },
    ],
  },
];

const C = {
  cream: "#FCF8E8",
  sage: "#D4E2D4",
  peach: "#ECB390",
  coral: "#DF7861",
  brown: "#493A32",
  muted: "#756459",
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [hasEntered, setHasEntered] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory | null>(null);

  const modalOpen = Boolean(selectedArtwork || selectedCategory);

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
    if (!modalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedArtwork(null);
        setSelectedCategory(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const closeModal = () => {
    setSelectedArtwork(null);
    setSelectedCategory(null);
  };

  return (
    <section
      ref={sectionRef}
      id="karya"
      className="scroll-mt-20 bg-[#FCF8E8] px-6 py-20 text-[#493A32] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADING */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#DF7861]">
            A selection of my journey
          </p>

          <h2 className="text-center text-[clamp(2.8rem,8vw,5rem)] font-black uppercase leading-none tracking-[-0.06em]">
            Selected Works
            <span className="text-[#DF7861]">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-7 text-[#756459]">
            A collection of digital projects, creative designs, and experiences
            that reflect my journey.
          </p>
        </div>

        {/* DEVELOPMENT PROJECTS */}
        <div className="mb-14">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DF7861]">
                01 — Digital Experience
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                Development Projects
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#756459]">
                Websites and digital experiences I have worked on.
              </p>
            </div>

            <span className="hidden text-[10px] font-bold uppercase tracking-widest text-[#756459] sm:block">
              {artworks.filter((item) => item.category === "Development Project").length} Projects
            </span>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {artworks
              .filter((item) => item.category === "Development Project")
              .map((artwork, index) => (
                <article
                  key={artwork.src}
                  style={{
                    transitionDelay: hasEntered ? `${index * 100}ms` : "0ms",
                  }}
                  className={`group transition-all duration-700 ${
                    hasEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedArtwork(artwork)}
                    aria-label={`View ${artwork.title}`}
                    className="relative block aspect-[16/10] w-full overflow-hidden border-2 border-[#493A32] bg-[#D4E2D4] text-left shadow-[5px_5px_0_#ECB390] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#DF7861]"
                  >
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 560px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <span className="absolute left-4 top-4 bg-[#DF7861] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-[#FCF8E8]">
                      Development
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-[#493A32] bg-[#FCF8E8] transition group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={19} />
                    </span>
                  </button>

                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DF7861]">
                        Project 0{index + 1}
                      </p>

                      <h4 className="mt-2 text-lg font-black uppercase leading-tight">
                        {artwork.title}
                      </h4>

                      <p className="mt-2 max-w-lg text-xs leading-6 text-[#756459]">
                        {artwork.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedArtwork(artwork)}
                      aria-label={`More about ${artwork.title}`}
                      className="mt-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#493A32] transition hover:bg-[#ECB390]"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* GRAPHIC DESIGN */}
        <div className="border-t border-[#D4E2D4] pt-12 md:pt-16">
          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DF7861]">
              02 — Visual Creativity
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
              Graphic Design
            </h3>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#756459]">
              Visual explorations, creative posters, and graphic design
              projects.
            </p>
          </div>

          <div
            role="region"
            aria-label="Graphic design gallery"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-7"
          >
            {artworks
              .filter((item) => item.category === "Graphic Design")
              .map((artwork, index) => (
                <article
                  key={artwork.src}
                  style={{
                    transitionDelay: hasEntered
                      ? `${Math.min(index, 5) * 70}ms`
                      : "0ms",
                  }}
                  className={`group w-[min(78vw,290px)] shrink-0 snap-start transition-all duration-700 ${
                    hasEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedArtwork(artwork)}
                    aria-label={`View ${artwork.title}`}
                    className="relative block aspect-[4/3] w-full overflow-hidden border-2 border-[#493A32] bg-[#D4E2D4] text-left shadow-[4px_4px_0_#ECB390] transition duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0_#DF7861]"
                  >
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      fill
                      sizes="(max-width: 640px) 78vw, 290px"
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    <span className="absolute bottom-3 right-3 border border-[#493A32] bg-[#FCF8E8] px-2 py-1 text-[10px] font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>

                  <div className="min-h-[120px] pt-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DF7861]">
                      Graphic Design
                    </p>

                    <h4 className="mt-2 text-sm font-black uppercase leading-6">
                      {artwork.title}
                    </h4>

                    <p className="mt-2 line-clamp-3 text-xs leading-6 text-[#756459]">
                      {artwork.description}
                    </p>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* EXPERIENCE & CERTIFICATES */}
        <div className="mt-12 border-t border-[#D4E2D4] pt-12 md:mt-16 md:pt-16">
          <div className="mb-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DF7861]">
              03 — Beyond the Projects
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Experience & Certificates
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#756459]">
              Activities, organizational experiences, and learning achievements
              that have helped me grow.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="group relative min-h-[190px] overflow-hidden border-2 border-[#493A32] bg-[#D4E2D4] p-5 text-left shadow-[5px_5px_0_#ECB390] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#DF7861]"
              >
                <span
                  className="absolute inset-y-0 left-0 w-3"
                  style={{ backgroundColor: category.color }}
                />

                <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#493A32] bg-[#FCF8E8] transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={17} />
                </span>

                <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.16em] text-[#DF7861]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(category.items.length).padStart(2, "0")} ITEMS
                </p>

                <h4 className="mt-2 pr-8 text-xl font-black uppercase leading-tight">
                  {category.title}
                </h4>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#756459]">
                  {category.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ARTWORK MODAL */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#493A32]/80 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="artwork-detail-title"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border-2 border-[#493A32] bg-[#FCF8E8] p-4 shadow-[8px_8px_0_#DF7861] md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close artwork details"
              className="absolute right-3 top-3 z-10 flex items-center gap-2 border border-[#493A32] bg-[#D4E2D4] px-3 py-2 text-[10px] font-black uppercase transition hover:bg-[#ECB390]"
            >
              Close <X size={15} />
            </button>

            {/* PROJECT GALLERY */}
            {selectedArtwork.gallery ? (
              <div className="pt-10">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DF7861]">
                  Project Preview — Scroll to explore
                </p>

                <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                  {selectedArtwork.gallery.map((image, index) => (
                    <div
                      key={image}
                      className="relative aspect-video w-[85vw] max-w-[820px] shrink-0 snap-center overflow-hidden border-2 border-[#493A32] bg-[#D4E2D4]"
                    >
                      <Image
                        src={image}
                        alt={`${selectedArtwork.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 85vw, 820px"
                        className="object-contain"
                      />

                      <span className="absolute bottom-3 right-3 border border-[#493A32] bg-[#FCF8E8] px-2 py-1 text-[10px] font-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative mx-auto mt-12 h-[min(65vh,700px)] w-full max-w-[900px] bg-[#D4E2D4]">
                <Image
                  src={selectedArtwork.src}
                  alt={selectedArtwork.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 900px"
                  className="object-contain"
                />
              </div>
            )}

            {/* DESCRIPTION */}
            <div className="pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DF7861]">
                {selectedArtwork.category}
              </p>

              <h3
                id="artwork-detail-title"
                className="mt-2 text-xl font-black uppercase md:text-2xl"
              >
                {selectedArtwork.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756459]">
                {selectedArtwork.description}
              </p>

              {selectedArtwork.href && (
                <a
                  href={selectedArtwork.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center border-2 border-[#493A32] bg-[#DF7861] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#FCF8E8] transition hover:bg-[#ECB390] hover:text-[#493A32]"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CATEGORY MODAL */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#493A32]/80 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-detail-title"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border-2 border-[#493A32] bg-[#FCF8E8] p-4 shadow-[8px_8px_0_#DF7861] md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close category details"
              className="absolute right-3 top-3 z-10 flex items-center gap-2 border border-[#493A32] bg-[#D4E2D4] px-3 py-2 text-[10px] font-black uppercase transition hover:bg-[#ECB390]"
            >
              Close <X size={15} />
            </button>

            {/* CATEGORY HEADING */}
            <div className="mb-7 pr-16 pt-10 md:pt-3">
              <span
                className="inline-block px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#493A32]"
                style={{ backgroundColor: selectedCategory.color }}
              >
                Experience & Organization
              </span>

              <h3
                id="category-detail-title"
                className="mt-4 text-2xl font-black uppercase md:text-4xl"
              >
                {selectedCategory.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756459]">
                {selectedCategory.subtitle}
              </p>
            </div>

            {/* CATEGORY ITEMS */}
            <div className="grid gap-5 sm:grid-cols-2">
              {selectedCategory.items.map((item, index) =>
                item.type === "pdf" ? (
                  <a
                    key={item.src}
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-44 items-center gap-5 border-2 border-[#493A32] bg-[#D4E2D4] p-5 shadow-[4px_4px_0_#ECB390] transition hover:-translate-y-1 hover:bg-[#ECB390]"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-[#493A32] bg-[#DF7861] text-sm font-black text-[#FCF8E8]">
                      PDF
                    </span>

                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#DF7861]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="mt-2 block text-sm font-black uppercase">
                        {item.title}
                      </span>

                      <span className="mt-3 block text-[10px] font-bold uppercase tracking-wider text-[#756459]">
                        Open Certificate ↗
                      </span>
                    </span>
                  </a>
                ) : (
                  <figure
                    key={item.src}
                    className="overflow-hidden border-2 border-[#493A32] bg-[#D4E2D4] shadow-[4px_4px_0_#ECB390]"
                  >
                    <div className="relative aspect-[4/3] bg-[#D4E2D4]">
                      <Image
                        src={item.src}
                        alt={`${selectedCategory.title} - ${item.title}`}
                        fill
                        sizes="(max-width: 640px) 90vw, 480px"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="flex items-center justify-between gap-3 border-t-2 border-[#493A32] bg-[#FCF8E8] px-4 py-3">
                      <span className="text-xs font-black uppercase">
                        {item.title}
                      </span>

                      <span className="text-[10px] font-bold text-[#DF7861]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
