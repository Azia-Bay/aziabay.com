import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/volunteerism/volunteerism_resume_subsection"

export default function VolunteerismResumeSection() {
  return (
    <Section title="Volunteerism">
      <div className="flex flex-col gap-4">
        <Subsection role="Volunteer" org="University of Texas at Dallas" start="March 2023" end="May 2025" loc="Richardson, TX" hours="60+" bullets={["Distributed food and stocked shelves at the Resource Center, a food pantry and health services provider.", "Orchestrated entertainment and events for children at the foster care organization Jonathan's Place.", "Staffed the ticket booth and hot chocolate booth at the historic farm museum Heritage Farmstead Museum."]} />
      </div>
    </Section>
  );
}
