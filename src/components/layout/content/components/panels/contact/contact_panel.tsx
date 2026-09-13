"use client"

import {
  LINK_TO_GITHUB,
  LINK_TO_LINKEDIN,
  LINK_TO_ITCHIO
} from "@/lib/consts";

import Image from "next/image";

import Button from "@/components/ui/button"
import Divider from "@/components/layout/content/components/panels/contact/components/contact_divider"

export default function ContactPanel() {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-4 items-center">
      <Image className="w-full h-auto max-w-125 m-4 pixelated" src="content/panels/contact/banner_arms.png" alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." width={0} height={0} unoptimized />
      
      <Divider />

      <div className="w-auto h-auto flex flex-row justify-center gap-1">
        <Button href={LINK_TO_LINKEDIN} target="_blank" src="socials/button_icon_linkedin.png" alt="A 1-bit (black & white) pixel art icon of the LinkedIn logo, with a shadow underneath adding three-dimensionality." />
  
        <Button href={LINK_TO_GITHUB} target="_blank" src="socials/button_icon_github.png" alt="A 1-bit (black & white) pixel art icon of the GitHub logo, with a shadow underneath adding three-dimensionality." />
  
        <Button href={LINK_TO_ITCHIO} target="_blank" src="socials/button_icon_itchio.png" alt="A 1-bit (black & white) pixel art icon of the itch.io logo, with a shadow underneath adding three-dimensionality." />
      </div>

      <Divider />

      <form onSubmit={(e) => { e.preventDefault(); }} className="w-100 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <input name="name" type="text" placeholder="Name" required className="px-2 py-1 rounded-lg border-4 border-background border-double bg-foreground text-background" />

          <input name="email" type="email" placeholder="Email address" required className="px-2 py-1 rounded-lg border-4 border-background border-double bg-foreground text-background" />
          
          <textarea name="message" placeholder="Message" required rows={5} className="px-2 py-1 rounded-lg border-4 border-background border-double bg-foreground text-background" />
        </div>

        <button type="submit" className="group relative overflow-hidden cursor-pointer mx-auto px-6 py-2 rounded-lg border-4 border-foreground border-double bg-background">
          <div className="relative">
            <div className="text-foreground text-lg font-bold uppercase">Submit</div>

            <span className="absolute origin-center left-0 bottom-0.5 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
          </div>
        </button>
      </form>
    </div>
  );
}
