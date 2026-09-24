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
      className="scrollbar scroll-smooth overflow-y-auto w-full min-w-3/4 min-h-0 mx-auto pb-16 rounded-lg border-4 border-dark border-double flex flex-col items-center gap-10 bg-light text-dark">
      <Banner
        src="content/panels/blog/pages/aziabay/banner.png"
        alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's."
        title="The Creation of aziabay.com"
        shields={[
          new Shield("published", "9/24/2026"),
          new Shield("words", 1864),
          new Shield("length", `${Math.ceil(1864 / 238)} min. read`)]} />

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
                    &emsp;Although this blog page purports to examine the creation of <Link href="/">aziabay.com</Link>, what it really examines is the redesign of <Link href="/">aziabay.com</Link> in 2026, which is hopefully the design you are seeing right now, unless my indecisiveness got the best of me yet again.
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
            title="Tech Stack">
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
                There are some exceptions to these rules. Although every banner and icon is an asset created by me in pixelated black and white, I did not modify external assets. For example, I did not alter the above screenshot of Bossy's website, even though it uses more than two colors.
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
            <Subsection
              id="custom"
              title="Why custom?">
              <Paragraph>
                Using custom assets benefits aesthetic consistency and helps make the website feel more like my own.
              </Paragraph>
            </Subsection>

            <Subsection
              id="banners"
              title="Banners">
              <Paragraph>
                I drew several banners strewn throughout the website.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/banner_1.png"
                alt=""
                title="Banner 1"
                pixelated />
              
              <Paragraph>
                This banner is used in the Contact tab, and as the banner for this blog post. It is based on <i>The Creation of Adam</i> by Michelangelo.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/banner_2.gif"
                alt=""
                title="Banner 2"
                pixelated />
              
              <Paragraph>
                This banner is used in the sidebar. It is based on a photograph of me in my university days.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/banner_3.png"
                alt=""
                title="Banner 3"
                pixelated />
              
              <Paragraph>
                This banner is also used in the sidebar. It is based on ionic columns from traditional Greek architecture, with design patterns from a culmination of references.
              </Paragraph>
            </Subsection>

            <Subsection
              id="icons"
              title="Icons">
              <Paragraph>
                I drew all of the icons used in various buttons scattered across the website. The button icons for the four main tabs are animated.
              </Paragraph>

              <Image
                src="/content/panels/blog/pages/aziabay/icon_games.gif"
                alt=""
                title="Games Icon"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The button icon for the Games tab is an old school arcade joystick controller.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/icon_blog.gif"
                alt=""
                title="Blog Icon"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The button icon for the Blog tab is a trumpet. It is reminiscent of medieval times, when heralds would use loud instruments to gather people's attention whenever they brought the news.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/icon_resume.gif"
                alt=""
                title="Resume Icon"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The button icon for the Resume tab is an anonymous resume. You should not put a photo of yourself on your resume anymore, but the detail helps visually identify the sprite as a resume.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/icon_contact.gif"
                alt=""
                title="Contact Icon"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The button icon for the Contact tab is a sealed envelope. I enjoyed drawing the wax seal. I think it looks ornate.
              </Paragraph>
            </Subsection>

            <Subsection
              id="more"
              title="And More">
              <Paragraph>
                Every other asset not explicitly created by someone else was also made by me, including the website's eye logo, the custom cursor sprites, the social media icons, and the music player button icons.
              </Paragraph>
            </Subsection>
          </Section>
        </div>

        <div
          className="flex flex-row gap-10">
          <Section
            id="polish"
            title="Polish">
            <Subsection
              id="loading"
              title="Loading Animation">
              <Paragraph>
                I like loading animations as an extra layer of visual flair, even if they are technically bad for user experience, since accessing the website forces a brief, but unnecessary, delay.
              </Paragraph>

              <Paragraph>
                &emsp;In my opinion, the delay is acceptable for a personal website. Unlike a social media site like Discord, or a site that functions as a tool, like GitHub, no one should be accessing this website frequently enough to be bothered by the delay.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/loading.gif"
                alt=""
                title="Loading Animation" />
              
              <Paragraph>
                A fade-in effect is simple in theory, but made complicated by the inability to use transparency. I get around this with a 4x4 Bayer matrix:
              </Paragraph>

              <div
                className="w-3/4 my-4 grid grid-rows-4 grid-cols-4 text-center">
                <div>0</div>
                <div>8</div>
                <div>2</div>
                <div>10</div>

                <div>12</div>
                <div>4</div>
                <div>14</div>
                <div>6</div>
                
                <div>3</div>
                <div>11</div>
                <div>1</div>
                <div>9</div>
                
                <div>15</div>
                <div>7</div>
                <div>13</div>
                <div>5</div>
              </div>
              
              <Paragraph>
                The matrix is patterned over the entire screen. You can think of the screen as being made of many of these 4x4 grids.
              </Paragraph>
              
              <Paragraph>
                &emsp;Notice how each cell in the grid contains a number, from 0 to 15. You can think of the loading animation as being a 16-frame animation, and each cell's number being its index threshold.
              </Paragraph>
              
              <Paragraph>
                &emsp;If the current animation index is at or below a cell's threshold, a black pixel is drawn at that cell. If the current animation index is above a cell's threshold, nothing is drawn at that cell.
              </Paragraph>
              
              <Paragraph>
                &emsp;This means that, at index 0, or the starting animation frame, every cell in every grid is painted black. At index 1, every cell excluding the top-left cell is black. At index 15, <i>only</i> the bottom-left cell is black. When the animation concludes, the entire screen is made visible.
              </Paragraph>
            </Subsection>

            <Subsection
              id="cursor"
              title="Custom Cursor">
              <Paragraph>
                Taking a note from <i>Slay the Princess</i>—and its scaly, lizard hand cursor—I implemented a custom cursor in the form of a gloved hand, capable of holding various implements.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/cursor.png"
                alt=""
                title="Custom Cursor"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The default cursor is the gloved hand outstretched.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/cursor_pointer.png"
                alt=""
                title="Custom Cursor (Pointer)"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The pointer cursor—swapped to when hovering over buttons and other interactables—is the gloved hand pointing.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/cursor_text.png"
                alt=""
                title="Custom Cursor (Text)"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The text cursor—swapped to when hovering over text-based inputs, like the name field in the contact form—is the gloved hand holding a quill. To draw this one, I had to hold a pen in my hand, then realize that the direction of the quill being realistic matters less than it being readable.
              </Paragraph>
            </Subsection>

            <Subsection
              id="eye"
              title="Blinking Eye">
              <Paragraph>
                When it came time to design the logo for my website, I knew I had to make it an eye. Really, there was just no other option. The eye is my favorite emoji to bother people with on Discord and other communication channels.
              </Paragraph>

              <Image
                src="/content/panels/blog/pages/aziabay/icon.png"
                alt=""
                title="Eye Logo"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                The default logo is the eye staring directly at the viewer.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/icon_closed.png"
                alt=""
                title="Closed Eye Logo"
                maxW="max-w-24"
                pixelated />
              
              <Paragraph>
                After I implemented the default logo, making it interactable felt like an obvious and necessary next step. When you hover over the eye with your mouse, the eye closes automatically, and reopens when the cursor moves away.
              </Paragraph>
            </Subsection>

            <Subsection
              id="dialogue"
              title="Dialogue">
              <Paragraph>
                Making the dialogue panel interactable followed similar logic to making the eye logo interactable: If it looks interactable, then it must be. If it is not, then make it so.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/dialogue_1.gif"
                alt=""
                title="Dialogue 1"
                pixelated />

              <Paragraph>
                Clicking on the panel advances the dialogue text, looping through a pool of different quotes. This website is launching with only two quotes in the pool, but I plan to add more as time goes on, and as I find or come up with suitable quotes.
              </Paragraph>
              
              <Image
                src="/content/panels/blog/pages/aziabay/dialogue_2.gif"
                alt=""
                title="Dialogue 2"
                pixelated />

              <Paragraph>
                The somewhat brash line "Don't you have anything better to do?" references the end of the <i>Undertale</i> Pacifist route.
              </Paragraph>
            </Subsection>

            <Subsection
              id="music_player"
              title="Music Player">
              <Paragraph>
                I did not grow up using Myspace, but I can pretend I am a Millenial by adding a music player to my website, right?
              </Paragraph>
              
              <Paragraph>
                &emsp;Adding a music player was surprisingly involved because I needed it to be customizable, and fit the black and white aesthetic. To this end, the controls were built more or less from scratch.
              </Paragraph>
              
              <Paragraph>
                &emsp;The song I chose was "Late Night Radio" by Kevin Macleod, one of his many royalty-free releases. I wanted something I personally enjoyed listening to, but that was not overwhelming. Something you could relax and read a blog page to, for example. No hard rock.
              </Paragraph>
            </Subsection>
          </Section>

          <Section
            id="conclusion"
            title="Conclusion">
            <Subsection
              id="end"
              title="In the end ...">
              <Paragraph>
                I am glad that I worked on <Link href="/">aziabay.com</Link>. Redesigning the website was a month-long project, and a transition from using pure HTML, CSS, and JavaScript to using the React-based framework Next.js. I feel like I learned a lot—not just about web development, but about taste—or designing the kind of website that is pleasing to me and makes me happy to call my own.
              </Paragraph>
            </Subsection>
          </Section>
        </div>
      </div>
    </div>
  );
}
