"use client";

import HoveredUnderline from "@/components/vfx/hovered_underline";

import Banner, { Shield } from "../components/blog_banner";
import Section from "../components/blog_section";
import Subsection from "../components/blog_subsection";
import Image from "../components/blog_image";

class Tech {
  public id: string;
  public category: string;
  public skills: string[];

  constructor(id: string, category: string, skills: string[]) {
    this.id = id;
    this.category = category;
    this.skills = skills;
  }
};

const TECH = [
  new Tech(
    "frameworks",
    "Frameworks",
    [
      "Next.js",
      "Tailwind"
    ]
  ),
  new Tech(
    "languages",
    "Languages",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript"
    ]
  ),
  new Tech(
    "libraries",
    "Libraries",
    [
      "React",
      "Resend",
      "Motion",
      "next-themes"
    ]
  )
];

export default function AziabayPage() {
  function scrollTo(id: string) {
    const content = document.getElementById(id);
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="scrollbar scroll-smooth overflow-y-auto w-full min-w-3/4 min-h-0 mx-auto rounded-lg border-4 border-dark border-double flex flex-col items-center gap-10 bg-light text-dark">
      <Banner
        src="content/panels/blog/pages/aziabay/banner.png"
        alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's."
        title="The Creation of aziabay.com"
        shields={[
          new Shield("published", "9/23/2026"),
          new Shield("words", 200),
          new Shield("length", `${Math.ceil(200 / 238)} min. read`)]} />

      <div
        className="flex-1 w-full px-10 flex flex-col gap-10">
        <h1
          id="title"
          className="text-center flex flex-col items-center">
          <button
            onClick={() => scrollTo("banner")}
            className="cursor-pointer relative group">
            <div
              className="text-4xl font-bold">
              <span>
                The Creation of
              </span>

              &nbsp;

              <span
                className="relative">
                Adam

                <span
                  className="absolute -left-1 -right-1 top-1/2 h-1 bg-dark " />
              </span>

              &nbsp;

              <span>
                This Website
              </span>
            </div>

            <HoveredUnderline
              bottom="bottom-0"
              h="h-1" />
          </button>

          <div
            className="text-2xl italic">
            And other ramblings of the mad
          </div>
        </h1>

        <div
          className="flex flex-row gap-10">

          <Section
            id="summary"
            title="Summary">
            <div
              className="flex flex-col gap-4">
              <Subsection
                id="history"
                title="A Brief History">
                <div
                  className="text-justify text-lg">
                  <p>
                    During the summer of 2022, I was approaching my second year at the University of Texas at Dallas as a computer science major, and got the idea in my head to create my own website.
                  </p>

                  <p>
                    &emsp;Like many other rats in the great, big race, I had been comparing myself to <i>the elite</i> at my college. No, not the elite in terms of the students with the most family wealth. Instead, I am talking about the students who had perfect grade point averages, leadership positions in the largest student clubs, and summer internships lined up for top tech companies.
                  </p>

                  <p>
                    &emsp;One of these students was Francis Masangcay, the Co-Director of the Association for Computing Machinery at the University of Texas at Dallas—the largest computer science organization at our college—and previous software engineering intern at Amazon Web Services (AWS).
                  </p>

                  <p>
                    &emsp;Francis had his own personal website—<a href="https://francis-masangcay.dev/" target="_blank" className="cursor-pointer underline">francis-masangcay.dev</a>—and in my effort to emulate others and their success, I wanted my own. In the summer of 2022, <a href="/" target="_blank" className="cursor-pointer underline">aziabay.com</a> was born, bright and shiny and new.
                  </p>
                </div>
              </Subsection>

              <Subsection
                id="wait"
                title="Wait, 2022? This blog was published in 2026!">
                <div
                  className="text-justify text-lg">
                  <p>
                    When this website released in 2022, it looked something like this:
                  </p>

                  <Image
                    title="Design 1"
                    src="/content/panels/blog/pages/aziabay/design_1.png"
                    alt="" />

                  <p>
                    Then, I changed things up and made it look like this:
                  </p>

                  <Image
                    title="Design 2"
                    src="/content/panels/blog/pages/aziabay/design_2.png"
                    alt="" />

                  <p>
                    Then this:
                  </p>

                  <Image
                    title="Design 3"
                    src="/content/panels/blog/pages/aziabay/design_3.png"
                    alt="" />

                  <p>
                    Experimented with this:
                  </p>

                  <Image
                    title="Design 4"
                    src="/content/panels/blog/pages/aziabay/design_4.png"
                    alt="" />

                  <p>
                    In 2024, landed on this:
                  </p>

                  <Image
                    title="Design 5"
                    src="/content/panels/blog/pages/aziabay/design_5.png"
                    alt="" />

                  <p>
                    Needless to say, I am incredibly indecisive.
                  </p>

                  <p>
                    &emsp;Although this blog page purports to examine the creation of <a href="/" target="_blank" className="cursor-pointer underline">aziabay.com</a>, what it really examines is the redesign of <a href="/" target="_blank" className="cursor-pointer underline">aziabay.com</a> in 2026, which is hopefully the design you are seeing right now, unless my indecisiveness gets the best of me yet again.
                  </p>

                  <p>
                    &emsp;But I am getting ahead of myself.
                  </p>

                  <p>
                    &emsp;The reason that this website is being redesigned—and the reason for this blog—is that none of the designs above felt like me. Looking back at them now, I do not think any of them are bad, but I cannot help but see them as generic, and lacking any real signature that identifies them as something I made. Excluding, of course, my name printed in big, bold letters wherever the opportunity presents.
                  </p>

                  <p>
                    &emsp;I want my website to be more than a page I shove all the same information from my resume onto, and more than a url to direct recruiters to during job hunting season. I want my website to be made for me. And so, this is the <i>rebirth</i> of <a href="/" target="_blank" className="cursor-pointer underline">aziabay.com</a>, redesigned for 2026, and years to come.
                  </p>
                </div>
              </Subsection>
            </div>
          </Section>

          <Section
            id="tech-stack"
            title="Tech Stack"
            maxW="max-w-60">
            <div
              className="flex flex-col gap-4">
              {TECH.map((tech) => {
                return (
                  <Subsection
                    key={tech.id}
                    title={tech.category}
                    id={tech.id}>
                    <ul
                      className="list-disc list-inside text-lg">
                      {tech.skills.map((skill) => {
                        return (
                          <li
                            key={skill}>
                            {skill}
                          </li>
                        );
                      })}
                    </ul>
                  </Subsection>
                );
              })}
            </div>
          </Section>
        </div>

        <Section
          id="design"
          title="Design">
          <Subsection
            id="exploration"
            title="Exploration">
          </Subsection>
          
          <Subsection
            id="aesthetic"
            title="Aesthetic">
          </Subsection>
        </Section>

        <Section
          id="art"
          title="Custom Art">
        </Section>

        <Section
          id="polish"
          title="Polish">
          <Subsection
            id="cursor"
            title="Custom Cursor">
          </Subsection>

          <Subsection
            id="eye"
            title="Eye">
          </Subsection>

          <Subsection
            id="dialogue"
            title="Dialogue">
          </Subsection>

          <Subsection
            id="music_player"
            title="Music Player">
          </Subsection>
        </Section>
      </div>
    </div>
  );
}
