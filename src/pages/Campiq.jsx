
import { motion } from "framer-motion";
import { FiArrowUpRight, FiVideo, FiCamera, FiUsers, FiTarget, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import campiq from "../assets/img/campiq.png";

function Campiq() {
  const benefits = [
    {
      icon: FiVideo,
      title: "A Place To Create",
      description: "Access a dedicated content creation environment designed for influencers, creators, entrepreneurs and businesses.",
    },
    {
      icon: FiCamera,
      title: "Creative Direction",
      description: "Get guidance on how to shoot, frame, present and produce content that communicates your message effectively.",
    },
    {
      icon: FiTarget,
      title: "Content Strategy",
      description: "Go beyond recording videos. Get strategic direction on content ideas, messaging, positioning and audience engagement.",
    },
    {
      icon: FiUsers,
      title: "A Creative Community",
      description: "Become part of an environment where creators, influencers and business owners can consistently develop their content.",
    },
  ];

  const steps = [
    ["01", "Choose Your Membership", "Subscribe to a quarterly Campiq Studio membership."],
    ["02", "Plan Your Content", "Get direction on what to create and how to approach your content."],
    ["03", "Show Up & Create", "Visit the studio whenever you need to create during your active subscription."],
    ["04", "Grow Your Visibility", "Build a consistent content presence with strategic creative support."],
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36 lg:px-12 lg:pb-40 lg:pt-48">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-500/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Campiq Media / Campiq Studio
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-6xl font-editorial text-6xl leading-[1.05] sm:text-8xl lg:text-[110px]"
          >
            Your ideas.
            <br />
            Your content.
            <br />
            <span className="italic text-neutral-500">Your studio.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-neutral-400">
              A dedicated content house for creators, influencers and
              businesses who understand that visibility is no longer
              optional. Come in, create, get strategic direction and
              keep showing up.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-4 self-start border border-white/20 px-7 py-4 text-sm transition-all hover:border-white/50 hover:bg-white/5"
            >
              Explore Membership
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden"
        >
          <div className="aspect-[16/8] min-h-[280px] bg-neutral-900">
            <img
              src={campiq}
              alt="Campiq Studio content creation environment"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 max-w-lg sm:bottom-14 sm:left-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              Welcome To The Content House
            </p>
            <h2 className="mt-5 font-editorial text-4xl sm:text-6xl">
              Create without limits.
            </h2>
          </div>
        </motion.div>
      </section>

      {/* What is Campiq */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              More Than A Studio
            </p>

            <h2 className="mt-7 font-editorial text-5xl leading-tight sm:text-7xl">
              A home for people with something to say.
            </h2>
          </div>

          <div className="space-y-7 text-sm leading-8 text-neutral-400">
            <p>
              Campiq Studio is a content house created for influencers,
              content creators, entrepreneurs and businesses that want
              to take their digital presence seriously.
            </p>

            <p>
              Think of it as a gym membership, but instead of paying
              for access to workout equipment, you subscribe to a
              creative environment where you can consistently produce
              content.
            </p>

            <p>
              Rather than paying for a studio every time you need to
              shoot, members subscribe quarterly and can return to
              create whenever they need to throughout their active
              membership.
            </p>

            <p>
              And you don't have to figure everything out alone.
              Campiq provides creative direction and content strategy
              support to help you make better use of every session.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-950 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            The Campiq Experience
          </p>

          <h2 className="mt-7 max-w-3xl font-editorial text-5xl sm:text-7xl">
            Everything around your content.
          </h2>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 35px rgba(217,164,104,0.18)",
                    zIndex: 10,
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative border border-white/10 p-8 sm:p-10"
                >
                  <Icon size={26} className="text-neutral-400" />

                  <h3 className="mt-10 font-editorial text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-neutral-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Model */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                The Membership Model
              </p>

              <h2 className="mt-7 font-editorial text-5xl leading-tight sm:text-7xl">
                Subscribe.
                <br />
                Create.
                <br />
                <span className="italic text-neutral-500">Repeat.</span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-8 text-neutral-400">
                Campiq Studio operates on a quarterly membership model.
                One subscription gives you an active membership period
                within which you can return to the studio whenever you
                need to create content.
              </p>
            </div>

            <div className="border border-white/15 bg-white/[0.02] p-8 sm:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Campiq Studio Membership
              </p>

              <h3 className="mt-8 font-editorial text-5xl">
                Quarterly.
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-400">
                One subscription. A quarter of creative opportunities.
              </p>

              <div className="my-10 h-px bg-white/10" />

              {[
                "Quarterly membership access",
                "Studio access during your active membership",
                "Creative direction and shooting guidance",
                "Content ideas and strategic support",
                "An environment built for consistent creation",
              ].map((item) => (
                <div key={item} className="mb-5 flex items-start gap-3 text-sm text-neutral-300">
                  <FiCheckCircle className="mt-1 shrink-0 text-neutral-400" />
                  {item}
                </div>
              ))}

              <Link
                to="/contact"
                className="mt-8 flex items-center justify-between bg-transparent border border-white/20 px-6 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-600"
              >
                Enquire About Membership
                <FiArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/10 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Getting Started
          </p>

          <h2 className="mt-7 font-editorial text-5xl sm:text-7xl">
            How it works.
          </h2>

          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <div key={number} className="bg-black p-8">
                <span className="text-xs text-neutral-600">{number}</span>
                <h3 className="mt-12 font-editorial text-2xl">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-6 py-28 text-center lg:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Your Next Content Session Starts Here
        </p>

        <h2 className="mx-auto mt-7 max-w-4xl font-editorial text-5xl sm:text-7xl">
          Stop waiting for the perfect time to show up.
        </h2>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-4 bg-transparent border border-white/20 px-8 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-600"
        >
          Talk To Campiq
          <FiArrowUpRight />
        </Link>
      </section>

    </div>
  );
}

export default Campiq;