import Header from "@/components/layout/content/components/panels/resume/components/resume_header"
import ExperienceSection from "./components/resume_sections/resume_sections/experience/experience_resume_section";
import TechnicalSkillsSection from "./components/resume_sections/resume_sections/technical_skills/technical_skills_resume_section";
import ProjectsSection from "./components/resume_sections/resume_sections/projects/projects_resume_section";
import EducationSection from "./components/resume_sections/resume_sections/education/education_resume_section";

export default function ResumePanel() {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full max-w-200 mx-auto flex flex-col gap-4">
      <Header />
      <ExperienceSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}
