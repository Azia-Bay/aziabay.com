type VolunteerismResumeSubsectionProps = {
  role: string;
  org: string;
  start: string;
  end: string;
  loc: string;
  hours: string;
  bullets: string[];
};

export default function VolunteerismResumeSubsection({ role, org, start, end, loc, hours, bullets }: VolunteerismResumeSubsectionProps) {
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

        <i>{hours} volunteer hours</i>
      </div>

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
