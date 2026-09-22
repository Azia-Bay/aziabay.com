import { SITE_AUTHOR } from "@/lib/consts";

export default function ResumeHeader() {
  return (
    <div>
      <h1
        className="text-6xl font-bold text-center">
        {SITE_AUTHOR}
      </h1>
    </div>
  );
}
