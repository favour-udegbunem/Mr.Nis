
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "What I Do", path: "/experience" },
  { name: "Campiq Studio", path: "/campiq" },
  { name: "The Challenge", path: "/challenge" },
  { name: "Books", path: "/books" },
  { name: "Insights", path: "/insights" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `text-xs transition-colors duration-300 ${
      isActive
        ? "text-white"
        : "text-neutral-500 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">

        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <span className="font-editorial text-3xl font-semibold tracking-tight text-white">
            N<span className="text-neutral-500">.</span>
          </span>

          <span className="border-l border-white/20 pl-3">
            <span className="block text-sm font-semibold tracking-wide text-white">
              MR. NIS
            </span>
            <span className="mt-1 block text-[8px] uppercase tracking-[0.25em] text-neutral-500">
              Official Portfolio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-3 border border-white/30 px-5 py-3 text-xs text-white transition-colors hover:translate-x-1 hover:text-black xl:flex"
        >
          Let's Connect
          <ArrowUpRight size={15} />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-white xl:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 xl:hidden">
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className="flex items-center gap-5 border-b border-white/10 py-4 text-white"
              >
                <span className="text-[10px] text-neutral-600">
                  0{index + 1}
                </span>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-between bg-white px-5 py-4 text-sm font-semibold text-black"
            >
              Let's Connect
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;