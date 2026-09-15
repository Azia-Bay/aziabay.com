import { SOCIALS } from "@/lib/consts";

import Button from "@/components/ui/button"

export default function Socials() {
  return (
    <div className="ml-auto px-14 pb-10 flex flex-row gap-1">
      {SOCIALS.map((social) => (
        <Button key={social.href} href={social.href} target="_blank" src={social.src} alt={social.alt} />
      ))}
    </div>
  );
}
