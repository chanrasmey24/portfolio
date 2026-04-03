function Hero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* MAIN LAYOUT */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/me.jpg"
              alt="Raksmey"
              className="w-64 h-64 object-cover rounded-2xl border border-gray-700 shadow-lg"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm Rasmey
            </h1>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
              Aspiring Full Stack Developer passionate about building real-world web applications using modern technologies.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-500"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;