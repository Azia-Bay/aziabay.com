type EducationResumeSubsectionProps = {
  org: string;
  program: string;
  loc: string;
  end: string;
  bullets: React.ReactNode[];
};

export default function EducationResumeSubsection({ org, program, loc, end, bullets }: EducationResumeSubsectionProps) {
  return (
    <div
      className="flex flex-col gap-1">
      <div
        className="flex flex-col">
        <div
          className="flex flex-row justify-between">
          <h3
            className="font-bold">
            {org}
          </h3>
          
          <div>
            {loc}
          </div>
        </div>

        <div
          className="flex flex-row justify-between">
          <i>
            {program}
          </i>

          <i>
            {end}
          </i>
        </div>
      </div>

      {bullets.length > 0 &&
        <ul
          className="list-disc list-inside ml-5 flex flex-col gap-0.5">
          {bullets.map((bullet, index) => (
            <li
              key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
