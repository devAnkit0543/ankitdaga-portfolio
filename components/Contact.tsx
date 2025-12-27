import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        03. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I’m always open to new opportunities and collaborations! Whether you have a project in mind, a question about my work, or just want to connect, feel free to reach out. I’ll do my best to respond and look forward to hearing from you!
      </p>

      <a href="mailto:ankit.dev0543@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 mb-10 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
