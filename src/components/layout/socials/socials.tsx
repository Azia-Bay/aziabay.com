import { SOCIALS } from "@/lib/consts";

import Button from "@/components/ui/button";

export default function Socials() {
  return (
    <div className="self-center lg:ml-3 lg:mr-5 flex flex-row lg:flex-col gap-1">
      {SOCIALS.map((social, index) => (
        <Button
          key={index}
          href={social.href}
          target="_blank"
          src={social.src}
          alt={social.alt}
          eager />
      ))}
    </div>
  );
}
