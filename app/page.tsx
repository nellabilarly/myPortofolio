"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Folder, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectsSection from "./components/karya/ProjectsSection";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#karya" },
  ];

  return (
    <main className="min-h-screen w-full bg-[#FCF8E8] font-sans text-[#493A32]">
      <div className="min-h-screen w-full overflow-hidden">
       
        <header
          className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
            hasScrolled || isMenuOpen
              ? "border-[#D4E2D4] bg-[#FCF8E8]/95 shadow-sm backdrop-blur-md"
              : "border-transparent bg-[#FCF8E8]"
          }`}
        >
          <nav className="relative flex h-[72px] items-center justify-center px-6 md:px-12">
            <Link
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wide text-[#493A32] md:text-base"
            >
              Nella Salsabila
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="absolute right-6 flex h-10 w-10 items-center justify-center border border-[#493A32] bg-[#D4E2D4] transition hover:bg-[#ECB390] md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div
              id="mobile-navigation"
              className={`absolute left-0 right-0 top-[72px] overflow-hidden border-b border-[#493A32] bg-[#FCF8E8] shadow-md transition-all duration-300 md:hidden ${
                isMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="flex flex-col px-6 py-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="border-b border-[#D4E2D4] py-4 text-xs font-black uppercase tracking-[0.15em] transition hover:pl-2 hover:text-[#DF7861] last:border-0"
                  >
                    {String(index + 1).padStart(2, "0")} — {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <section
          id="home"
          className="flex min-h-screen scroll-mt-20 items-center px-6 pb-16 pt-28 md:px-12 md:pb-20"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20">

            <div>
              <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.35em] text-[#DF7861] md:text-left">
                Creative Portfolio
              </p>

              <h1 className="text-center text-[clamp(3.5rem,10vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-[#493A32] md:text-left">
                Portfolio
              </h1>

              <p className="mx-auto mt-7 max-w-[440px] text-center text-sm leading-6 text-[#756459] md:mx-0 md:text-left md:text-base">
                Designed to showcase content work, creative ideas, brand
                collaborations, and visual stories.
              </p>

              <div className="mt-7 flex justify-center md:justify-start">
                <a
                  href="https://wa.me/6282245504506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-y-2 border-[#493A32] bg-[#DF7861] px-9 py-3 text-sm font-extrabold uppercase text-[#FCF8E8] transition hover:bg-[#493A32]"
                >
                  <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-[#493A32]" />
                  Let's Connect
                  <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#493A32]" />
                </a>
              </div>

              <div className="mt-8 flex justify-center gap-9 text-[#493A32] md:justify-start">
                <a
                  href="https://www.instagram.com/sheneiiy/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:-translate-y-1 hover:text-[#DF7861]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[25px] w-[25px]"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>

                <a
                  href="https://open.spotify.com/user/31ka34n5ji4w7hdfj3ykuf4vw7qu?si=e6f0bd23f08f496f"
                  aria-label="Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:-translate-y-1 hover:text-[#DF7861]"
                >
                  <svg viewBox="0 0 24 24" className="h-[25px] w-[25px]">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path
                      d="M6.5 9c4.1-1.2 8.4-.8 11.5 1"
                      fill="none"
                      stroke="#FCF8E8"
                      strokeLinecap="round"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7.2 12c3.4-1 7-.6 9.7.9"
                      fill="none"
                      stroke="#FCF8E8"
                      strokeLinecap="round"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 14.8c2.7-.7 5.3-.4 7.6.8"
                      fill="none"
                      stroke="#FCF8E8"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/nella-salsabila-539251346/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:-translate-y-1 hover:text-[#DF7861]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[25px] w-[25px]"
                  >
                    <path d="M5.2 7.7a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM3.4 9.3H7v11.2H3.4V9.3Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.1H17v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.2V9.3Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT PROFILE */}
            <div className="relative mx-auto flex h-[390px] w-full max-w-[390px] items-center justify-center md:h-[470px]">
              <div className="absolute h-[330px] w-[290px] rotate-3 rounded-[44px] border-2 border-[#493A32] bg-[#ECB390] shadow-[12px_12px_0_#D4E2D4] md:h-[390px] md:w-[330px]" />

              <div className="absolute left-1/2 top-1/2 z-10 h-[348px] w-[260px] -translate-x-1/2 -translate-y-[54%] overflow-hidden rounded-t-[130px] rounded-b-[24px] border-2 border-[#493A32] bg-[#D4E2D4] shadow-[8px_8px_0_#DF7861] md:h-[410px] md:w-[300px]">
                <Image
                  src="/foto2.jpg"
                  alt="Potret Nella Salsabila"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 800px) 260px, 300px"
                  className="object-cover object-[50%_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#493A32]/35 to-transparent" />
              </div>

              <div className="absolute left-0 top-8 z-30 -rotate-6 md:left-[-18px]">
                <div className="flex items-center gap-2 border-2 border-[#493A32] bg-[#DF7861] px-3 py-2 shadow-[4px_4px_0_#493A32]">
                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#493A32]">
                    Beradaptasi
                  </span>
                </div>
              </div>

              <div className="absolute right-0 top-14 z-30 rotate-6 md:right-[-22px]">
                <div className="flex items-center gap-2 border-2 border-[#493A32] bg-[#ECB390] px-3 py-2 shadow-[4px_4px_0_#493A32]">
                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#493A32]">
                    Collaboration
                  </span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 z-30 -rotate-3 md:left-[-22px]">
                <div className="flex items-center gap-2 border-2 border-[#493A32] bg-[#D4E2D4] px-3 py-2 shadow-[4px_4px_0_#493A32]">
                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#493A32]">
                    Extrovert
                  </span>
                </div>
              </div>

              <div className="absolute bottom-24 right-0 z-30 rotate-3 md:right-[-20px]">
                <div className="flex items-center gap-2 border-2 border-[#493A32] bg-[#FCF8E8] px-3 py-2 shadow-[4px_4px_0_#493A32]">
                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#493A32]">
                    Perseverance
                  </span>
                </div>
              </div>
              <div className="absolute bottom-3 z-30 border-2 border-[#493A32] bg-[#D4E2D4] px-5 py-2 text-center shadow-[4px_4px_0_#493A32]">
                <p className="text-sm font-black uppercase tracking-[0.08em]">
                  Nella Salsabila
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 bg-[#D4E2D4] px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-[#ECB390]" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#493A32] bg-[#FCF8E8]">
                <Image
                  src="/foto.jpg"
                  alt="Potret Nella Salsabila"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover object-[50%_20%]"
                />
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#DF7861]">
                About me
              </p>

              <h2 className="font-serif text-4xl italic leading-tight text-[#493A32] md:text-6xl">
                Hi, I'm Nella!
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#65564C] md:text-lg">
                <p>
                  Halo! Saya{" "}
                  <strong className="text-[#493A32]">Nella Salsabila</strong>,
                  pelajar{" "}
                  <strong className="text-[#493A32]">SMK Telkom Malang</strong>{" "}
                  yang berfokus pada{" "}
                  <strong className="text-[#493A32]">
                    Frontend Development
                  </strong>
                  ,{" "}
                  <strong className="text-[#493A32]">Digital Marketing</strong>,
                  dan{" "}
                  <strong className="text-[#493A32]">Creative Design</strong>.
                </p>

                <p>
                  Saya berpengalaman membangun antarmuka website yang responsif
                  menggunakan{" "}
                  <strong className="text-[#493A32]">
                    React.js, Next.js, dan Tailwind CSS
                  </strong>
                  , serta merancang{" "}
                  <strong className="text-[#493A32]">
                    konten visual kreatif
                  </strong>{" "}
                  untuk mendukung kebutuhan branding dan pemasaran digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section
          id="contact"
          className="scroll-mt-20 bg-[#DF7861] px-6 py-20 text-center text-[#FCF8E8] md:px-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#493A32]">
            Have a project in mind?
          </p>

          <h2 className="mt-4 font-serif text-4xl italic md:text-6xl">
            Let's work together!
          </h2>
        </section>

        <footer className="flex flex-col items-center justify-center gap-3 bg-[#D4E2D4] px-6 py-7 text-xs font-semibold uppercase tracking-wide text-[#493A32] md:flex-row md:px-12">
          <p>© 2026 Nella. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
