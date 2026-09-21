import { SITE_AUTHOR, SITE_START_YEAR, SITE_END_YEAR } from "@/lib/consts";

export default function SidebarCopyright() {
  return (
    <div>
      &copy; {SITE_AUTHOR} {SITE_START_YEAR}&mdash;{SITE_END_YEAR}
    </div>
  );
}
