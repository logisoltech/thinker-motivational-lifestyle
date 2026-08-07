import Image from "next/image";

const COLUMNS = [
  {
    title: "Learning",
    bullets: [
      "Futuristic Halo",
      "One Mind Thinker",
      "Cognitive performance",
      "Neural energy field",
      "Wireless data transfer",
    ],
    image: "/halo-design-rework-05.png?v=3",
    alt: "Halo learning features",
    text: "Info App & Capability — if you don't have time to read, just see image or text on your cell phone and download directly all wireless into your memory with our new special app. It's good enough, better than a brain. (Limitations to memory download)",
  },
  {
    title: "Health",
    bullets: [
      "Radial invisible health shield",
      "Protection against viruses",
      "Germs & infection defense",
    ],
    image: "/halo-design-rework-07.png?v=3",
    alt: "Halo health shield features",
    text: "An invisible health shield wraps around you in real time — blocking viruses, germs, and infections while you focus on living smarter, healthier, and protected from everyday threats.",
  },
  {
    title: "Protection",
    bullets: [
      "Lens & pepper spray",
      "360° view",
      "Disarm anyone",
    ],
    image: "/halooo.png?v=3",
    alt: "Halo protection features",
    text: "Built-in personal defense with a 360° lens view and pepper spray capability — designed to help you stay aware, stay ready, and disarm threats before they reach you.",
  },
];

export default function MindSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <h2 className="mb-10 text-center text-3xl font-extrabold uppercase tracking-tight text-neutral-900 sm:mb-12 sm:text-4xl">
          Built for
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto] lg:gap-x-14 lg:gap-y-0">
          {COLUMNS.map(({ title, bullets, image, alt, text }) => (
            <article
              key={title}
              className="grid grid-rows-[auto_auto_auto_auto] items-start lg:row-span-4 lg:grid-rows-subgrid"
            >
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-900 underline decoration-2 underline-offset-4 sm:text-[1.65rem]">
                {title}
              </h3>

              <ul className="mt-4 list-disc space-y-1.5 self-start pl-5 text-sm leading-relaxed text-neutral-700 sm:text-base">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="relative mt-5 aspect-4/3 w-full overflow-hidden rounded-[1.75rem]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
              </div>

              <p className="mt-5 text-base leading-relaxed text-neutral-700">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
