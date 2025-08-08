"use client";

import Image from "next/image";
import { Github, Mail, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  // {
  //   title: "API Platform",
  //   description: "Built a scalable microservices architecture using Spring Boot and Kafka.",
  //   link: "https://github.com/yourusername/api-platform",
  // },
  {
    title: "Dev Portfolio",
    description: "Responsive developer portfolio built with Next.js and Tailwind CSS.",
    link: "https://github.com/chasedickerson/portfolio",
  },
  {
    title: "More to Come! ",
    description: "Work in progress",
    link: "https://github.com/chasedickerson",
  }
];

const skills = [
  "Java",
  "Spring Boot",
  "REST & GraphQL APIs",
  "Microservices",
  "PostgreSQL",
  "Elasticsearch",
  "Generative AI",
  "Next.js"
];

const skillColors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-cyan-500",
];

const experiences = [
  {
    company: "Ford Motor Comany",
    role: "Senior Lead Software Engineer",
    duration: "2022 – Present",
    logo: "/logos/ford.png",
  },
  {
    company: "Bullhorn, Inc.",
    role: "Software Engineer III",
    duration: "2020 – 2022",
    logo: "/logos/bullhorn2.png",
  },
  {
    company: "O'Reilly Auto Parts",
    role: "Software Developer II",
    duration: "2018 – 2020",
    logo: "/logos/oreilly.png",
  }
];

const techStack = {
  "cloud-computing": [
    {
      name: "Google Cloud Platform",
      src: "/icons/gcp.svg",
      description: "Cloud Run, Cloud Storage, Cloud Scheduler, Secret Manager, IAM Policy, Google Translate API"
    },
    {
      name: "Apigee",
      src: "/icons/apigee.svg",
      description: "Swagger, 42Crunch, API Compliance, JSON"
    },
    {
      name: "Terraform",
      src: "/icons/terraform-1.svg",
      description: "Infrastructure As Code, Cloud Provisioning, Cloud Resource Management"
    },
    {
      name: "Azure",
      src: "/icons/azure.svg",
      description: "SQL Server, Azure AD, Azure Application Gateway"
    }
  ],
  "back-end": [
    {
      name: "Java",
      src: "/icons/java.gif",
      description: "API Development, Microservices, Data Structures, Design Patterns, Unit Tests, Gradle, Maven"
    },
    {
      name: "Spring Boot",
      src: "/icons/spring.svg",
      description: "Spring Security, JPA, Hibernate, Spring Data, Spring Scheduler, REST, GraphQL, MVC"
    },
    {
      name: "Elasticsearch",
      src: "/icons/elastic.svg",
      description: "Indexing, Mappings, Querying, Performance Optimization"
    },
    {
      name: "PostgreSQL",
      src: "/icons/postgres-1.svg",
      description: "Core SQL, Schema Design, Indexing"
    }
  ],
  "tools": [
    {
      name: "Git",
      src: "/icons/git.svg",
      description: "Version Control, GitHub Actions"
    },
    {
      name: "Copilot",
      src: "/icons/copilot.svg",
      description: "Generative AI"
    },
    {
      name: "Postman",
      src: "/icons/postman-1.svg",
      description: "API Testing"
    },
    {
      name: "IntelliJ",
      src: "/icons/intellij.svg",
      description: "IDE"
    }
  ]
}

export const achievements = [
  {
    title: "Education 🎓",
    items: [
      { icon: "💻", text: "B.S. in Computer Science – Missouri State University" },
      { icon: "🧮", text: "Minor in Applied Mathematics – Missouri State University"},
      { icon: "🖱️", text: "Certificate in Computer Science - Ozarks Technical Community College"}
    ],
  },
  {
    title: "Accolades 🏆",
    items: [
      { icon: "🥉", text: "3rd Place National Winner Skills USA Computer Programming Contest" },
      { icon: "🥇", text: "1st Place State of Missouri Winner Skills USA Computer Programming Contest" },
      { icon: "🎖️", text: "Employee of the Month - Ford Motor Company" }
    ],
  },
  {
    title: "Certificates 📜",
    items: [
      { icon: "☁️", text: "Google Cloud Certified Professional - Coursera" },
      { icon: "🤖", text: "Generative AI for Software Developers - Coursera" },
    ],
  },
];

const sections = ["skills", "experience", "projects"];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 min-h-screen font-sans">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">Chase Dickerson</h1>
        <p className="text-lg text-gray-400 mt-2">Software Engineer | API Specialist | Microservices Architect</p>
        <div className="flex justify-center gap-6 mt-4 text-gray-300">
          <a href="mailto:chasedickerson232@gmail.com" aria-label="Email">
            <Mail size={28} />
          </a>
          <a href="https://www.linkedin.com/in/chasedickerson-cs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/chasedickerson" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={28} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-4 sm:px-6 md:px-10 bg-transparent">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src="/logos/profile.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-52 md:h-52 rounded-xl object-cover border-2 border-neutral-700 shadow-md"
            />
          </div>

          {/* About Text */}
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl font-semibold text-white mb-3">About Me</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              I’m a software engineer focused on building robust backend systems and polished frontend interfaces. I specialize in Java, Spring Boot, and API development — with a keen eye for clean and performant UIs using frameworks like Next.js.
            </p>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              When I’m not coding, I’m probably exploring new tech, refining APIs, or leveling up in Elden Ring.
            </p>
          </div>
        </div>
      </section>



      {/* Navigation Buttons */}
      <nav className="flex justify-center space-x-4 mt-8">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeIndex === index ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-blue-700"}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {/* Carousel Section */}
      <section className="relative">
        <div className="relative overflow-hidden">

          {activeIndex === 1 && (
            <div id="experience" className="transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                Experience
              </h2>

              {/* Experience list */}
              <div className="space-y-6 mb-12">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={75}
                      height={75}
                      className="rounded"
                    />
                    <div>
                      <h3 className="font-bold text-gray-100">
                        {exp.role} @ {exp.company}
                      </h3>
                      <p className="text-sm text-gray-400">{exp.duration}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <h3
                      className={`text-xl font-semibold mb-4 border-b border-gray-700 pb-2 ${section.color}`}
                    >
                      {section.title}
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <span className="mr-2">{item.icon}</span>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeIndex === 0 && (
            <div id="skills" className="transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                Skills
              </h2>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`${skillColors[i % skillColors.length]} px-4 py-2 rounded-full text-white text-sm font-medium shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Enhanced Tech Stack */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(techStack).map(([category, tools]) => (
                  <div
                    key={category}
                    className="bg-gray-800 rounded-lg p-6 hover:shadow-xl hover:scale-[1.02] transition duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-4 capitalize text-white border-b border-gray-600 pb-2">
                      {category.replace("-", " ")}
                    </h3>
                    <ul className="space-y-6">
                      {tools.map((tool) => (
                        <li key={tool.name}>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="w-10 h-10 relative flex-shrink-0">
                              <Image
                                src={tool.src}
                                alt={tool.name}
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-white">{tool.name}</span>
                              {tool.description && (
                                <span className="text-xs text-gray-400">{tool.description}</span>
                              )}
                            </div>
                          </div>

                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}


          {activeIndex === 2 && (
            <div id="projects" className="transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">Projects</h2>
              <div className="space-y-6">
                {projects.map((proj, i) => (
                  <div key={i} className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
                    <p className="mt-2 text-gray-300">{proj.description}</p>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-3 inline-block">
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}



        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="text-center pt-10 border-t border-gray-700">
        <p className="text-sm text-gray-500">&copy; 2025 Chase Dickerson</p>
      </section>
    </main>
  );
}
