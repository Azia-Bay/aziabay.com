type BlogParagraphProps = {
  children?: React.ReactNode;
}

export default function BlogParagraph({ children }: BlogParagraphProps) {
  return (
    <p
      className="text-justify text-md">
      {children}
    </p>
  );
}
