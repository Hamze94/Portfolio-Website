"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
    {
        num: "01",
        cagegory: "Full-Stack",
        title: "project 1",
        description: "Designed e commerce website for a grocery store, implementing features such as admin panel and data list for sales purposes ",
        stack: [{ name: "Tailwind.css" }, { name: "React.Js" }, { name: "Nest.JS" }, { name: "MongoDB" }],
        image: '/assets/work/1.png',
        live: '',
        github: ''
    },
    {
        num: "02",
        cagegory: "Front-End",
        title: "project 2",
        description: "I've built my portfolio using Next.js and Tailwind CSS. It showcases my projects, skills, and experiences as a full stack developer. This modern, responsive site highlights my proficiency in cutting-edge web development technologies.",
        stack: [{ name: "Next.js" }, { name: "Tailewind.css" }, { name: "Javascript" }],
        image: '/assets/work/2.png',
        live: '',
        github: ''
    },
    {
        num: "03",
        cagegory: "Front-End",
        title: "project 3",
        description: "Implemented project creation functionality allowing users to track time spent on each project Implemented task management features including adding, deleting, completing tasks, and resetting task timers. Implemented start and stop timer functionality with real - time updates",
        stack: [{ name: "React.js" }, { name: "Tailewind.css" }, { name: "Javascript" }],
        image: '/assets/work/3.png',
        live: '',
        github: ''
    }
]
export default function Work() {
    const [project, setProject] = useState(projects[0])
    const handleSildeChange = (swiper: any) => {
        const currenIndex = swiper.activeIndex;
        setProject(projects[currenIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl: px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all  duration-500  capitalize">{project.cagegory}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent ">{item.name}{index !== project.stack.length - 1 && ","}</li>
                                })

                                }
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px]  rounded-full bg-white/5 flex justify-center items-center group ">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/*gitHub Projects */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px]  rounded-full bg-white/5 flex justify-center items-center group ">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-[50%] ">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSildeChange}

                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[480px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image alt={project.title} src={project.image} fill className=" object-cover" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <WorkSliderBtns containerStyles="flex  gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none " btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all " iconStyles="" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
