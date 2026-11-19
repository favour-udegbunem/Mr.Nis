
import {
  Radio,
  UserRound,
  Lightbulb,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const expertise = [
  {
    number: "01",
    title: "Media & Communication",
    description:
      "Exploring the role of effective communication in shaping messages, connecting audiences and creating meaningful engagement.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Personal Branding",
    description:
      "Understanding how individuals can communicate their identity, establish recognition and build a distinctive professional presence.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "Thought Leadership",
    description:
      "Turning knowledge, experience and ideas into perspectives that contribute to meaningful conversations.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Creative Leadership",
    description:
      "Connecting creativity, communication and strategic thinking to approach opportunities and challenges.",
    icon: BriefcaseBusiness,
  },
];

function Expertise() {
  return (
    <section className="bg-cream px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze">
              02 / Areas of Focus
            </span>

            <h2 className="mt-6 max-w-xl font-editorial text-5xl leading-tight text-ink sm:text-6xl">
              Where ideas meet <span className="italic text-bronze">impact.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted">
            A look at the disciplines, conversations and professional
            interests that shape this portfolio.
          </p>
        </div>

        <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
          {expertise.map((item, index) => {
            const Icon = item.icon;



                    return (
                    <motion.div
                        key={item.number}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                        scale: 1.04,
                        boxShadow: "0 8px 35px rgba(217, 164, 104, 0.32)",
                        zIndex: 10,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative cursor-pointer border-b border-r border-black/10 p-8 transition-colors duration-300 sm:p-12"
                    >


                <div className="flex items-center justify-between">
                  <span className="text-xs text-bronze">
                    {item.number}
                  </span>

                  <Icon
                    size={24}
                    strokeWidth={1.3}
                    className="text-muted transition-colors group-hover:text-bronze"
                  />
                </div>

                <h3 className="mt-12 font-editorial text-3xl text-ink">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-end">
                  <ArrowUpRight
                    size={19}
                    className="text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            to="/expertise"
            className="inline-flex items-center gap-3 border-b border-ink/30 pb-3 text-xs font-semibold text-ink transition-colors hover:border-bronze hover:text-bronze"
          >
            Explore Areas of Expertise
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Expertise;