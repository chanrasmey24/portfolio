function Contact() {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-6">
          Feel free to reach out for internship opportunities or collaboration.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://t.me/Rssmeyyy"
            target="_blank"
            className="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-500"
          >
            Telegram
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raksmeysu34@gmail.com&su=Job%20Opportunity&body=Hello%20Raksmey,"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-6 py-2 rounded-xl hover:bg-red-500"
          >
            Gmail Me
          </a>

          <a
            href="https://github.com/chanrasmey24"
            target="_blank"
            className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/khuon-chanrasmey-726620310/"
            target="_blank"
            className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;