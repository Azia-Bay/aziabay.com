import { SOCIALS } from "@/lib/consts";

import Button from "@/components/ui/button"

export default function ContactSocials() {
  return (
    <div className="w-auto h-auto flex flex-row justify-center gap-1">
      {SOCIALS.map((social) => (
        <Button key={social.href} href={social.href} target="_blank" src={social.src} alt={social.alt} />
      ))}
    </div>
  );
}
