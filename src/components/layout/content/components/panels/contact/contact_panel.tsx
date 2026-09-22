import Divider from "./components/contact_divider";
import Form from "./components/contact_form";
import Header from "./components/contact_header";
import Socials from "./components/contact_socials";

export default function ContactPanel() {
  return (
    <div
      className="scrollbar scroll-smooth overflow-y-auto flex-1 flex flex-col gap-4 items-center">
      <Header />
      <Divider />
      <Socials />
      <Divider />
      <Form />
    </div>
  );
}
