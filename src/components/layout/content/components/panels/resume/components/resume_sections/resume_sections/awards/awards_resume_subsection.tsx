type AwardsResumeSubsectionProps = {
  title: string;
  org: string;
  date: string;
};

export default function AwardsResumeSubsection({ title, org, date }: AwardsResumeSubsectionProps) {
  return (
    <div
      className="flex flex-row">
      <h3
        className="flex-1 text-start font-bold">
        {title}
      </h3>
      
      <i
        className="flex-1 text-center">
        {org}
      </i>
      
      <div
        className="flex-1 text-end">
        {date}
      </div>
    </div>
  );
}
