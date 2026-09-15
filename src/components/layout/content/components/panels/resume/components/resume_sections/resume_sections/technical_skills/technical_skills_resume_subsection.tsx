type TechnicalSkillsResumeSubsectionProps = {
  category: string;
  skills: string[];
}

export default function TechnicalSkillsResumeSubsection({ category, skills }: TechnicalSkillsResumeSubsectionProps) {
  return (
    <div className="flex flex-row gap-2">
      <div>
        <b>{category}</b>:
      </div>

      <div className="flex flex-row gap-1">
        {skills.map((skill, index) => (
          <div key={index} className="px-3 py-1 rounded-sm bg-background text-foreground text-sm lowercase">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
