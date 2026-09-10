"use client"

import { useState } from "react";

import { Tab } from "@/lib/types"

import Sidebar from "@/components/layout/sidebar/sidebar"
import Content from "@/components/layout/content/content"

export default function Home() {
  const [tab, setTeb] = useState<Tab>("games");

  return (
    <div>
      <main className="w-screen h-screen flex flex-row">
        <Sidebar onTabChange={setTeb} />
        <Content tab={tab} onTabChange={setTeb} />
      </main>
    </div>
  );
}
