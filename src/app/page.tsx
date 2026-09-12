"use client"

import { useState } from "react";

import { Tab } from "@/lib/types"

import Sidebar from "@/components/layout/sidebar/sidebar"
import Content from "@/components/layout/content/content"
import Socials from "@/components/layout/socials/socials"

export default function Home() {
  const [tab, setTeb] = useState<Tab>("games");

  return (
    <div>
      <main className="w-screen h-screen flex flex-row">
        <Sidebar onTabChange={setTeb} />

        <div className="flex-1 flex flex-col">
          <Content tab={tab} onTabChange={setTeb} />

          <Socials />
        </div>
      </main>
    </div>
  );
}
