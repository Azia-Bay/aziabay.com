import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section";
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/projects/projects_resume_subsection";

export default function ProjectsResumeSection() {
  return (
    <Section
      title="Projects">
      <div
        className="flex flex-col gap-4">
        <Subsection
          title="Personal Website"
          link="aziabay.com"
          href="/"
          skills={["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"]}
          bullets={[]} />

        <Subsection
          title="DFRuby"
          skills={["DragonRuby", "Ruby"]}
          bullets={[
            <span>Published an open-source Dwarf Fortress-like example/reference game packaged in every DragonRuby download.</span>,
            <span>Contributed 8k lines of code and documentation while working closely with DragonRuby founder Amir Rajan.</span>]} />

        <Subsection
          title="Don't Start the Game"
          link="bit.ly/dstg"
          href="https://bit.ly/dstg"
          skills={["Godot", "GDScript"]}
          bullets={[
            <span>Published a 10-min. interactive experience with 200+ browser plays on itch.io, alongside 4 other students.</span>,
            <span>Voted 3rd place and Most Innovative in the Student Game Developer Association Spring '24 Game Jam.</span>]} />

        <Subsection
          title="AnxietyAlign"
          link="bit.ly/anxietyalign"
          href="https://bit.ly/anxietyalign"
          skills={["Flutter", "Dart", "Firebase", "Google Cloud"]}
          bullets={[
            <span>Presented an 8-min. demo of a mood tracking and journaling mobile app to 200+ people, alongside 3 other students.</span>,
            <span>Implemented user authentication with Firebase and stored user text/audio journals with Firestore and Google Cloud.</span>,
            <span>Elected 1st place in the Association for Computing Machinery Spring '22 Hackathon.</span>]} />
      </div>
    </Section>
  );
}
