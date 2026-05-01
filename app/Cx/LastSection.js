import Image from "next/image";

const LEFT_FEATURES = [
  {
    title: "Neural Energy Field",
    desc: "Stimulates brain\nactivity & focus",
    top: "20%",
    endX: 40,
    endY: 14,
  },
  {
    title: "Wireless Data Transfer",
    desc: "Seamless & secure\nneural communication",
    top: "46%",
    endX: 40,
    endY: 50,
  },
  {
    title: "Brain Activity Support",
    desc: "Improves cognition\n& mental performance",
    top: "72%",
    endX: 40,
    endY: 76,
  },
];

const RIGHT_FEATURES = [
  {
    title: "Nano Energy Nodes",
    desc: "Advanced nano-tech\nenergy emitters",
    top: "20%",
    endX: 60,
    endY: 14,
  },
  {
    title: "Invisible Health Shield",
    desc: "Protects against viruses,\ngerms & infections",
    top: "46%",
    endX: 60,
    endY: 50,
  },
  {
    title: "Soft Cyan Glow Ring",
    desc: "Ultra-light, comfortable\n& skin-safe design",
    top: "72%",
    endX: 60,
    endY: 76,
  },
];

function FeatureBlock({ title, desc, align = "left" }) {
  const isLeft = align === "left";
  return (
    <div className={isLeft ? "text-left" : "text-right"}>
      <h3 className="text-sm font-bold text-neutral-900 sm:text-base lg:text-lg">
        {title}
      </h3>
      <p className="mt-1 whitespace-pre-line text-xs text-neutral-700 sm:text-sm">
        {desc}
      </p>
    </div>
  );
}

export default function LastSection() {
  return (
    <section className="w-full bg-white ">
      <div className="relative w-full">
        <Image
          src="/banner-2.png"
          alt="One Mind Halo"
          width={1920}
          height={1080}
          priority={false}
          className="block h-auto w-full"
        />

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {LEFT_FEATURES.map((f) => (
            <div
              key={f.title}
              className="absolute left-[3%] w-[19%] -translate-y-1/2 lg:left-[5%]"
              style={{ top: f.top }}
            >
              <FeatureBlock title={f.title} desc={f.desc} align="left" />
            </div>
          ))}
          {RIGHT_FEATURES.map((f) => (
            <div
              key={f.title}
              className="absolute right-[3%] w-[19%] -translate-y-1/2 lg:right-[5%]"
              style={{ top: f.top }}
            >
              <FeatureBlock title={f.title} desc={f.desc} align="right" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-8 md:hidden">
        {[...LEFT_FEATURES, ...RIGHT_FEATURES].map((f) => (
          <FeatureBlock key={f.title} title={f.title} desc={f.desc} align="left" />
        ))}
      </div>
    </section>
  );
}
