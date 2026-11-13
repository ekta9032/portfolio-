import React from 'react';
import { Layers, Cpu, Database, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const featureCards = [
    {
      icon: Layers,
      title: "MERN Stack Development",
      description: "Building responsive, scalable web applications using React.js, Node.js, Express.js, and MongoDB."
    },
    {
      icon: Cpu,
      title: "Modern Web Engineering",
      description: "Developing component-based architectures with React Hooks, Context API, RESTful APIs, and Tailwind CSS."
    },
    {
      icon: Database,
      title: "Databases & CRUD APIs",
      description: "Designing schemas and persistent data models with MongoDB, Mongoose ODM, and relational SQL foundations."
    },
    {
      icon: Code2,
      title: "SDLC & Problem Solving",
      description: "Applying Data Structures, Algorithms, SDLC workflows, Git/GitHub version control, and Postman testing."
    }
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative & Quote */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white animate-fade-in">
              Building scalable digital products
              <br />
              <span className="font-serif italic font-normal text-white">
                with clean code and modern technology.
              </span>
            </h2>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed animate-fade-in">
              <p>
                I'm <strong className="text-white font-medium">{personal.name}</strong>, an MCA graduate from <strong className="text-white font-medium">Pranveer Singh Institute of Technology (PSIT), Kanpur</strong> and a Full Stack Developer with experience in software development and MERN Stack technologies.
              </p>
              <p>
                Currently, I am a <strong className="text-white font-medium">Junior Software Developer at Codenia Technologies LLP</strong>, where I contribute to software and application development activities, apply modern programming concepts, and collaborate on development tasks to solve technical problems.
              </p>
              <p>
                Previously, as a <strong className="text-white font-medium">Full Stack Developer Intern at QSpiders Noida</strong>, I developed responsive applications using React.js, built reusable components with Hooks and Context API, integrated RESTful APIs, and managed data persistence with MongoDB and Mongoose.
              </p>
              <p>
                I have a strong foundation in JavaScript, React.js, Node.js, Express.js, and modern web technologies. I am passionate about problem-solving, continuous learning, and developing scalable software solutions.
              </p>
            </div>

            {/* Quotation Glass Card */}
            <div className="glass rounded-2xl p-6 glow-border border border-primary/20">
              <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed">
                "My goal is to build impactful full-stack applications that combine modern web technologies with intelligent problem-solving to create software people genuinely enjoy using."
              </p>
            </div>
          </div>

          {/* Right Column: 4 Feature Grid Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
