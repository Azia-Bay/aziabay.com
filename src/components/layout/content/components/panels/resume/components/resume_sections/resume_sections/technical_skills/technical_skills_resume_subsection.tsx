type TechnicalSkillsResumeSubsectionProps = {
  category: string;
  skills: string[];
}

export default function TechnicalSkillsResumeSubsection({ category, skills }: TechnicalSkillsResumeSubsectionProps) {
  return (
    <div
      className="flex flex-row gap-2">
      <div
        className="flex flex-row">
        <h3
          className="font-bold">
          {category}
        </h3>
        
        :
      </div>

      <div
        className="flex flex-row gap-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-sm bg-dark text-light text-sm lowercase">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
