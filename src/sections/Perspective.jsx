
import { motion } from "framer-motion";

function Perspective() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 text-cream lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute -right-20 -top-32 font-editorial text-[400px] leading-none text-white/[0.025]">
        N.
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze">
          03 / Perspective
        </span>

        <p className="mt-12 font-editorial text-4xl leading-[1.4] sm:text-5xl lg:text-6xl">
          The value of an idea is not only in what it says, but in how
          clearly it is{" "}
          <span className="italic text-bronze">communicated.</span>
        </p>

        <div className="mt-14 flex items-center gap-5">
          <span className="h-px w-12 bg-bronze" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            A perspective on communication
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Perspective;