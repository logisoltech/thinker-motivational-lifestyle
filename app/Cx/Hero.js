"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ShieldPlus } from "lucide-react";
import "aos/dist/aos.css";
import Nav from "./Nav";

const FEATURES = [
  {
    image: "/brain-side.png",
    title: "Smarter Thinking",
    desc: "Enhance focus, memory and mental clarity.",
    points: ["Light patterns speak to the brain and send info."],
  },
  {
    icon: ShieldPlus,
    title: "Health Protection",
    desc: "Invisible shield against viruses, germs & infections.",
    points: ["Pepper Spray"],
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
        src="/halo-design-onman-01.png"
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
          className="h-20 w-auto sm:h-22 md:h-24 lg:h-28"
          priority
        />
      </a>

      <Nav />

      {/* Top-right CTA buttons (desktop) */}
      <div
        className="absolute right-6 top-8 z-30 hidden items-center gap-3 sm:flex lg:right-8"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <a
          href="#invest"
          className="inline-flex items-center justify-center rounded-full bg-[#E8B93A] px-6 py-2.5 text-sm font-bold text-black shadow-lg transition hover:bg-[#d9aa2e]"
        >
          Invest / Donate
        </a>
        <a
          href="#crypto"
          className="inline-flex items-center justify-center rounded-full bg-[#E8B93A] px-6 py-2.5 text-sm font-bold text-black shadow-lg transition hover:bg-[#d9aa2e]"
        >
          Buy M.D Crypto
        </a>
      </div>

      {/* Bottom white fade (image polish) */}
      {/* <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-[min(42vh,22rem)] bg-linear-to-t from-white from-12% via-white/85 via-45% to-transparent"
        aria-hidden
      /> */}

      {/* HUD visor callout */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        <div className="absolute left-[39%] top-[42%] w-48 lg:left-[41%] lg:top-[43%] lg:w-56">
          <p className="text-sm font-bold leading-snug text-black drop-shadow-[0_1px_10px_rgba(255,255,255,0.85)] lg:text-base">
            Oled HUD Display for Internet Connection and Emails.
          </p>
        </div>

        <svg className="absolute inset-0 size-full" aria-hidden>
          <line
            x1="55%"
            y1="47%"
            x2="62%"
            y2="42.5%"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="62%" cy="42.5%" r="4" fill="#0f172a" />
        </svg>
      </div>

      {/* Headline block: left aligned to match reference */}
      <div
        className="absolute left-5 top-36 z-20 w-[min(40rem,calc(100%-2rem))] sm:left-10 sm:top-40 sm:w-[min(42rem,calc(100%-3rem))] md:left-14 md:top-44 md:w-[min(44rem,calc(100%-4rem))] lg:left-20 lg:top-48 lg:w-160"
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
            wireless neural support, and invisible health, and crime protection.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-10">
            {FEATURES.map(({ icon: Icon, image, title, desc, points }) => (
              <div key={title} className="flex max-w-60 items-start gap-4">
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    width={80}
                    height={80}
                    unoptimized
                    className="mt-0.5 h-18 w-18 shrink-0 object-contain sm:h-20 sm:w-20"
                  />
                ) : (
                  <Icon
                    className="mt-0.5 h-11 w-11 shrink-0 stroke-[1.5] text-[#007bff] sm:h-12 sm:w-12"
                    aria-hidden
                  />
                )}
                <div>
                  <p className="text-sm font-bold text-black sm:text-base">
                    {title}
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-xs leading-relaxed text-black sm:text-sm">
                    <li>{desc}</li>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}