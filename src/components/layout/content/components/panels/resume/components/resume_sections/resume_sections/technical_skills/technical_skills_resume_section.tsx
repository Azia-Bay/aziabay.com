import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section";
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/technical_skills/technical_skills_resume_subsection";

export default function TechnicalSkillsResumeSection() {
  return (
    <Section
      title="Technical Skills">
      <div
        className="flex flex-col gap-1">
        <Subsection
          category="Languages"
          skills={["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Lua", "Ruby", "Dart", "Bash", "SQL", "XAML", "HTML", "CSS"]} />
        
        <Subsection
          category="Frameworks"
          skills={["React", "Next.js", "Tailwind", ".NET", "MAUI", "Xamarin Forms", "Windows Forms", "Flutter"]} />
        
        <Subsection
          category="Game Engines"
          skills={["Unity", "Godot", "DragonRuby", "Usagi", "MonoGame", "SFML", "p5.js"]} />
        
        <Subsection
          category="Databases"
          skills={["Firebase", "Google Cloud", "Microsoft Fabric", "MySQL"]} />
        
        <Subsection
          category="DevOps"
          skills={["Microsoft Azure DevOps", "Git", "GitLab", "Jira"]} />
      </div>
    </Section>
  );
}
