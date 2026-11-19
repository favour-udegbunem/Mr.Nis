
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

function AboutPage() {
  const { identity } = portfolioData;

  const interests = [
    "Media & Communication",
    "Personal Branding",
    "Content Creation",
    "Creative Direction",
    "Thought Leadership",
    "Brand Visibility",
  ];

  const projects = [
    ["Campiq Studio", "/campiq"],
    ["Seven Days Challenge", "/challenge"],
    ["The Brand In You", "/books"],
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Page Hero */}
      <section className="px-6 pb-24 pt-28 lg:px-12 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            About / The Person Behind The Brand
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-5xl font-editorial text-6xl leading-[1.1] sm:text-8xl lg:text-[110px]"
          >
            More than
            <br />
            a name.
            <br />
            <span className="italic text-neutral-500">
              A perspective.
            </span>
          </motion.h1>

          <div className="mt-16 grid gap-12 border-t border-white/15 pt-10 md:grid-cols-2">

            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Introducing
              </p>

              <span className="mt-3 block font-editorial text-3xl text-white">
                Mr. Nis/The Brand Talker
              </span>
            </div>

            <p className="max-w-xl text-base leading-8 text-neutral-400">
              Ifeanyichukwu Sunday Nwagbo, popularly known as Mr. Nis,
              is a creative personality driven by ideas, storytelling,
              communication and the power of personal identity.
              His work explores the intersection of creativity,
              influence and meaningful human connection.
            </p>

          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              His Story
            </p>

            <h2 className="mt-6 font-editorial text-5xl leading-tight sm:text-6xl">
              The work.
              <br />
              The thinking.
              <br />
              The journey.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7 text-sm leading-8 text-neutral-400"
          >
            <p className="text-lg leading-9 text-white">
              Ifeanyichukwu Sunday Nwagbo, also known as Mr. Nis,
              is a creative mind with an interest in how ideas,
              people and brands connect with the world.
            </p>

            <p>
              He believes that identity goes beyond a name, a title
              or the image people see. It is about what an individual
              represents, the values they communicate and the
              impression they leave behind.
            </p>

            <p>
              His professional interests span media, communication,
              content creation, creative direction and personal
              branding. He is particularly interested in helping
              individuals and brands discover how to communicate
              their identity with clarity, creativity and intention.
            </p>

            <p>
              Through Campiq Studio, the Seven Days Show Up Challenge,
              The Brand In You and other creative initiatives,
              Mr. Nis continues to explore ideas that encourage
              visibility, self-expression and purposeful growth.
            </p>

            <p>
              For him, creativity is not simply about producing
              something attractive. It is about communicating an idea,
              creating an experience and giving people something
              meaningful to remember.
            </p>

            <p>
              His journey is an ongoing expression of curiosity,
              creativity and the desire to make ideas count.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="overflow-hidden border-y border-white/10 bg-neutral-950 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            A Personal Philosophy
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-5xl"
          >
            <h2 className="font-editorial text-4xl leading-tight sm:text-6xl lg:text-7xl">
              Your identity is your story.
              <span className="italic text-neutral-500">
                {" "}Make it worth telling.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-sm leading-8 text-neutral-400">
              Being known is one thing. Having something meaningful
              to be known for is another. Mr. Nis believes that
              influence should be built on purpose, authenticity
              and the value we bring to others.
            </p>
          </motion.div>

          <div className="mt-16 flex justify-end">
            <p className="font-editorial text-2xl italic text-neutral-500">
              — Mr. Nis
            </p>
          </div>

        </div>
      </section>

      {/* Professional Interests */}
      <section className="bg-black px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            What Shapes The Work
          </p>

          <h2 className="mt-6 max-w-2xl font-editorial text-4xl sm:text-5xl">
            Areas of interest and creative expression.
          </h2>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 35px rgba(217, 164, 104, 0.22)",
                  zIndex: 10,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative cursor-pointer bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900 sm:p-10"
              >
                <span className="text-xs text-neutral-600">
                  0{index + 1}
                </span>

                <h3 className="mt-10 font-editorial text-2xl">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Connection */}
      <section className="border-t border-white/10 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Beyond The Introduction
          </p>

          <h2 className="mt-7 max-w-3xl font-editorial text-5xl leading-tight sm:text-7xl">
            Explore the work behind the name.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-400">
            Every idea has a story. Discover the creative projects,
            initiatives and publications that reflect the work of Mr. Nis.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            {projects.map(([name, path]) => (
              <a
                key={path}
                href={path}
                className="group inline-flex items-center gap-4 border border-white/20 px-6 py-4 text-sm transition-all duration-300 hover:border-white/50 hover:bg-white/[0.05]"
              >
                {name}

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default AboutPage;