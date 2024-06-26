import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return <section className="h-full" >
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl ">Web Develper</span> <h1 className="h1">Hi  I'am <br /> <span className="text-accent">Hamze Mohamed</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">I am a tech-savvy innovator merging education
            consulting with a passion for software
            development. With a diploma in computer
            engineering driving my ambition,
            I'm dedicated to infusing fresh
            ideas into every project to make a real impact.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/assets/cv.pdf" download>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <a href="/assets/credential.pdf" download>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>certification</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full  flex justify-center items-center text-accent  text-base hover:bg-accent hover:text-primary hover:trantion-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0" >
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>;
}
