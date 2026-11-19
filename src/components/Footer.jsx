
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Work", path: "/work" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-cream lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="font-editorial text-4xl">
              Mr. Nis<span className="text-bronze">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              Experience, perspective and influence through media,
              communication and personal branding.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-bronze">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-bronze">
              Connect
            </p>

            <a
              href="https://ng.linkedin.com/in/ifeanyichukwu-nwagbo-mr-nis-5849bb1b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Ifeanyichukwu Nwagbo. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;