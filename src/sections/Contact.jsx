
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze">
          04 / Get In Touch
        </span>

        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-3xl font-editorial text-5xl leading-tight text-ink sm:text-7xl">
              Let's make the next conversation{" "}
              <span className="italic text-bronze">meaningful.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-muted sm:text-base">
              For professional enquiries, collaborations and meaningful
              conversations, get in touch.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-5 bg-transparent border border-white/20  px-8 py-5 text-sm font-semibold text-cream transition-colors "
            >
              Start a Conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="https://ng.linkedin.com/in/ifeanyichukwu-nwagbo-mr-nis-5849bb1b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs text-muted transition-colors hover:text-bronze"
            >
              <Mail size={15} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;