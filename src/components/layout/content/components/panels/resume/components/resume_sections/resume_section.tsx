type ResumeSectionProps = {
  title: string;
  children?: React.ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <div>
      <h2 className="text-lg">{title}</h2>
      {children}
    </div>
  )
}
