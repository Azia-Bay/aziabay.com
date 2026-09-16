type LeadershipResumeSubsectionProps = {
  role: string;
  org: string;
  start: string;
  end: string;
  loc: string;
  skills: string[];
  bullets: string[];
};

export default function LeadershipResumeSubsection({ role, org, start, end, loc, skills, bullets }: LeadershipResumeSubsectionProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold">{role}</h3>
          <div>{start} &mdash; {end}</div>
        </div>

        <div className="flex flex-row justify-between">
          <i>{org}</i>
          <i>{loc}</i>
        </div>
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
