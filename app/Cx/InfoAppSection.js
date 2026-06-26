import Image from "next/image";

export default function InfoAppSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-20 lg:px-12">
        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-md">
          <Image
            src="/idk.png"
            alt="Info app and capability visual"
            width={900}
            height={620}
            className="h-auto w-full rounded-[1.75rem]"
            priority={false}
          />
        </div>

        <div className="w-full max-w-xl md:w-120 md:max-w-none lg:w-136">
          <h2 className="text-balance text-3xl leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.55rem]">
            Info App & Capability
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 md:text-[1.05rem]">
            If you don&apos;t have time to read just see image or text on your
            cell phone and download directly all wireless into your memory with
            our new special app. It&apos;s good enough, better than a brain.
            (Limitations to memory download)
          </p>
        </div>
      </div>
    </section>
  );
}
