type ResearchResumeSubsectionProps = {
  title: string;
  link: string;
  href: string;
  skills: string[];
  bullets: React.ReactNode[];
};

export default function ResearchResumeSubsection({ title, link, href, skills, bullets }: ResearchResumeSubsectionProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>

        <a href={href} target="_blank" className="cursor-pointer mr-auto underline">{link}</a>
      </div>

      {skills.length > 0 &&
        <div className="flex flex-row gap-1">
          {skills.map((skill, index) => (
            <div key={index} className="px-3 py-1 rounded-sm bg-dark text-light text-sm lowercase">
              {skill}
            </div>
          ))}
        </div>
      }

      {bullets.length > 0 &&
        <ul className="list-disc list-inside ml-5 flex flex-col gap-0.5">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      }
    </div>
  );
}
