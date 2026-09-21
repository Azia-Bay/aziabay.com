import { SOCIALS } from "@/lib/consts";

import Button from "@/components/ui/button"

export default function Socials() {
  return (
    <div className="self-center ml-3 mr-5 max-lg:mb-10 flex max-lg:flex-row lg:flex-col gap-1">
      {SOCIALS.map((social) => (
        <Button key={social.href} href={social.href} target="_blank" src={social.src} alt={social.alt} eager />
      ))}
    </div>
  );
}
