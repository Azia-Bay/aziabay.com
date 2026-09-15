"use client"

import { useState } from "react";

import { Tab } from "@/lib/types"
import { DEFAULT_TAB } from "@/lib/consts"

import Sidebar from "@/components/layout/sidebar/sidebar"
import Content from "@/components/layout/content/content"
import LightSwitch from "@/components/layout/light_switch/light_switch"
import Socials from "@/components/layout/socials/socials"

export default function Home() {
  const [tab, setTeb] = useState<Tab>(DEFAULT_TAB);

  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar onTabChange={setTeb} />

      <div className="flex-1 flex flex-col">
        <Content tab={tab} onTabChange={setTeb} />

        <div className="flex flex-row items-center">
          <LightSwitch />
          <Socials />
        </div>
      </div>
    </div>
  );
}
