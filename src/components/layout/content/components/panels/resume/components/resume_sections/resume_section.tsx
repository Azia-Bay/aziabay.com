type ResumeSectionProps = {
  title: string;
  children?: React.ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <div>
      <h2
        className="bg-dark text-light text-lg my-2 px-4 py-1 text-center">
        {title}
      </h2>
      
      {children}
    </div>
  );
}
