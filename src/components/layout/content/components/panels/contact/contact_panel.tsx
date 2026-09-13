"use client"

import Divider from "@/components/layout/content/components/panels/contact/components/contact_divider"
import Header from "@/components/layout/content/components/panels/contact/components/contact_header"
import Socials from "@/components/layout/content/components/panels/contact/components/contact_socials"

export default function ContactPanel() {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-4 items-center">
      <Header />
      <Divider />
      <Socials />
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
