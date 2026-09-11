import Image from "next/image";

export default function ContactPanel() {
  return (
    <div className="flex flex-col items-center">
      <Image className="w-full h-auto max-w-125 pixelated" src="content/panels/contact/banner_arms.png" alt="" width={0} height={0} unoptimized />
    </div>
  );
}
