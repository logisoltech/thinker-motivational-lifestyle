import Image from "next/image";

export default function ThinkSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 text-center sm:px-8 lg:px-12">
        <h2 className="text-3xl leading-none font-extrabold uppercase tracking-tight text-neutral-950 sm:text-5xl">
          1 Thinker/Immunizer
        </h2>

        <div className="mx-auto mt-8 w-full max-w-5xl sm:mt-10">
          <Image
            src="/think.jpg"
            alt="One mind thinker learner cap"
            width={1600}
            height={740}
            className="h-56 w-full rounded-3xl object-cover sm:h-64 md:h-72"
          />
        </div>
      </div>
    </section>
  );
}
