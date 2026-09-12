import Button from "@/components/layout/content/components/panels/blog/components/blog_button"

export default function BlogPanel() {
  return (
    <div className="flex flex-col gap-1">
      <Button onClick={() => {}} date={new Date(2026, (9 - 1), 21)} title="Devlog: The Creation of aziabay.com" tagline="And other ramblings of the mad." wordCount={200} src="content/panels/contact/banner_arms.png" alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." />
    </div>
  );
}
