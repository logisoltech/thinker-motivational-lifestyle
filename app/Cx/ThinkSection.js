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
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              One Mind Halo
            </h2>
            <p className="mt-3 text-sm font-medium text-neutral-700 sm:text-base">
              Thinker • Learner • Protector
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-neutral-600 md:mx-0 sm:text-base">
              An advanced wearable concept that enhances cognitive performance,
              supports brain activity, and provides invisible protection for a
              healthier, smarter you.
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <Image
              src="/ring.png"
              alt="One Mind Halo ring"
              width={900}
              height={520}
              className="h-auto w-full max-w-md md:max-w-lg lg:max-w-xl"
              priority={false}
            />
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-y-8 md:mt-14 lg:grid-cols-6">
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
