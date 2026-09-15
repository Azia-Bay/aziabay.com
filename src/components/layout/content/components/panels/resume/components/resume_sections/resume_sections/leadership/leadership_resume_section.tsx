import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/leadership/leadership_resume_subsection"

export default function LeadershipResumeSection() {
  return (
    <Section title="Leadership">
      <div className="flex flex-col gap-4">
        <Subsection role="Education Officer" org="Association for Computing Machinery" start="September 2023" end="May 2025" loc="Richardson, TX" skills={[]} bullets={[]} />

        <Subsection role="TIP Officer" org="Association for Computing Machinery" start="September 2023" end="May 2025" loc="Richardson, TX" skills={["Java", "Python"]} bullets={["Led 9 weekly undergraduate-targeted workshops on data structures and algorithms using Java and Python.", "Vetted 50+ candidates for the Association for Computing Machinery Technical Interview Preparation program."]} />
      </div>
    </Section>
  );
}
