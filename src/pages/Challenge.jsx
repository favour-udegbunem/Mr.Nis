
import { motion } from "framer-motion";
import { FiArrowUpRight, FiVideo, FiTarget, FiTrendingUp, FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

function Challenge() {
  const benefits = [
    {
      icon: FiVideo,
      title: "Create With Intention",
      description: "Learn to approach content creation with purpose, clarity and a better understanding of what your audience needs to see.",
    },
    {
      icon: FiTarget,
      title: "Build Visibility",
      description: "Put yourself, your business and your ideas in front of the people who need to discover what you offer.",
    },
    {
      icon: FiTrendingUp,
      title: "Turn Attention Into Opportunity",
      description: "Understand how consistent visibility can help build trust, attract potential customers and create business opportunities.",
    },
    {
      icon: FiCalendar,
      title: "Develop Consistency",
      description: "Build a habit of showing up and communicating your value instead of waiting until everything feels perfect.",
    },
  ];

  const days = [
    ["01", "The Decision To Show Up", "Start by understanding why visibility matters."],
    ["02", "Finding Your Message", "Understand what you want people to know about you or your business."],
    ["03", "Creating Your Content", "Turn your ideas into content that communicates your value."],
    ["04", "Building Your Presence", "Develop a more intentional and recognisable online presence."],
    ["05", "Connecting With Your Audience", "Create opportunities for meaningful audience engagement."],
    ["06", "Making Visibility Work", "Explore how content and attention can support your business goals."],
    ["07", "Beyond The Challenge", "Take what you've learned and build a consistent visibility habit."],
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36 lg:px-12 lg:pb-40 lg:pt-48">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Campiq Media / The Seven Days Challenge
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-6xl font-editorial text-6xl leading-[1.05] sm:text-8xl lg:text-[110px]"
          >
            Seven Days.
            <br />
            One decision.
            <br />
            <span className="italic text-neutral-500">
              Show up.
            </span>
          </motion.h1>

          <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-8 text-neutral-400">
              A visibility challenge for small business owners and
              content creators who are ready to stop hiding their
              value and start showing up where their audience can find them.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-4 self-start bg-white px-7 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
            >
              Get Involved
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Visual */}
      <section className="px-6 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <div className="aspect-[16/8] min-h-[300px] bg-neutral-900">
            <img
              src="/images/seven-days-challenge.jpg"
              alt="Seven Days Show Up Challenge"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/70 sm:text-xs">
              Your Visibility Starts With You
            </p>

            <h2 className="mt-6 font-editorial text-5xl sm:text-7xl lg:text-8xl">
              SHOW UP.
            </h2>

            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/70">
              Seven Days Show Up Challenge
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Why This Challenge Exists
            </p>

            <h2 className="mt-7 font-editorial text-5xl leading-tight sm:text-7xl">
              You cannot grow in silence.
            </h2>
          </div>

          <div className="space-y-7 text-sm leading-8 text-neutral-400">
            <p>
              You may have a great product, an excellent service,
              a valuable skill or a message worth sharing. But how
              will people discover it if they never get to see it?
            </p>

            <p>
              Many small business owners and creators have something
              valuable to offer, yet struggle with consistency,
              visibility and communicating their value online.
            </p>

            <p>
              The Seven Days Show Up Challenge is designed to
              encourage participants to take action, become more
              intentional about their presence and understand the
              opportunities that come with showing up consistently.
            </p>

            <p className="text-white">
              Because visibility creates opportunities, and
              opportunities can become growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-950 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            What You Stand To Gain
          </p>

          <h2 className="mt-7 max-w-3xl font-editorial text-5xl sm:text-7xl">
            More than seven days of posting.
          </h2>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 35px rgba(217,164,104,0.18)",
                    zIndex: 10,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative border border-white/10 p-8 sm:p-10"
                >
                  <Icon size={26} className="text-neutral-400" />

                  <h3 className="mt-10 font-editorial text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-neutral-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seven Days */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            The Seven-Day Journey
          </p>

          <h2 className="mt-7 max-w-3xl font-editorial text-5xl sm:text-7xl">
            Seven days. Seven opportunities to grow.
          </h2>

          <div className="mt-16">
            {days.map(([number, title, description], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group grid gap-5 border-t border-white/10 py-8 transition-colors hover:border-amber-200/40 sm:grid-cols-[80px_1fr_1fr] sm:items-center"
              >
                <span className="font-editorial text-3xl text-neutral-600 transition-colors group-hover:text-amber-200">
                  {number}
                </span>

                <h3 className="font-editorial text-2xl sm:text-3xl">
                  {title}
                </h3>

                <p className="text-sm leading-7 text-neutral-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-xs leading-6 text-neutral-500">
            These seven themes present the proposed journey for the
            challenge. The actual daily activities and programme
            schedule can be updated to match the final challenge format.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-neutral-950 px-6 py-28 text-center lg:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Your Time Is Now
        </p>

        <h2 className="mx-auto mt-7 max-w-4xl font-editorial text-5xl sm:text-7xl">
          Your audience cannot find what you keep hidden.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-neutral-400">
          Take the first step towards becoming more visible,
          communicating your value and creating new opportunities.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold text-black hover:bg-neutral-300"
        >
          Join The Challenge
          <FiArrowUpRight />
        </Link>
      </section>

    </div>
  );
}

export default Challenge;