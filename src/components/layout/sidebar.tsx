import Image from "next/image";

export default function Sidebar() {
  return (
    <div>
      <Image
        src="/pixel_headshot.png"
        alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses."
        fill />
    </div>
  );
}
