import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Archive from "@/components/Archive";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Ankit Daga | MERN Stack Developer</title>

        <meta
          name="description"
          content="Ankit Daga is a MERN Stack Developer specializing in React, Node.js, MongoDB, and AWS. Explore projects, experience, and contact details on ankitdaga.in."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
        <link rel="canonical" href="https://ankitdaga.in" />

        {/* Open Graph */}
        <meta property="og:title" content="Ankit Daga | MERN Stack Developer" />
        <meta
          property="og:description"
          content="MERN Stack Developer specializing in React, Node.js, MongoDB, and AWS."
        />
        <meta property="og:url" content="https://ankitdaga.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ankit Daga" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ankit Daga | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="MERN Stack Developer specializing in React, Node.js, MongoDB, and AWS."
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ankit Daga",
              url: "https://ankitdaga.in",
              image: "https://ankitdaga.in/profile.jpg",
              sameAs: [
                "https://www.linkedin.com/in/ankit-daga-427523204//",
                "https://github.com/devAnkit0543",
              ],
              jobTitle: "MERN Stack Developer",
            }),
          }}
        />
      </Head>

      <main className={`w-full h-screen font-bodyFont overflow-x-hidden overflow-y-scroll scrollbar transition-colors duration-300 ${theme === "dark"
        ? "bg-bodyColor text-textLight scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"
        : "bg-bodyColor-light text-textLight-light scrollbar-track-textDark-light/20 scrollbar-thumb-textDark-light/60"
        }`}>
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[100vh] mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            {/* <Projects /> */}
            {/* <Archive /> */}
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
