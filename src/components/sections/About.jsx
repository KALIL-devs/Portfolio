import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript", "Reactjs", "Python", "Django", "Flask", "MySql", "Sql Server", "Bootstrap", "tailwindcss", "netlify", "vercel", "git", "github", 
    "vite",
  ];

  const backendSkills = [];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
             I’m a full-stack developer who thrives on building things 
             in real-time—whether it’s crafting sleek front-end interfaces or 
             architecting powerful back-end systems. I enjoy turning complex ideas 
             into simple, functional, and scalable solutions. My focus is on creating 
             applications that not only perform exceptionally well but also deliver a 
             smooth and engaging experience for users.
            </p>

            <div className="grid grid-cols-1 md:grid gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-x-1 transition-all my-2">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <strong> BE computer Science & Engineering </strong> St. Michael College Of Engineering & Technology
                  (2022-2026)
                  Relevant Coursework: Data Structures, Web Development, App Development,Computer networks...
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-x-1 transition-all my-2">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> BE computer Science & Engineering </strong> St. Michael College Of Engineering & Technology
                  (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, App Development,Computer networks...
                </li>
              </ul>
            </div>
          </div>
            
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
