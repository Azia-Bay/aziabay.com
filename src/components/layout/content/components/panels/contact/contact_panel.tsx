import Divider from "@/components/layout/content/components/panels/contact/components/contact_divider"
import Form from "@/components/layout/content/components/panels/contact/components/contact_form"
import Header from "@/components/layout/content/components/panels/contact/components/contact_header"
import Socials from "@/components/layout/content/components/panels/contact/components/contact_socials"

export default function ContactPanel() {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-4 items-center">
      <Header />
      <Divider />
      <Socials />
      <Divider />
      <Form />
    </div>
  );
}
