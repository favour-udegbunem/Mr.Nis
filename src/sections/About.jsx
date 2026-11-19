
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">

        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze">
            01 / About
          </span>

          <h2 className="mt-6 max-w-xs font-editorial text-4xl leading-tight text-ink sm:text-5xl">
            Beyond the ordinary introduction.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-editorial text-3xl leading-[1.5] text-ink sm:text-4xl">
            Communication is more than being heard. It is about creating
            meaning, building recognition and making ideas matter.
          </p>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Ifeanyichukwu Nwagbo, known professionally as Mr. Nis, is
            associated with the worlds of media, communication, personal
            branding and creative expression. His professional journey
            provides the foundation for a continuing interest in how
            people, ideas and brands communicate their value.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 border-b border-ink/30 pb-3 text-xs font-semibold text-ink transition-colors hover:border-bronze hover:text-bronze"
          >
            Learn More About Mr. Nis
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default About;