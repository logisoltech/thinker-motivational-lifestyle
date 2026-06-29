"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Brain, ShieldPlus } from "lucide-react";
import "aos/dist/aos.css";
import Nav from "./Nav";

const FEATURES = [
  {
    icon: Brain,
    title: "Smarter Thinking",
    desc: "Enhance focus, memory and mental clarity.",
  },
  {
    icon: ShieldPlus,
    title: "Health Protection",
    desc: "Invisible shield against viruses, germs & infections.",
  },
];

export default function Hero() {
  useEffect(() => {
    let mounted = true;

    async function initAOS() {
      const AOS = (await import("aos")).default;
      if (!mounted) return;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
      requestAnimationFrame(() => AOS.refreshHard());
    }

    initAOS();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/banner.png"
        alt=""
        fill
        priority
        quality={100}
        unoptimized
        className="object-cover object-top"
        sizes="100vw"
      />
      {/* Top vignette so logo & pill nav stay readable */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/50 via-black/10 to-transparent"
        aria-hidden
      />

      <a
        href="https://motivational-lifestyle.vercel.app/"
        className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
        aria-label="Home"
        data-aos="fade-right"
        data-aos-delay="80"
      >
        <Image
          src="/logo.png"
          alt="Institutional Lifestyle"
          width={400}
          height={130}
          className="h-16 w-auto sm:h-19 md:h-20 lg:h-24"
          priority
        />
      </a>

      <Nav />

      {/* Bottom white fade (image polish) */}
      {/* <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-[min(42vh,22rem)] bg-linear-to-t from-white from-12% via-white/85 via-45% to-transparent"
        aria-hidden
      /> */}

      {/* Headline block: left aligned to match reference */}
      <div
        className="absolute left-5 top-48 z-20 w-[min(40rem,calc(100%-2rem))] sm:left-10 sm:top-52 sm:w-[min(42rem,calc(100%-3rem))] md:left-14 md:top-56 md:w-[min(44rem,calc(100%-4rem))] lg:left-20 lg:top-64 lg:w-160"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="w-full text-left">
          <h1 className="max-w-116 text-2xl leading-[1.08] font-extrabold uppercase tracking-[0.01em] drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] sm:text-[2.05rem] md:text-[2rem]">
            <span className="block text-black whitespace-nowrap">
              HALO - Thinker/Immunizer/Protection
            </span>
            <span className="block text-[#007bff]">for all info/health</span>
          </h1>

          <p className="mt-5 max-w-116 text-sm font-normal leading-relaxed text-black drop-shadow-[0_1px_10px_rgba(255,255,255,0.4)] sm:text-[1.02rem]">
            Experience a futuristic HALO wearable designed for smarter thinking,
            wireless neural support, and invisible health protection.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-10">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex max-w-60 items-start gap-4">
                <Icon
                  className="mt-0.5 h-11 w-11 shrink-0 stroke-[1.5] text-[#007bff] sm:h-12 sm:w-12"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-bold text-black sm:text-base">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-black sm:text-sm">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}