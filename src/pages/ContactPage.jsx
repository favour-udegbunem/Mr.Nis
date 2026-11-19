
import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

function ContactPage() {
  const { socialLinks } = portfolioData;

  const contacts = [
    {
      name: "LinkedIn",
      description: "Professional connections and conversations",
      url: socialLinks.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      description: "Creative work and updates",
      url: socialLinks.instagram,
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      description: "Follow professional updates",
      url: socialLinks.facebook,
      icon: FaFacebook,
    },
    {
      name: "YouTube",
      description: "Videos and media content",
      url: socialLinks.youtube,
      icon: FaYoutube,
    },
  ].filter((item) => item.url);

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="px-6 pb-24 pt-28 lg:px-12 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Contact / Let's Connect
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-5xl font-editorial text-6xl leading-[1.1] sm:text-8xl lg:text-[110px]"
          >
            Every great
            <br />
            collaboration
            <br />
            <span className="italic text-neutral-500">
              starts somewhere.
            </span>
          </motion.h1>

          <p className="mt-12 max-w-xl text-base leading-8 text-neutral-400">
            For professional enquiries, creative collaborations,
            speaking invitations, media opportunities and meaningful
            conversations, connect with Mr. Nis.
          </p>

        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Start A Conversation
            </p>

            <h2 className="mt-6 font-editorial text-4xl sm:text-5xl">
              Have something in mind?
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-neutral-400">
              Whether you're interested in Campiq Studio, the Seven
              Days Show Up Challenge, The Brand In You or a potential
              collaboration, reach out through the available channels.
            </p>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              <FaLinkedin size={19} />
              Connect on LinkedIn
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
                        <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              <FaInstagram size={19} />
              Connect on Instagram
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
                        <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              <FaFacebook size={19} />
              Connect on Facebook
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
                        <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              <FaYoutube size={19} />
              Connect on YouTube
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      size={22}
                      className="text-neutral-400 transition-colors duration-300 group-hover:text-white"
                    />

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {contact.name}
                      </h3>

                      <p className="mt-2 text-xs text-neutral-500 transition-colors group-hover:text-neutral-300">
                        {contact.description}
                      </p>
                    </div>
                  </div>

                  <FiArrowUpRight
                    size={19}
                    className="text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>
              );
            })}

            {contacts.length === 0 && (
              <p className="border border-white/15 p-6 text-sm text-neutral-400">
                Social links will be published here soon.
              </p>
            )}
          </div>

        </div>
      </section>

      <section className="px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Mr. Nis
          </p>

          <h2 className="mt-7 font-editorial text-4xl sm:text-6xl">
            Let's make something meaningful.
          </h2>

          <p className="mt-6 text-sm text-neutral-500">
            Experience. Perspective. Influence.
          </p>

        </div>
      </section>

    </div>
  );
}

export default ContactPage;
