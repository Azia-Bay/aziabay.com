import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/experience/experience_resume_subsection"

export default function ExperienceResumeSection() {
  return (
    <Section title="Experience">
      <Subsection role="Software Developer" />
      <Subsection role="Software Developer Intern" />
      <Subsection role="Software Developer" />
      <Subsection role="Instructor" />
    </Section>
  );
}
