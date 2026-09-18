import Image from "next/image";

export default function MdOneSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-14 lg:px-12">
        <div className="w-full max-w-xl md:w-[52%]">
          <h2 className="text-balance text-3xl leading-[1.08] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.35rem]">
            MD-1 One for All Software
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-700">
            Computer chips are more dense able to send more information in a
            one-way on-off switch process but the human brain is able to produce
            &amp; create a web of more neurons and more complex connectivity
            back and forth on its own as the organizer of information.
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            The chips are the info collectors and senders while the brain is the
            organizer. Similar to digital information used by computers as a
            code, the brain has its own much more organized electrical
            stimuluses as its code where one day both codes will come together.
            We&apos;re almost there.
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            That is science&apos;s next breakthrough where chips and human
            brains establish a connection working together.
          </p>

          <h3 className="mt-8 text-2xl leading-[1.1] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[1.75rem]">
            Learning Process Is Now Easy
          </h3>

          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Learning which is one of the most difficult human skills becomes
            easier &amp; faster by-passing organs and the senses like the eye
            or ear or nose &amp; tongue or the skin for touch. A digital
            wireless communication chip directly implants the info into your
            memory as quick as the speed of light. You will know how to react
            in a correct, safe and a speedy manner.
          </p>
        </div>

        <div className="w-full max-w-lg md:w-[42%]">
          <Image
            src="/haloooo.jpg"
            alt="MD-1 One for All Software visual"
            width={900}
            height={700}
            unoptimized
            className="h-auto w-full rounded-[1.75rem]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
