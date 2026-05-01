"use client";

import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Nav from "./Nav";

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
        href="/"
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
        className="absolute left-5 top-36 z-20 w-[min(34rem,calc(100%-2rem))] sm:left-10 sm:top-34 sm:w-[min(36rem,calc(100%-3rem))] md:left-14 md:top-40 md:w-[min(38rem,calc(100%-4rem))] lg:left-20 lg:top-46 lg:w-152"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="w-full text-left">
          <p className="max-w-104 font-extrabold uppercase tracking-[0.01em] text-black text-2xl leading-[1.05] drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] sm:text-[2.05rem] md:text-[2.25rem]">
          1 thinker/immunizer
          for all info & health
          </p>
          <p className="mt-5 max-w-116 text-sm font-normal leading-relaxed text-black/85 drop-shadow-[0_1px_10px_rgba(255,255,255,0.4)] sm:text-[1.02rem]">
          Unlock smarter thinking with advanced memory technology, intuitive controls, and precision electrodes designed to enhance how you learn and think.
          </p>
        </div>
      </div>
    </section>
  );
}