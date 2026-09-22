import Header from "./components/resume_header"
import EducationSection from "./components/resume_sections/resume_sections/education/education_resume_section";
import TechnicalSkillsSection from "./components/resume_sections/resume_sections/technical_skills/technical_skills_resume_section";
import ExperienceSection from "./components/resume_sections/resume_sections/experience/experience_resume_section";
import ProjectsSection from "./components/resume_sections/resume_sections/projects/projects_resume_section";
import ResearchSection from "./components/resume_sections/resume_sections/research/research_resume_section";
import AwardsSection from "./components/resume_sections/resume_sections/awards/awards_resume_section";
import LeadershipSection from "./components/resume_sections/resume_sections/leadership/leadership_resume_section";
import VolunteerismSection from "./components/resume_sections/resume_sections/volunteerism/volunteerism_resume_section";

export default function ResumePanel() {
  return (
    <div
      className="scrollbar scroll-smooth overflow-y-auto w-fit rounded-lg mx-auto px-10 py-16 border-4 border-dark border-double flex flex-col gap-4 bg-light text-dark zoom-25 2xs:zoom-30 xs:zoom-40 sm:zoom-50 md:zoom-65 lg:zoom-45 xl:zoom-65 2xl:zoom-80 3xl:zoom-100">
      <Header />
      <EducationSection />
      <TechnicalSkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <AwardsSection />
      <LeadershipSection />
      <VolunteerismSection />
    </div>
  );
}
