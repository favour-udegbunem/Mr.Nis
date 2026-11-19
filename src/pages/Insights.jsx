// import { motion } from "framer-motion";
// import { FiArrowUpRight, FiBookOpen, FiBookmark } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { portfolioData } from "../data/portfolioData";

// function Books() {
//   const book = portfolioData.book || {};

//   const title = book.title || "The Brand In You";
//   const author = book.author || "Ifeanyichukwu Sunday Nwagbo";
//   const purchaseLink = book.purchaseLink;

//   return (
//     <div className="min-h-screen bg-black text-white">

//       {/* Hero */}
//       <section className="px-6 pb-20 pt-36 lg:px-12 lg:pb-28 lg:pt-44">
//         <div className="mx-auto max-w-7xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
//             Publications / The Written Perspective
//           </p>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mt-10 max-w-6xl font-editorial text-6xl leading-[1.05] sm:text-8xl lg:text-[110px]"
//           >
//             Words that
//             <br />
//             shape <span className="italic text-neutral-500">identity.</span>
//           </motion.h1>

//           <p className="mt-12 max-w-xl text-sm leading-8 text-neutral-400">
//             Ideas, perspectives and conversations captured in print.
//             Discover the work of Mr. Nis through his publications.
//           </p>
//         </div>
//       </section>

//       {/* Featured Book */}
//       <section className="border-y border-white/10 bg-neutral-950 px-6 py-24 lg:px-12 lg:py-32">
//         <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

//           <motion.div
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="flex justify-center"
//           >
//             <div className="relative w-full max-w-[390px]">
//               <div className="aspect-[3/4] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
//                 <img
//                   src="/images/the-brand-in-you.jpg"
//                   alt="The Brand In You by Ifeanyichukwu Sunday Nwagbo"
//                   className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                 />
//               </div>

//               <p className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-500">
//                 A Publication By Mr. Nis
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="max-w-xl"
//           >
//             <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
//               Featured Publication / 01
//             </p>

//             <FiBookOpen size={27} className="mt-10 text-neutral-400" />

//             <h2 className="mt-8 font-editorial text-5xl leading-tight sm:text-7xl">
//               {title}
//             </h2>

//             <p className="mt-5 text-sm text-neutral-400">
//               Written by {author}
//             </p>

//             <div className="my-10 h-px w-20 bg-white/40" />

//             <p className="text-sm leading-8 text-neutral-400">
//               Your identity is more than what people see. It is
//               what you represent, the value you communicate and
//               the impression you leave behind.
//             </p>

//             <p className="mt-6 text-sm leading-8 text-neutral-400">
//               The Brand In You explores the importance of recognising
//               your unique identity and understanding how to communicate
//               it with intention. It is a publication centred on the
//               relationship between identity, perception and personal branding.
//             </p>

//             {purchaseLink && (
//               <a
//                 href={purchaseLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
//               >
//                 Get The Book
//                 <FiArrowUpRight />
//               </a>
//             )}
//           </motion.div>

//         </div>
//       </section>

//       {/* Book Message */}
//       <section className="px-6 py-28 lg:px-12 lg:py-36">
//         <div className="mx-auto max-w-7xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
//             The Idea Behind The Title
//           </p>

//           <div className="mt-12 grid gap-16 md:grid-cols-2">
//             <h2 className="font-editorial text-5xl leading-tight sm:text-7xl">
//               There is a brand within you.
//             </h2>

//             <div className="space-y-7 text-sm leading-8 text-neutral-400">
//               <p>
//                 Every individual carries a combination of experiences,
//                 ideas, values, abilities and perspectives that make
//                 them distinct.
//               </p>

//               <p>
//                 Personal branding begins with recognising those qualities
//                 and understanding how to communicate them to the world.
//               </p>

//               <p>
//                 The Brand In You brings that conversation into focus,
//                 encouraging readers to think more intentionally about
//                 their identity and the impression they create.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Author */}
//       <section className="border-y border-white/10 bg-neutral-950 px-6 py-24 lg:px-12 lg:py-32">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
//           <div>
//             <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
//               About The Author
//             </p>

//             <h2 className="mt-7 font-editorial text-5xl sm:text-6xl">
//               The mind behind the message.
//             </h2>
//           </div>

//           <div>
//             <FiBookmark size={25} className="text-neutral-400" />

//             <p className="mt-8 text-sm leading-8 text-neutral-400">
//               Ifeanyichukwu Sunday Nwagbo, popularly known as Mr. Nis,
//               is a creative entrepreneur whose interests span media,
//               communication, personal branding and business visibility.
//               Through his writing, he shares ideas that encourage people
//               to think about their identity, their message and the value
//               they bring to the world.
//             </p>

//             <Link
//               to="/about"
//               className="mt-8 inline-flex items-center gap-3 text-sm text-white transition-colors hover:text-neutral-400"
//             >
//               Discover The Author
//               <FiArrowUpRight />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 py-28 text-center lg:py-36">
//         <h2 className="mx-auto max-w-3xl font-editorial text-5xl sm:text-7xl">
//           Your story deserves to be understood.
//         </h2>

//         <p className="mt-7 text-sm text-neutral-400">
//           Discover The Brand In You.
//         </p>

//         {purchaseLink && (
//           <a
//             href={purchaseLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold text-black hover:bg-neutral-300"
//           >
//             Purchase The Book
//             <FiArrowUpRight />
//           </a>
//         )}
//       </section>

//     </div>
//   );
// }

// export default Books;




import { motion } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp, FiTarget, FiPenTool, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
import insight from "../assets/img/insight.png";

function Insights() {
  const categories = [
    {
      icon: FiTarget,
      name: "Brand & Identity",
      description: "Thoughts on personal branding, positioning, reputation and what makes an identity memorable.",
    },
    {
      icon: FiTrendingUp,
      name: "Business & Entrepreneurship",
      description: "Perspectives on building businesses, recognising opportunities and creating sustainable growth.",
    },
    {
      icon: FiGlobe,
      name: "Visibility & Content",
      description: "Ideas on digital presence, content creation, audience building and communicating value.",
    },
    {
      icon: FiPenTool,
      name: "Creativity & Influence",
      description: "Observations on creative thinking, storytelling, communication and meaningful influence.",
    },
  ];

  const articles = [
    {
      number: "01",
      category: "Brand & Identity",
      title: "Being Known Is Not The Same As Having A Brand.",
      excerpt: "There is a difference between being recognised and having something meaningful that people associate with your name.",
      read: "Brand Perspective",
    },
    {
      number: "02",
      category: "Visibility & Content",
      title: "Your Business Cannot Grow Beyond Its Visibility.",
      excerpt: "A great product needs more than quality. It needs to be discovered, understood and trusted by the right people.",
      read: "Business Perspective",
    },
    {
      number: "03",
      category: "Business & Entrepreneurship",
      title: "Stop Waiting For Customers To Discover You.",
      excerpt: "In a competitive marketplace, businesses must become intentional about communicating their value and reaching potential customers.",
      read: "Growth Perspective",
    },
    {
      number: "04",
      category: "Creativity & Influence",
      title: "Consistency Is A Creative Advantage.",
      excerpt: "Showing up repeatedly gives your audience more opportunities to understand your message and connect with your work.",
      read: "Creative Perspective",
    },
    {
      number: "05",
      category: "Brand & Identity",
      title: "What Does Your Name Represent?",
      excerpt: "A personal brand is not simply a logo or an online profile. It is the meaning people attach to your identity.",
      read: "Brand Perspective",
    },
    {
      number: "06",
      category: "Visibility & Content",
      title: "Content Should Do More Than Fill Your Feed.",
      excerpt: "Every piece of content is an opportunity to educate, communicate, build trust or create a meaningful connection.",
      read: "Content Perspective",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36 lg:px-12 lg:pb-40 lg:pt-48">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-amber-500/[0.05] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Insights / Ideas & Perspectives
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-6xl font-editorial text-6xl leading-[1.05] sm:text-8xl lg:text-[110px]"
          >
            Ideas worth
            <br />
            thinking <span className="italic text-neutral-500">about.</span>
          </motion.h1>

          <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-neutral-400">
              A collection of thoughts, perspectives and observations
              on business, branding, creativity, visibility and the
              things that shape how we connect with the world.
            </p>

            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              A Journal By Mr. Nis
            </span>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden border border-white/10 bg-neutral-950"
        >
          <div className="grid md:grid-cols-2">
            <div className="flex min-h-[380px] flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  The Featured Perspective
                </p>

                <h2 className="mt-10 font-editorial text-4xl leading-tight sm:text-6xl">
                  The world cannot value what it cannot see.
                </h2>
              </div>

              <p className="mt-10 max-w-md text-sm leading-8 text-neutral-400">
                Visibility is more than posting online. It is about
                making your value discoverable, communicating your
                message and giving people a reason to pay attention.
              </p>
            </div>

            <div className="relative min-h-[350px] bg-neutral-900">
              <img
                src={insight}
                alt="Creative entrepreneur working on ideas and strategy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Visibility / Perspective
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Explore The Conversations
          </p>

          <h2 className="mt-7 font-editorial text-5xl sm:text-7xl">
            What interests you?
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 35px rgba(217,164,104,0.18)",
                    zIndex: 10,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative border border-white/10 bg-white/[0.02] p-8 sm:p-10"
                >
                  <Icon size={26} className="text-neutral-400" />

                  <h3 className="mt-10 font-editorial text-3xl">
                    {category.name}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-neutral-400">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Collection */}
      <section className="border-y border-white/10 bg-neutral-950 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                The Journal
              </p>

              <h2 className="mt-7 font-editorial text-5xl sm:text-7xl">
                Thoughts & Perspectives.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-neutral-500">
              Ideas to challenge perspectives, encourage thought
              and inspire better decisions.
            </p>
          </div>

          <div className="mt-16">
            {articles.map((article, index) => (
              <motion.article
                key={article.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 35px rgba(217,164,104,0.15)",
                  zIndex: 10,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative border-t border-white/10 bg-neutral-950 px-5 py-9 transition-colors duration-300 hover:bg-neutral-900/70 sm:px-8 sm:py-12"
              >
                <div className="grid gap-6 md:grid-cols-[70px_1fr_1fr_auto] md:items-center">

                  <span className="font-editorial text-2xl text-neutral-600">
                    {article.number}
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      {article.category}
                    </p>

                    <h3 className="mt-4 max-w-lg font-editorial text-2xl leading-snug sm:text-3xl">
                      {article.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-neutral-400">
                    {article.excerpt}
                  </p>

                  <span className="flex items-center gap-2 text-xs text-neutral-500">
                    {article.read}
                    <FiArrowUpRight />
                  </span>

                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-neutral-500">
            These are proposed editorial topics and introductory
            summaries. Full articles can be published as they are written.
          </p>

        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-28 text-center lg:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          A Thought Worth Sharing
        </p>

        <h2 className="mx-auto mt-8 max-w-4xl font-editorial text-5xl leading-tight sm:text-7xl">
          Better ideas create better possibilities.
        </h2>

        <p className="mt-7 text-sm text-neutral-400">
          Keep thinking. Keep creating. Keep growing.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-4 border border-white/20 px-8 py-5 text-sm transition-all hover:border-white/50 hover:bg-white/5"
        >
          Connect With Mr. Nis
          <FiArrowUpRight />
        </Link>
      </section>

    </div>
  );
}

export default Insights;