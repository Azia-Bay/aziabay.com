import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"

export default function TechnicalSkillsResumeSection() {
  return (
    <Section title="Technical Skills">
      <div className="flex flex-col gap-1">
        <div><b>Languages</b>: C, C++, C#, Python, Java, JavaScript, TypeScript, Lua, Ruby, Dart, Bash, SQL, HTML, CSS</div>
        <div><b>Frameworks</b>: React (Next.js, Tailwind), .NET (MAUI, Xamarin Forms, Windows Forms), Flutter</div>
        <div><b>Game Engines</b>: Unity, Godot, DragonRuby, Usagi, MonoGame, SFML, p5.js</div>
        <div><b>Databases</b>: Google Cloud Platform (Firebase, Google Cloud), Microsoft Fabric, MySQL</div>
        <div><b>DevOps</b>: Microsoft Azure DevOps, Git, GitLab, Jira</div>
      </div>
    </Section>
  );
}
