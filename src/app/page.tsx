"use client"

import { useState } from "react";

import { Tab } from "@/lib/types";
import { DEFAULT_TAB } from "@/lib/consts";

import Sidebar from "@/components/layout/sidebar/sidebar";
import Content from "@/components/layout/content/content";
import MusicPlayer from "@/components/layout/music_player/music_player";
import Socials from "@/components/layout/socials/socials";

export default function Home() {
  const [tab, setTab] = useState<Tab>(DEFAULT_TAB);

  function setTabHelper(tab: Tab) {
    setTab(tab);
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="lg:h-screen flex max-lg:flex-col lg:flex-row">
      <Sidebar onTabChange={setTabHelper} />

      <div className="flex-1 flex max-lg:flex-col-reverse lg:flex-col">
        <Content tab={tab} onTabChange={setTabHelper} />
        <MusicPlayer src="music/late_night_radio.mp3" title="Late Night Radio by Kevin Macleod" />
      </div>

      <Socials />
    </div>
  );
}
