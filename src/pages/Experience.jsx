
import { motion } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp, FiTarget, FiMonitor, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import mrNisImage from "../assets/img/mrniss.png";

function Experience() {
  const services = [
    {
      icon: FiTarget,
      title: "Brand Strategy",
      description: "Helping individuals and businesses define their identity, communicate their value and build a brand people can recognise and trust.",
    },
    {
      icon: FiMonitor,
      title: "Digital Visibility",
      description: "Helping businesses establish a stronger online presence, reach the right audience and become more discoverable in the digital space.",
    },
    {
      icon: FiTrendingUp,
      title: "Business Growth",
      description: "Connecting creative communication, strategic thinking and digital opportunities to help businesses turn attention into meaningful business results.",
    },
    {
      icon: FiUsers,
      title: "Media & Content",
      description: "Developing creative content experiences that help individuals and businesses communicate their message and connect with their audience.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-24 pt-32 lg:px-12 lg:pb-36 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            What I Do / Professional Expertise
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-6xl font-editorial text-6xl leading-[1.08] sm:text-8xl lg:text-[110px]"
          >
            Turning ideas
            <br />
            into <span className="italic text-neutral-500">impact.</span>
          </motion.h1>

          <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-2">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              My Approach
              <span className="mt-4 block font-editorial text-3xl normal-case tracking-normal text-white">
                Strategy meets creativity.
              </span>
            </p>

            <p className="max-w-xl text-sm leading-8 text-neutral-400">
              I work at the intersection of media, business, creativity
              and digital visibility. My focus is helping people and
              businesses communicate better, build stronger identities
              and create opportunities through the power of the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="border-y border-white/10 bg-neutral-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden bg-neutral-900"
          >
            <img
              src={mrNisImage}
              alt="Ifeanyichukwu Sunday Nwagbo, Mr. Nis"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-4 border border-white/20 pointer-events-none" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8 pt-24">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                Founder & Creative Entrepreneur
              </p>
              <h2 className="mt-3 font-editorial text-4xl">The Brand Talker</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              The Work Behind The Name
            </p>

            <h2 className="mt-7 font-editorial text-4xl leading-tight sm:text-6xl">
              Building brands.
              <br />
              Creating visibility.
              <br />
              <span className="italic text-neutral-500">Driving growth.</span>
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-8 text-neutral-400">
              <p>
                Ifeanyichukwu Sunday Nwagbo, professionally known as
                Mr. Nis, is the CEO and Founder of Campiq Media.
                His work is centred on helping businesses become
                more visible, communicate their value and grow
                through strategic digital presence.
              </p>

              <p>
                Over time, he has worked with hundreds of businesses,
                helping them establish online visibility and leverage
                digital opportunities to achieve significant business
                results, including millions of naira in value.
              </p>

              <p>
                His approach combines creativity, strategic thinking,
                media, communication and an understanding of how
                people discover and connect with brands.
              </p>

              <p>
                Beyond client work, he develops initiatives that
                empower creators, entrepreneurs and individuals
                to take their visibility seriously.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-sm transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              Work With Mr. Nis
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Areas Of Expertise
          </p>

          <h2 className="mt-7 max-w-3xl font-editorial text-5xl sm:text-7xl">
            What I bring to the table.
          </h2>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 35px rgba(217,164,104,0.18)",
                    zIndex: 10,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative border border-white/10 bg-white/[0.02] p-8 sm:p-12"
                >
                  <Icon size={27} className="text-neutral-400" />

                  <h3 className="mt-12 font-editorial text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-neutral-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/10 px-6 py-28 text-center lg:py-36">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Let's Create Something
          </p>

          <h2 className="mt-7 font-editorial text-5xl sm:text-7xl">
            Have a business to grow?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-neutral-400">
            Let's explore how strategy, creativity and digital visibility
            can help move your business forward.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
          >
            Start A Conversation
            <FiArrowUpRight />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Experience;