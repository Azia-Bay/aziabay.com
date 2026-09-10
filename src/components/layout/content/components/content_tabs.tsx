import Tab from "@/components/layout/content/components/content_tab"

export default function ContentTabs() {
  return (
    <nav className="self-end px-4 flex flex-row gap-1">
      <Tab>Games</Tab>
      <Tab>Blog</Tab>
      <Tab>Resume</Tab>
      <Tab>Contact</Tab>
    </nav>
  );
}
