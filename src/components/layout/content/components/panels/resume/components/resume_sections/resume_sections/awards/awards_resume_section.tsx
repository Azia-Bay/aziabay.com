import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/awards/awards_resume_subsection"

export default function AwardsResumeSection() {
  return (
    <Section title="Awards">
      <div className="flex flex-col gap-1">
        <Subsection title="People's Choice, Research Symposium" org="Association for Computing Machinery" date="May 2024" />
        <Subsection title="Founders Fictional Short Story" org="Manuel Luis Martinez" date="April 2024" />
        <Subsection title="3rd Place, Game Jam" org="Student Game Developer Association" date="March 2024" />
        <Subsection title="Most Innovative, Game Jam" org="Student Game Developer Association" date="March 2024" />
        <Subsection title="1st Place, Hackathon" org="Association for Computing Machinery" date="April 2022" />
        <Subsection title="National Merit Scholarship" org="University of Texas at Dallas" date="June 2021" />
        <Subsection title="Academic Excellence Scholarship" org="University of Texas at Dallas" date="June 2021" />
        <Subsection title="Ninth Circuit Civics Essay Finalist" org="U.S. District Court, Northern Mariana Islands" date="May 2021" />
        <Subsection title="National Merit Scholar Finalist" org="CollegeBoard" date="February 2021" />
        <Subsection title="National Rural Scholar" org="CollegeBoard" date="February 2021" />
        <Subsection title="U.S. Presidential Scholar Candidate" org="U.S. Department of Education" date="January 2021" />
      </div>
    </Section>
  );
}
