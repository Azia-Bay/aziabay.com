type ExperienceResumeSubsectionProps = {
  role: string;
}

export default function ExperienceResumeSubsection({ role }: ExperienceResumeSubsectionProps) {
  return (
    <div>
      <h3>{role}</h3>
    </div>
  );
}
