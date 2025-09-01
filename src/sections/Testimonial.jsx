import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";

// Professional Certifications & Technical Credentials for PFE Application
const certifications = [
  {
    id: 1,
    title: "Foundation: Introduction to LangGraph",
    provider: "LangChain",
    category: "AI & Machine Learning",
    description: "Advanced graph-based AI workflows and multi-agent systems development with LangGraph framework.",
    image: "/assets/certif/1.png",
    level: "Foundation",
    icon: "🧠"
  },
  {
    id: 2,
    title: "Associate Data Engineer",
    provider: "DataCamp",
    category: "Data Engineering",
    description: "Certified expertise in data pipeline development, ETL processes, and data infrastructure management.",
    image: "/assets/certif/2.png",
    level: "Associate",
    icon: "🔧"
  },
  {
    id: 3,
    title: "Getting Started with Full Stack Java Development",
    provider: "SimpliLearn",
    category: "Full Stack Development",
    description: "Comprehensive full-stack Java development including Spring Framework and modern web technologies.",
    image: "/assets/certif/3.png",
    level: "Professional",
    icon: "☕"
  },
  {
    id: 4,
    title: "The Java Learning Guide",
    provider: "Udemy",
    category: "Programming Languages",
    description: "Complete Java programming fundamentals and advanced concepts for enterprise development.",
    image: "/assets/certif/4.png",
    level: "Complete",
    icon: "�"
  },
  {
    id: 5,
    title: "Java Spring Boot - TOP 10% RANKING",
    provider: "TestDome",
    category: "Framework Expertise",
    description: "Ranked in TOP 10% for Spring Boot expertise using work-sample testing methodology.",
    image: "/assets/certif/5.png",
    level: "Top 10%",
    icon: "🏆"
  },
  {
    id: 6,
    title: "Introduction to Data Science",
    provider: "Cisco",
    category: "Data Science",
    description: "Foundational knowledge in data science methodologies, analytics, and business intelligence.",
    image: "/assets/certif/6.png",
    level: "Introduction",
    icon: "📊"
  },
  {
    id: 7,
    title: "Problem Solving",
    provider: "HackerRank",
    category: "Algorithmic Thinking",
    description: "Demonstrated problem-solving skills through algorithmic challenges and coding assessments.",
    image: "/assets/certif/7.png",
    level: "Certified",
    icon: "🧩"
  }
];

const firstRow = certifications.slice(0, Math.ceil(certifications.length / 2));
const secondRow = certifications.slice(Math.ceil(certifications.length / 2));

const CertificationCard = ({ title, provider, category, description, image, level, icon }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-96 cursor-pointer overflow-hidden rounded-xl border p-6 border-gray-50/[.1] bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 hover:from-blue-800/30 hover:via-indigo-800/30 hover:to-purple-800/30 hover-animation backdrop-blur-sm"
      )}
    >
      <div className="flex flex-row items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20 bg-white/10">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full hidden items-center justify-center text-2xl">
              {icon}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full">
              {level}
            </span>
            <span className="text-xs text-gray-400">{category}</span>
          </div>
          <figcaption className="text-sm font-bold text-white leading-tight mb-1">
            {title}
          </figcaption>
          <p className="text-sm font-semibold text-yellow-300">{provider}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-200 leading-relaxed">{description}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Certifications & Technical Credentials</h2>
      <p className="text-gray-300 mt-4 max-w-4xl text-center mx-auto">
        Professional certifications and validated technical expertise demonstrating readiness for advanced PFE projects in AI, data engineering, and full-stack development
      </p>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((certification) => (
            <CertificationCard key={`cert-${certification.id}`} {...certification} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((certification) => (
            <CertificationCard key={`cert-${certification.id}`} {...certification} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
