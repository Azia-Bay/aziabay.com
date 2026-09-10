import Sidebar from "@/components/layout/sidebar/sidebar"
import Content from "@/components/layout/content/content"

export default function Home() {
  return (
    <div>
      <main className="w-screen h-screen flex flex-row">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}
