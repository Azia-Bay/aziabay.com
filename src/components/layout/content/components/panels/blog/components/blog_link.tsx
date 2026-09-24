type BlogLinkProps = {
  href: string;
  children?: React.ReactNode;
};

export default function BlogLink({ href, children }: BlogLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="cursor-pointer underline">
      {children}
    </a>
  );
}
