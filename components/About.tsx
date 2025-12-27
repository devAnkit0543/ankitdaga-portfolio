import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto flex flex-col gap-8"
    // className="max-w-containerSmall mx-auto py-10"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            {/* Hello! My name is Ankit Daga and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! */}

            I am a Software Developer with 3+ years of experience in full-stack web development, primarily focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in building modern, responsive web applications using React for the front-end and Node.js for the back-end, with a understanding of MongoDB for efficient data handling
          </p>
          <p>
            Throughout my career, I’ve honed my skills in Git and Jira, which have helped me effectively manage projects, collaborate with teams, and ensure smooth development workflows. I have a solid foundation in leveraging React component libraries, such as Ant Design (AntD), to create user-friendly and visually appealing interfaces.,{" "}
            {/* <span className="text-textGreen">
              a huge corporation, and a student-led design studio.
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat{" "}
            <span className="text-textGreen">
              ab natus possimus? Sint, accusamus!
            </span> */}
          </p>
          <p>
            I’m always eager to learn new technologies and best practices that can help improve the efficiency and quality of my work. Problem-solving and writing clean, maintainable code are my priorities, and I thrive in dynamic environments where I can contribute to meaningful projects. Whether working independently or in a team, I’m committed to delivering high-quality software that meets both user and business needs
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Ant Design Library
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React.Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              {/* <Image
                className="rounded-lg h-full object-cover"
                src={'/assets/images/ankitd.jpg'}
                alt="profileImg"
              /> */}
              <img alt="Ankit Daga - MERN Stack Developer" className="rounded-lg h-full object-cover" src="/assets/images/profile.jpg" loading="lazy" />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
