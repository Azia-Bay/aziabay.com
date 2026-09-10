import Tabs from "@/components/layout/content/components/content_tabs"

export default function Content() {
  return (
    <div className="flex-1 p-15 flex flex-col">
      <Tabs />

      <div className="flex-1 p-5 rounded-lg border-4 border-foreground border-double">
        { /* IF CONDITION to display Games / Blog / Resume / Contact panel */ }
      </div>
    </div>
  )
}
