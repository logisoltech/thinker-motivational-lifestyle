import Image from "next/image";

export default function MindSectionTwo() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-20 lg:px-12">

        <div className="w-full max-w-xl md:w-120 md:max-w-none lg:w-136">
          <h2 className="text-balance text-3xl leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.55rem]">
            BUILT FOR LEARNING, HEALTH & PROTECTION
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 md:text-[1.05rem]">
            The One Mind Thinker-Learner Cap is an innovative wearable designed
            to enhance cognitive performance and learning efficiency. Equipped
            with advanced electrodes, a smart memory chip, and intuitive dial
            controls, it helps stimulate brain activity, improve focus, and
            support faster information retention. Built for students,
            professionals, and lifelong learners, this futuristic device brings
            technology and human potential together to unlock smarter thinking.
          </p>
        </div>
        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-md">
          <Image
            src="/idk2.png"
            alt="Thinker immunizer cap visual"
            width={900}
            height={620}
            className="h-auto w-full rounded-[1.75rem]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
