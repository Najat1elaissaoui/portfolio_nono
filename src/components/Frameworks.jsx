import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    // Langages
    "python",
    "javascript", 
    "java",
    "cplusplus",
    "csharp",
    "kotlin",
    // Frameworks
    "flask",
    // "springboot",
    // "angular",
    "react",
    "flutter",
    "dotnet",
    "dotnetcore",
    // UI/Front-end
    "html5",
    "css3",
    "bootstrap",
    "tailwindcss",
    // "mui",
    // "electron",
    // Bases de données
    "mysql",
    // "sqlite",
    "firebase",
    // "supabase",
    // Outils
    "git",
    "github",
    "docker",
    "vscode",
    "figma",
    // "linux",
    // IA & Data
    "opencv",
    "tensorflow",
    // "ai",
    // "n8n",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
