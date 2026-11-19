
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import brand from "../assets/img/brand.png"

function BookShowcase() {
  const { book } = portfolioData;

  return (
    <section className="bg-black px-6 py-28 text-white lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Publications / 03
          </p>

          <h2 className="mt-6 font-editorial text-5xl sm:text-6xl">
            Ideas worth <span className="italic text-neutral-400">reading.</span>
          </h2>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Book cover */}
          
{/* Book Image */}
<motion.div
  initial={{ opacity: 0, x: -25 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <div className="relative w-full max-w-[350px]">

    <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
      <img
        src={brand}
        alt="The Brand In You book by Ifeanyichukwu Nwagbo"
        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
      />
    </div>

    <p className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-500">
      A Publication by Mr. Nis
    </p>

  </div>
</motion.div>


          {/* Book details */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Featured Publication
            </span>

            <h3 className="mt-6 font-editorial text-5xl sm:text-6xl">
              {book.title}
            </h3>

            <p className="mt-4 text-sm text-neutral-400">
              Written by {book.author}
            </p>

            <p className="mt-8 text-base leading-8 text-neutral-300">
              {book.description}
            </p>

            <div className="mt-10 border-t border-white/15 pt-7">
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                About this publication
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-400">
                The book's full description, chapters, key lessons and
                reader resources will be added as the publication
                information becomes available.
              </p>
            </div>

            {book.purchaseLink && (
              <a
                href={book.purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
              >
                Get the Book
                <ArrowUpRight size={17} />
              </a>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default BookShowcase;