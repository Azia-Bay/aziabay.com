import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section";
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/education/education_resume_subsection";

export default function EducationResumeSection() {
  return (
    <Section
      title="Education">
      <div
        className="flex flex-col gap-4">
        <Subsection
          org="University of Texas at Dallas"
          program="B.S. in Computer Science"
          loc="Richardson, TX"
          end="December 2026"
          bullets={[
            <span><b>Scholarships</b>: National Merit Scholarship (1560/1600 SAT), Academic Excellence Scholarship</span>,
            <span><b>Electives</b>: Machine Learning, Artificial Intelligence, Computer Networks, Embedded Systems, Compiler Design</span>,
            <span><b>Organizations</b>: Collegium V, Association for Computing Machinery, Student Game Developer Association</span>,
            <span><b>Leadership</b>: Association for Computing Machinery Education Officer and TIP Lead</span>,
            <span><b>Volunteerism</b>: Alternative Spring Break Program, Heritage Farmstead Museum (60+ volunteer hours)</span>]} />
        
        <Subsection
          org="International Studies Institute"
          program="Study Abroad"
          loc="Florence, IT"
          end="May 2024"
          bullets={[]} />
      </div>
    </Section>
  );
}
