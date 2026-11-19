
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Clapperboard, Video } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const icons = [Video, Camera, Clapperboard];

function CampiqShowcase() {
  const { company } = portfolioData;

  return (
    <section className="bg-black px-6 py-28 text-white lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              The Company / 01
            </p>

            <h2 className="mt-6 font-editorial text-5xl sm:text-7xl">
              {company.name}
              <span className="text-neutral-500">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-neutral-400">
            {company.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {company.services.map((service, index) => {
            const Icon = icons[index % icons.length];


                return (
                <motion.div
                    key={service}
                    whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 35px rgba(217, 164, 104, 0.32)",
                    zIndex: 10,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative border border-white/15 cursor-pointer bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/30"
                >
                    <Icon size={27} strokeWidth={1.3} />

                    <h3 className="mt-12 font-editorial text-2xl">
                    {service}
                    </h3>

                    <p className="mt-4 text-xs leading-6 text-white/60">
                    Creative execution and visual communication.
                    </p>
                </motion.div>
                );

          })}
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-8">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            A creative company associated with Mr. Nis
          </p>

          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm hover:text-neutral-400"
            >
              Explore Campiq Studio
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>

      </div>
    </section>
  );
}

export default CampiqShowcase;