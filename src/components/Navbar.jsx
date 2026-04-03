import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("");

  const links = ["projects","skill", "education", "contact"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-1 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Khuon Chanrasmey
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActive(link);
                document.getElementById(link)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className={`capitalize transition ${
                active === link
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;