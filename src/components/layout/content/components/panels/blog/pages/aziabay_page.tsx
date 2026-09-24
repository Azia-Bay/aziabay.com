"use client";

import HoveredUnderline from "@/components/vfx/hovered_underline";

import Banner, { Shield } from "../components/blog_banner";
import Section from "../components/blog_section";
import Subsection from "../components/blog_subsection";
import Paragraph from "../components/blog_paragraph";
import Link from "../components/blog_link";
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
                <div>
                  <Paragraph>
                    During the summer of 2022, I was approaching my second year at the University of Texas at Dallas as a computer science major, and got the idea in my head to create my own website.
                  </Paragraph>

                  <Paragraph>
                    &emsp;Like many other rats in the great, big race, I had been comparing myself to <i>the elite</i> at my college. No, not the elite in terms of the students with the most family wealth. Instead, I am talking about the students who had perfect grade point averages, leadership positions in the largest student clubs, and summer internships lined up for top tech companies.
                  </Paragraph>

                  <Paragraph>
                    &emsp;One of these students was Francis Masangcay, the Co-Director of the Association for Computing Machinery at the University of Texas at Dallas—the largest computer science organization at our college—and previous software engineering intern at Amazon Web Services (AWS).
                  </Paragraph>

                  <Paragraph>
                    &emsp;Francis had his own personal website—<Link href="https://francis-masangcay.dev/">francis-masangcay.dev</Link>—and in my effort to emulate others and their success, I wanted my own. In the summer of 2022, <Link href="/">aziabay.com</Link> was born, bright and shiny and new.
                  </Paragraph>
                </div>
              </Subsection>

              <Subsection
                id="wait"
                title="Wait, 2022? This blog was published in 2026!">
                <div>
                  <Paragraph>
                    When this website released in 2022, it looked something like this:
                  </Paragraph>

                  <Image
                    title="Design 1"
                    src="/content/panels/blog/pages/aziabay/design_1.png"
                    alt="" />

                  <Paragraph>
                    Then, I changed things up and made it look like this:
                  </Paragraph>

                  <Image
                    title="Design 2"
                    src="/content/panels/blog/pages/aziabay/design_2.png"
                    alt="" />

                  <Paragraph>
                    Then this:
                  </Paragraph>

                  <Image
                    title="Design 3"
                    src="/content/panels/blog/pages/aziabay/design_3.png"
                    alt="" />

                  <Paragraph>
                    Experimented with this:
                  </Paragraph>

                  <Image
                    title="Design 4"
                    src="/content/panels/blog/pages/aziabay/design_4.png"
                    alt="" />

                  <Paragraph>
                    In 2024, landed on this:
                  </Paragraph>

                  <Image
                    title="Design 5"
                    src="/content/panels/blog/pages/aziabay/design_5.png"
                    alt="" />

                  <Paragraph>
                    Needless to say, I am incredibly indecisive.
                  </Paragraph>

                  <Paragraph>
                    &emsp;Although this blog page purports to examine the creation of <Link href="/">aziabay.com</Link>, what it really examines is the redesign of <Link href="/">aziabay.com</Link> in 2026, which is hopefully the design you are seeing right now, unless my indecisiveness gets the best of me yet again.
                  </Paragraph>

                  <Paragraph>
                    &emsp;But I am getting ahead of myself.
                  </Paragraph>

                  <Paragraph>
                    &emsp;The reason that this website is being redesigned—and the reason for this blog—is that none of the designs above felt like me. Looking back at them now, I do not think any of them are bad, but I cannot help but see them as generic, and lacking any real signature that identifies them as something I made. Excluding, of course, my name printed in big, bold letters wherever the opportunity presents.
                  </Paragraph>

                  <Paragraph>
                    &emsp;I want my website to be more than a page I shove all the same information from my resume onto, and more than a url to direct recruiters to during job hunting season. I want my website to be made for me. And so, this is the <i>rebirth</i> of <Link href="/">aziabay.com</Link>, redesigned for 2026, and years to come.
                  </Paragraph>
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

        <div
          className="flex flex-row gap-10">
          <Section
            id="design"
            title="Design">
            <Subsection
              id="exploration"
              title="Exploration">
              <Paragraph>
                Before jumping into the design phase, I explored different websites that I had visited in the past, enjoyed the look of, and bookmarked for future reference. For this design, my main inspirations were <Link href="https://trawlix.art/">trawlix.art</Link> and <Link href="https://www.bossypino.com/">bossypino.com</Link>.
              </Paragraph>
              
              <Image
                title="trawlix.art"
                src="/content/panels/blog/pages/aziabay/inspiration_1.png"
                alt="" />
              
              <Paragraph>
                Tina is one of the artists of <i>METAMORPHOSIS</i> and the creator of <Link href="https://trawlix.art/">trawlix.art</Link>.
              </Paragraph>

              <Paragraph>
                &emsp;The main thing that I love about their website is its commitment to high contrast, stylized, black and white design. What some might call an eye strain, or waste of modern computer graphics, is to me my bread and butter. I enjoy the striking complement of full dark and full light. I enjoy working in limitations. There is no need to spell out how I incorporated this into my design.
              </Paragraph>
              
              <Image
                title="bossypino.com"
                src="/content/panels/blog/pages/aziabay/inspiration_2.png"
                alt="" />

              <Paragraph>
                Bossy is the sole developer of <i>Muffles' Life Sentence</i> and the creator of <Link href="https://www.bossypino.com/">bossypino.com</Link>.
              </Paragraph>

              <Paragraph>
                &emsp;From his website, I borrowed the blog section. Some developers have blogs, but many of them are inactive, and often seemed to me like a waste of space, or otherwise unnecessary feature to have on my own website. Bossy, on the other hand, publishes a new blog post every month, many of which are insightful and worth reading, and reignited my attraction to the developer log.
              </Paragraph>
            </Subsection>
            
            <Subsection
              id="aesthetic"
              title="Aesthetic">
              <Paragraph>
                I made two commitments in the aesthetic: 1) the entire website must only use pixel art, and 2) the entire website must only use black and white. I wanted my design to be as intentional as possible.
              </Paragraph>
            </Subsection>

            <Subsection
              id="exceptions"
              title="Exceptions">
              <Paragraph>
                There are some exceptions to these rules. Although every banner and icon is an asset created by me in pixelated black and white, I did not modify external assets. For example, I did not alter the above screenshot of Bossy's website, even though it uses far more than two colors.
              </Paragraph>
            </Subsection>
            
            <Subsection
              id="dithering"
              title="Dithering">
              <Paragraph>
                The difficulty in sticking to these rules comes from working around standard expectations for user experience with only two colors.
              </Paragraph>

              <Paragraph>
                &emsp;When you hover your mouse over a button, you expect the button to become darker, or otherwise provide some visual indication that it can be clicked. How can I make a white button darker without abruptly painting it black? Gray is inbetween white and black, but making the button gray would go against rule two, and is somewhat of a cheat.
              </Paragraph>

              <Paragraph>
                &emsp;The answer is dithering, or applying a dithering effect to everywhere an inbetween tone is needed. You can see this when hovering over any tab and most buttons on this website.
              </Paragraph>

              <Paragraph>
                &emsp;Using a Bayer matrix, dithering is also applied across the entire screen when the website is loaded in, making it seem like the website is gradually fading into view from total darkness, even though only two colors are ever used.
              </Paragraph>
            </Subsection>
          </Section>

          <Section
            id="art"
            title="Custom Art">
          </Section>
        </div>

        <Section
          id="polish"
          title="Polish">
          <Subsection
            id="loading"
            title="Loading Animation">
          </Subsection>

          <Subsection
            id="cursor"
            title="Custom Cursor">
          </Subsection>

          <Subsection
            id="eye"
            title="Blinking Eye">
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
