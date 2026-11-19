
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import brand from "../assets/img/brand.png";

function Books() {
  const book = portfolioData.book || {};

  const title = book.title || "The Brand In You";
  const author = book.author || "Ifeanyichukwu Sunday Nwagbo";
  const purchaseLink = book.purchaseLink;

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-20 pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Publications / The Written Perspective
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-6xl font-editorial text-6xl leading-[1.05] sm:text-8xl lg:text-[110px]"
          >
            Words that
            <br />
            shape <span className="italic text-neutral-500">identity.</span>
          </motion.h1>

          <p className="mt-12 max-w-xl text-sm leading-8 text-neutral-400">
            Ideas, perspectives and conversations captured in print.
            Discover the work of Mr. Nis through his publications.
          </p>
        </div>
      </section>

      {/* Featured Book */}
      <section className="border-y border-white/10 bg-neutral-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[390px]">
              <div className="aspect-[3/4] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <img
                  src={brand}
                  alt="The Brand In You by Ifeanyichukwu Sunday Nwagbo"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <p className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                A Publication By Mr. Nis
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Featured Publication / 01
            </p>

            <FiBookOpen size={27} className="mt-10 text-neutral-400" />

            <h2 className="mt-8 font-editorial text-5xl leading-tight sm:text-7xl">
              {title}
            </h2>

            <p className="mt-5 text-sm text-neutral-400">
              Written by {author}
            </p>

            <div className="my-10 h-px w-20 bg-white/40" />

            <p className="text-sm leading-8 text-neutral-400">
              Your identity is more than what people see. It is
              what you represent, the value you communicate and
              the impression you leave behind.
            </p>

            <p className="mt-6 text-sm leading-8 text-neutral-400">
              The Brand In You explores the importance of recognising
              your unique identity and understanding how to communicate
              it with intention. It is a publication centred on the
              relationship between identity, perception and personal branding.
            </p>

            {purchaseLink && (
              <a
                href={purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
              >
                Get The Book
                <FiArrowUpRight />
              </a>
            )}
          </motion.div>

        </div>
      </section>

      {/* Book Message */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            The Idea Behind The Title
          </p>

          <div className="mt-12 grid gap-16 md:grid-cols-2">
            <h2 className="font-editorial text-5xl leading-tight sm:text-7xl">
              There is a brand within you.
            </h2>

            <div className="space-y-7 text-sm leading-8 text-neutral-400">
              <p>
                Every individual carries a combination of experiences,
                ideas, values, abilities and perspectives that make
                them distinct.
              </p>

              <p>
                Personal branding begins with recognising those qualities
                and understanding how to communicate them to the world.
              </p>

              <p>
                The Brand In You brings that conversation into focus,
                encouraging readers to think more intentionally about
                their identity and the impression they create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="border-y border-white/10 bg-neutral-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              About The Author
            </p>

            <h2 className="mt-7 font-editorial text-5xl sm:text-6xl">
              The mind behind the message.
            </h2>
          </div>

          <div>
            <FiBookmark size={25} className="text-neutral-400" />

            <p className="mt-8 text-sm leading-8 text-neutral-400">
              Ifeanyichukwu Sunday Nwagbo, popularly known as Mr. Nis,
              is a creative entrepreneur whose interests span media,
              communication, personal branding and business visibility.
              Through his writing, he shares ideas that encourage people
              to think about their identity, their message and the value
              they bring to the world.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm text-white transition-colors hover:text-neutral-400"
            >
              Discover The Author
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center lg:py-36">
        <h2 className="mx-auto max-w-3xl font-editorial text-5xl sm:text-7xl">
          Your story deserves to be understood.
        </h2>

        <p className="mt-7 text-sm text-neutral-400">
          Discover The Brand In You.
        </p>

        {purchaseLink && (
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold text-black hover:bg-neutral-300"
          >
            Purchase The Book
            <FiArrowUpRight />
          </a>
        )}
      </section>

    </div>
  );
}

export default Books;