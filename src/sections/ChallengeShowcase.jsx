

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Users } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function ChallengeShowcase() {
  const { challenge } = portfolioData;

  return (
    <section className="bg-white px-6 py-28 text-black lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              A Creator Experience / 02
            </p>

            <h2 className="mt-7 max-w-xl font-editorial text-5xl leading-[1.1] sm:text-7xl">
              Seven Days.
              <br />
              One decision.
              <br />
              <span className="italic">Show up.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-neutral-600">
              {challenge.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <CalendarDays size={20} strokeWidth={1.4} />
                <div>
                  <p className="text-xs text-neutral-500">Duration</p>
                  <p className="mt-1 text-sm font-semibold">
                    {challenge.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users size={20} strokeWidth={1.4} />
                <div>
                  <p className="text-xs text-neutral-500">Designed for</p>
                  <p className="mt-1 text-sm font-semibold">
                    {challenge.audience}
                  </p>
                </div>
              </div>
            </div>

            {challenge.registrationLink && (
              <a
                href={challenge.registrationLink}
                className="mt-10 inline-flex items-center gap-4 bg-black px-7 py-4 text-sm text-white transition-colors hover:bg-neutral-700"
              >
                Join the Challenge
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[480px] flex-col justify-between overflow-hidden bg-black p-8 text-white sm:p-12"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              The Show Up Movement
            </span>

            <div>
              <p className="font-editorial text-7xl leading-none sm:text-8xl">
                07
              </p>

              <p className="mt-5 font-editorial text-3xl sm:text-4xl">
                DAYS TO
                <br />
                SHOW UP.
              </p>

              <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-400">
                Create. Share. Connect. Become more visible.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/20 pt-5">
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                By Mr. Nis
              </span>

              <span className="text-xs text-neutral-500">
                01 — 07
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-black/15 pt-10">
          <h3 className="font-editorial text-3xl">
            The seven-day journey
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
            The official daily activities will be published here once
            the programme schedule is available.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {challenge.dailyActivities.map((activity) => (
              <div
                key={activity.day}
                className="border border-black/15 p-5"
              >
                <p className="text-xs text-neutral-500">
                  {activity.day}
                </p>

                <h4 className="mt-4 font-editorial text-xl">
                  {activity.title}
                </h4>

                <p className="mt-3 text-xs leading-6 text-neutral-500">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ChallengeShowcase;