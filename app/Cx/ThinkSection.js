import Image from "next/image";
import { TbAtom2 } from "react-icons/tb";
import { FiWifi } from "react-icons/fi";
import { LuSnowflake, LuBrain } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

const FEATURES = [
  { icon: TbAtom2, label: "Neural\nEnergy Field" },
  { icon: FiWifi, label: "Wireless\nData Transfer" },
  { icon: LuSnowflake, label: "Nano Energy\nNodes" },
  { icon: IoShieldCheckmarkOutline, label: "Invisible\nHealth Shield" },
  { icon: LuBrain, label: "Brain Activity\nSupport" },
  { icon: FaRegCircle, label: "Soft Cyan\nGlow Ring" },
];

export default function ThinkSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 lg:px-12">
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            One Mind Halo
          </h2>
          <p className="mt-3 text-sm font-medium text-neutral-700 sm:text-base">
            Thinker • Learner • Protector
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            An advanced wearable concept that enhances cognitive performance,
            supports brain activity, and provides invisible protection for a
            healthier, smarter you.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-0 sm:mt-10">
          <Image
            src="/halo-design-rework-07-removebg-preview.png"
            alt="Halo Thinker product view"
            width={900}
            height={520}
            unoptimized
            className="h-auto w-1/2 max-w-xs sm:max-w-sm lg:max-w-md"
            priority={false}
          />
          <Image
            src="/halo-design-rework-05-removebg-preview.png"
            alt="Halo Thinker alternate product view"
            width={900}
            height={520}
            unoptimized
            className="h-auto w-1/2 max-w-xs sm:max-w-sm lg:max-w-md"
            priority={false}
          />
        </div>

        <ul className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-y-8 md:mt-14 lg:grid-cols-6">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
              </span>
              <span className="mt-2 whitespace-pre-line text-xs leading-tight text-neutral-700 sm:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
