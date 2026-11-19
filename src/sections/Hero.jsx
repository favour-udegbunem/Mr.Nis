
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MrNis from "../assets/img/mrnis.png"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-bronze" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Media · Communication · Influence
            </span>
          </div>

          <h1 className="max-w-3xl font-editorial text-6xl leading-[1.08] tracking-tight text-ink sm:text-7xl lg:text-[88px]">
            Ifeanyichukwu Sunday
            <br />
            <span className="italic text-bronze">Nwagbo.</span>
          </h1>

          <p className="mt-9 max-w-lg text-base leading-8 text-muted sm:text-lg">
            Ideas create impact when they are communicated with clarity.
            Explore the work, experience and perspective of Ifeanyichukwu
            Nwagbo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/about"
              className="group inline-flex items-center gap-4 bg-black px-7 py-4 text-xs font-semibold transition-colors group-hover:-translate-y-1"
            >
              Discover My Story
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/work"
              className="border-b border-ink/30 pb-2 text-xs font-semibold text-ink transition-colors hover:border-bronze hover:text-bronze"
            >
              Explore Selected Work
            </Link>
          </div>

          <div className="mt-20 hidden items-center gap-4 sm:flex">
            <ArrowDown size={16} className="text-bronze" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted">
              Scroll to explore
            </span>
          </div>
        </motion.div>

        {/* Portrait placeholder */}
        
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="relative mx-auto w-full max-w-[480px]"
>
  <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e3d9]">

    {/* Portrait Image */}
    <img
      src={MrNis}
      alt="Portrait of Mr. Nis"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* Inner Border */}
    <div className="absolute inset-5 z-10 border border-white/30 pointer-events-none" />

    {/* Name Overlay */}
    <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent px-8 pb-10 pt-24">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-white/80">
        The person behind
      </span>

      <span className="mt-2 block font-editorial text-3xl text-white">
        Mr. Nis
      </span>
    </div>

  </div>

  {/* Floating Label */}
  <div className="absolute -bottom-6 -right-4 z-20 bg-black px-6 py-5 text-white border border-white/30 sm:-right-8">
    <span className="block text-white font-editorial text-2xl italic">
      Experience.
    </span>

    <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/50">
      Perspective. Influence.
    </span>
  </div>

  {/* Vertical Name */}
  <span className="absolute -left-8 top-12 hidden text-[9px] uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl] sm:block">
    IFEANYICHUKWU NWAGBO
  </span>
</motion.div>

      </div>
    </section>
  );
}

export default Hero;
