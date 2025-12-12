import darkSaasLandingPage from "@/assets/images/cartify.png";
import lightSaasLandingPage from "@/assets/images/jobsphere.png";
import aiStartupLandingPage from "@/assets/images/echoai.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right-link.svg";
import Github from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    technologies: "React | Express.js | MongoDB | Node.js",
    year: "2025",
    title: "JobSphere - A Job Portal",
    results: [
      { title: "Developed using MERN stack" },
      { title: "Integrated ShadCN for sleek UI" },
      { title: "Secured with JWT authentication" },
    ],
    link: "https://github.com/vedansh302",
    src: "https://github.com/vedansh302",
    image: lightSaasLandingPage,
  },
  {
    technologies: "Next.js | Node.js | PostgreSQL | Tailwind CSS",
    year: "2025",
    title: "Cartify - AI Ecommerce Platform",
    results: [
      { title: "Full-stack eCommerce built with Next.js" },
      { title: "AI-driven product data generation & workflows" },
      { title: "Admin-powered store approval & discounts" },
    ],
    link: "https://cartify-ecomm.vercel.app/",
    src: "https://github.com/vedansh302/Cartify---Ecommerce-Platform.git",
    image: darkSaasLandingPage,
  },

  {
    technologies: "React | Express.js | MongoDB | OpenAI API",
    year: "2025",
    title: "EchoAI - AI Chatbot ",
    results: [
      { title: "AI chatbot with text & image generation" },
      { title: "Secure user auth with chat history storage" },
      { title: "Stripe-powered credits & payments system" },
    ],
    link: "https://echoai-chatbot.vercel.app/",
    src: "https://github.com/vedansh302/EchoAI---AI-Chatbot.git",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold  text-sm text-transparent bg-clip-text">
                    <span>{project.technologies}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col mt-8 gap-4 md:flex-row ">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.src} target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Source Code</span>
                        <Github className="size-5" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
