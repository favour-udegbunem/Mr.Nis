
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function AboutMrNis() {
  return (
    <section className="bg-black px-6 py-28 text-white lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            About / The Story Behind The Name
          </p>

          <h2 className="mt-8 max-w-5xl font-editorial text-5xl leading-tight sm:text-7xl lg:text-8xl">
            Beyond the name.
            <br />
            <span className="italic text-neutral-500">
              Beyond the work.
            </span>
          </h2>
        </motion.div>

        {/* Biography */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7 text-base leading-9 text-neutral-400"
          >
            <p className="text-xl leading-9 text-white sm:text-2xl">
              <span className="text-white">
                Ifeanyichukwu Sunday Nwagbo
              </span>
              , also known as <span className="italic text-white">Mr. Nis</span>,
              is a creative mind, a storyteller, and a personality driven
              by the power of ideas, identity and meaningful influence.
            </p>

            <p>
              He believes that every individual has a story worth telling
              and a unique identity worth discovering, developing and
              communicating to the world.
            </p>

            <p>
              Through creativity, communication, personal branding and
              strategic thinking, he explores ways to turn ideas into
              experiences that connect with people and leave lasting
              impressions.
            </p>

            <p>
              His interests extend beyond personal expression. From
              creative projects and community initiatives to conversations
              around identity, visibility and growth, his work reflects
              an ongoing interest in helping people recognise the value
              of what they carry within themselves.
            </p>

            <p>
              For Mr. Nis, influence is not simply about being seen.
              It is about having something meaningful to contribute,
              communicating it with intention and creating an impact
              that goes beyond recognition.
            </p>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 40px rgba(217, 164, 104, 0.16)",
              zIndex: 10,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[420px] flex-col justify-between border border-white/15 bg-white/[0.02] p-8 sm:p-12"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                A Personal Philosophy
              </span>

              <div className="mt-16 font-editorial text-4xl leading-tight sm:text-5xl">
                "Your identity is your story.
                <span className="italic text-neutral-500">
                  Make it worth telling."
                </span>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-sm font-semibold">Mr. Nis</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Experience. Perspective. Influence.
                </p>
              </div>

              <FiArrowUpRight
                size={24}
                className="text-neutral-500"
              />
            </div>
          </motion.div>

        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/10 pt-10"
        >
          <p className="max-w-4xl font-editorial text-3xl leading-relaxed text-neutral-300 sm:text-5xl">
            Not just about making a name,
            <span className="italic text-neutral-500">
              {" "}but giving that name something meaningful to represent.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutMrNis;