import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/experience/experience_resume_subsection"

export default function ExperienceResumeSection() {
  return (
    <Section title="Experience">
      <div className="flex flex-col gap-4">
        <Subsection role="Software Developer" org="Epic Systems" start="June 2025" end="May 2026" loc="Verona, WI" bullets={["Built an integrated ML model to redact patient identifiers from clinical notes, deployed in 300+ hospital systems.", "De-identified clinical notes using Python, SQL, and Microsoft Fabric Data Warehouses, spanning 11k lines of code.", "Improved DOB identification by 16.266% after performing data science with Python (pandas, numpy) and SQL.", "Led a 12-person labeling effort for over 100k HIPAA-defined patient identifiers in 9,000+ clinical notes.", "Saved 8 hours of manual work per week for the technical support team with Python automation scripts."]} />

        <Subsection role="Software Developer Intern" org="York Space Systems" start="May 2024" end="August 2024" loc="Denver, CO" bullets={["Created the core thermal control framework, unifying 7 isolated frameworks and reducing duplicated code by 56%.", "Fixed 4 critical bugs in the thermal control frameworks for 6 satellite missions before launch.", "Wrote automated unit testing with 100% coverage using Google Test for integration with the CI/CD pipeline.", "Updated 30+ scripts in C, C++, C#, Python, and Bash for automatically generating new satellite missions."]} />

        <Subsection role="Software Developer" org="Maxus33" start="September 2022" end="December 2023" loc="Richardson, TX" bullets={["Developed 3 cross-platform (Android and iOS) mobile applications using C#, XAML, and the .NET Framework.", "Ported 1.2k lines of code from Windows Forms to Xamarin Forms, allowing UWP/macOS cross-compatibility.", "Multiplied the storage capacity for embedded animations from 25,000 to 250,000+ with dotLottie file compression.", "Led daily stand-up meetings using Agile and Scrum development methodologies, and onboarded 3 interns."]} />

        <Subsection role="Instructor" org="iD Tech Camps" start="May 2023" end="July 2023" loc="Richardson, TX" bullets={["Instructed 50+ high school students in programming and game development using Java, JavaScript, and C++.", "Taught students with personalized learning plans and received a 100% satisfaction rate from students and parents."]} />
      </div>
    </Section>
  );
}
