"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Folder } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectsSection from "./components/karya/ProjectsSection";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#fbf9f5] font-sans text-[#202020]">
      <div className="min-h-screen w-full overflow-hidden">
        <header
          className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
            hasScrolled
              ? "border-[#e8e4de] bg-[#fbf9f5]/95 shadow-sm backdrop-blur-md"
              : "border-transparent bg-[#fbf9f5]"
          }`}
        >
          <nav className="flex h-[72px] items-center justify-center px-6 md:px-12">
            <Link
              href="#home"
              className="text-sm font-black uppercase tracking-wide md:text-base"
            >
              Nella Salsabila
            </Link>
          </nav>
        </header>

        <section
          id="home"
          className="flex min-h-screen scroll-mt-20 items-center px-6 pb-16 pt-28 md:px-12 md:pb-20"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
            <div>
              <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
                Portfolio
              </h1>

              <p className="mx-auto mt-7 max-w-[440px] text-center text-sm leading-6 text-[#454545] md:mx-0 md:text-left md:text-base">
                designed to showcase content work, creative ideas, brand
                collaborations, and visual stories.
              </p>

              <div className="mt-7 flex justify-center md:justify-start">
                <a
                  href="https://wa.me/6282245504506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-y-2 border-[#83baff] bg-[#d7edff] px-9 py-3 text-sm font-extrabold uppercase transition hover:bg-[#b9ddff]"
                >
                  <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-[#3679ed]" />
                  Let&apos;s Connect
                  <ArrowUpRight className="ml-2 inline-block h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#3679ed]" />
                </a>
              </div>

              <div className="mt-8 flex justify-center gap-9 md:justify-start">
                <a
                  href="https://www.instagram.com/sheneiiy/"
                  aria-label="Instagram"
                  className="transition hover:-translate-y-1 hover:text-[#ed729c]"
                >
                  <svg
                    aria-hidden="true"
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
                  className="transition hover:-translate-y-1 hover:text-[#ed729c]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-[25px] w-[25px]"
                  >
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path
                      d="M6.5 9c4.1-1.2 8.4-.8 11.5 1"
                      fill="none"
                      stroke="#fbf9f5"
                      strokeLinecap="round"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7.2 12c3.4-1 7-.6 9.7.9"
                      fill="none"
                      stroke="#fbf9f5"
                      strokeLinecap="round"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 14.8c2.7-.7 5.3-.4 7.6.8"
                      fill="none"
                      stroke="#fbf9f5"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nella-salsabila-539251346/"
                  aria-label="Linkedin"
                  className="transition hover:-translate-y-1 hover:text-[#ed729c]"
                >
                  <svg
                    aria-hidden="true"
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
              <div className="absolute h-[330px] w-[290px] rotate-3 rounded-[44px] border-2 border-[#202020] bg-[#c8e5f6] shadow-[12px_12px_0_#202020] md:h-[390px] md:w-[330px]" />

              <div className="absolute left-1/2 top-1/2 z-10 h-[348px] w-[260px] -translate-x-1/2 -translate-y-[54%] overflow-hidden rounded-t-[130px] rounded-b-[24px] border-2 border-[#202020] bg-[#b8dced] shadow-[8px_8px_0_#f7a9ca] md:h-[410px] md:w-[300px]">
                <Image
                  src="/foto2.jpg"
                  alt="Potret Nella Salsabila"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 800px) 260px, 300px"
                  className="object-cover object-[50%_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#202020]/35 to-transparent" />
              </div>

              <div className="absolute left-0 top-6 z-30 -rotate-6 md:left-[-12px]">
                <div className="rounded-lg bg-[#f7a9ca] px-2 py-1 shadow-[3px_3px_0_#202020]">
                  <Folder
                    size={48}
                    fill="#f7a9ca"
                    stroke="#202020"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="mt-1 block w-max rounded-sm border border-[#202020] bg-[#fbf9f5] px-1.5 py-1 text-[9px] font-black uppercase leading-none tracking-[0.04em] shadow-[2px_2px_0_#202020]">
                  Beradaptasi
                </span>
              </div>

              <div className="absolute right-0 top-12 z-30 rotate-6 md:right-[-18px]">
                <div className="rounded-lg bg-[#ff9d59] px-2 py-1 shadow-[3px_3px_0_#202020]">
                  <Folder
                    size={48}
                    fill="#ff9d59"
                    stroke="#202020"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="mt-1 block w-max rounded-sm border border-[#202020] bg-[#fbf9f5] px-1.5 py-1 text-right text-[9px] font-black uppercase leading-none tracking-[0.04em] shadow-[2px_2px_0_#202020]">
                  Collaboration
                </span>
              </div>

              <div className="absolute bottom-16 left-0 z-30 -rotate-3 md:left-[-18px]">
                <div className="rounded-lg bg-[#8dc5ff] px-2 py-1 shadow-[3px_3px_0_#202020]">
                  <Folder
                    size={48}
                    fill="#8dc5ff"
                    stroke="#202020"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="mt-1 block w-max rounded-sm border border-[#202020] bg-[#fbf9f5] px-1.5 py-1 text-[9px] font-black uppercase leading-none tracking-[0.04em] shadow-[2px_2px_0_#202020]">
                  Extrovert
                </span>
              </div>

              <div className="absolute bottom-20 right-0 z-30 rotate-3 md:right-[-16px]">
                <div className="rounded-lg bg-[#c5ed68] px-2 py-1 shadow-[3px_3px_0_#202020]">
                  <Folder
                    size={48}
                    fill="#c5ed68"
                    stroke="#202020"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="mt-1 block w-max rounded-sm border border-[#202020] bg-[#fbf9f5] px-1.5 py-1 text-right text-[9px] font-black uppercase leading-none tracking-[0.04em] shadow-[2px_2px_0_#202020]">
                  Perseverance
                </span>
              </div>

              <div className="absolute bottom-3 z-30 border-2 border-[#202020] bg-[#fbf9f5] px-5 py-2 text-center shadow-[4px_4px_0_#202020]">
                <p className="text-sm font-black uppercase tracking-[0.08em]">
                  Nella Salsabila
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section
          id="about"
          className="bg-[#fff8f8] px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-[#f7a9ca]" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#202020] bg-[#d7eaf2]">
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
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#df7295]">
                About me
              </p>
              <h2 className="font-serif text-4xl italic leading-tight md:text-6xl">
                Hi, I&apos;m Nella!
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#353535] md:text-lg">
                <p>
                  Halo! Saya <strong>Nella Salsabila</strong>, pelajar{" "}
                  <strong>SMK Telkom Malang</strong> yang berfokus pada{" "}
                  <strong>Frontend Development</strong>,{" "}
                  <strong>Digital Marketing</strong>, dan{" "}
                  <strong>Creative Design</strong>.
                </p>

                <p>
                  Saya berpengalaman membangun antarmuka website yang responsif
                  menggunakan{" "}
                  <strong>React.js, Next.js, dan Tailwind CSS</strong>, serta
                  merancang <strong>konten visual kreatif</strong> untuk
                  mendukung kebutuhan branding dan pemasaran digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <ProjectsSection />

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-[#202020] px-6 py-16 text-center text-white md:px-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f7a9ca]">
            Have a project in mind?
          </p>

          <h2 className="mt-4 font-serif text-4xl italic md:text-6xl">
            Let&apos;s work together!
          </h2>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bilarly10%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#f7a9ca] px-8 py-3 text-sm font-black uppercase text-[#202020] transition hover:bg-white"
          >
            Get in touch <ArrowUpRight size={17} />
          </a>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col items-center justify-between gap-3 bg-[#fbf9f5] px-6 py-7 text-xs font-semibold uppercase tracking-wide text-[#666] md:flex-row md:px-12">
          <p>Â© 2026 YOUR NAME. All rights reserved.</p>
          <Link href="#home" className="hover:text-[#ed729c]">
            Back to top â†‘
          </Link>
        </footer>
      </div>
    </main>
  );
}

