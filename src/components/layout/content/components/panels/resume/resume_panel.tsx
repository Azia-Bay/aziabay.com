import Header from "./components/resume_header"
import EducationSection from "./components/resume_sections/resume_sections/education/education_resume_section";
import ExperienceSection from "./components/resume_sections/resume_sections/experience/experience_resume_section";
import TechnicalSkillsSection from "./components/resume_sections/resume_sections/technical_skills/technical_skills_resume_section";
import ProjectsSection from "./components/resume_sections/resume_sections/projects/projects_resume_section";
import ResearchSection from "./components/resume_sections/resume_sections/research/research_resume_section";
import AwardsSection from "./components/resume_sections/resume_sections/awards/awards_resume_section";
import VolunteerismSection from "./components/resume_sections/resume_sections/volunteerism/volunteerism_resume_section";

export default function ResumePanel() {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto w-fit h-full min-h-0 rounded-lg mx-auto px-10 py-16 border-4 border-background border-double flex flex-col gap-4 bg-foreground text-background">
      <Header />
      <EducationSection />
      <TechnicalSkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <AwardsSection />
      <VolunteerismSection />
    </div>
  );
}
