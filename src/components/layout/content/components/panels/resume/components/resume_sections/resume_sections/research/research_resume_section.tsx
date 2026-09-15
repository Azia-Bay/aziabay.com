import Section from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_section"
import Subsection from "@/components/layout/content/components/panels/resume/components/resume_sections/resume_sections/research/research_resume_subsection"

export default function Research() {
  return (
    <Section title="Research">
      <div className="flex flex-col gap-4">
        <Subsection title="AeroVista: Leveraging Computer Vision (CV) to Create High-Performance Search-and-Rescue (SAR) Drones" link="bit.ly/aer0vista" href="https://bit.ly/aer0vista" skills={["Python", "PyTorch"]} bullets={[<span>Compared the RTMDet and Mask R-CNN object detection models alongside 5 other students.</span>, <span>Fine-tuned the ML/AI models using Albumentations and Torchvision image augmentations, like Gaussian blur.</span>, <span>Trained on the 2k-image SARD_YOLO dataset, reaching mask mAP50 0.778 for RTMDet; 0.493 for Mask R-CNN.</span>, <span>Diversified test dataset by capturing 100+ images of people in terrestrial environments using DJI Tello drones.</span>, <span>Voted People's Choice at the Association for Computing Machinery Spring '24 Research Symposium.</span>]} />
      </div>
    </Section>
  );
}
