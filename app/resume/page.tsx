"use client"
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
}
    from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiNestjs
}
    from "react-icons/si";
const about = {
    title: "About me",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid iste itaque perferendis eius molestias tempore impedit recusandae, numquam repellat pariatur reprehenderit similique facilis, doloribus autem blanditiis, maiores voluptatibus explicabo modi!",
    info: [
        {
            fieldName: "Name:",
            fieldValue: "Hamze Mohamed"
        },
        {
            fieldName: "Phone:",
            fieldValue: "(+30) 695 531 21 76"
        },

        {
            fieldName: "Experience: ",
            fieldValue: "1+ Years"
        },
        {
            fieldName: "Skype:",
            fieldValue: "1+ Years"
        },
        {
            fieldName: "Nationality:",
            fieldValue: "Somali"
        },
        {
            fieldName: "Email:",
            fieldValue: "hamzemohamed9412@gmail.com"
        },
        {
            fieldName: "Freelance:",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages:",
            fieldValue: "Englsih,Somali,Arabic"
        },

    ]
}
const expirence = {
    icon: "/assets/resume/badge.svg",
    title: "My experince",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempore architecto est iste nemo dolores, saepe soluta sequi ipsam, numquam praesentium assumenda corporis dolorum! Porro nostrum totam eveniet voluptas reiciendis!",
    items: [
        {
            company: "Danjire Sopping Center",
            postion: "Full Stack Developer",
            duration: "2022 - 2023"
        },
        {
            company: "Danjire Sopping Center",
            postion: "Front-End Developer Inrern",
            duration: "2022 - 2023"
        },
        {
            company: "Danjire Sopping Center",
            postion: "Full Stack Developer",
            duration: "2022 - 2023"
        },
        {
            company: "Danjire Sopping Center",
            postion: "Front-End Developer Inrern",
            duration: "2022 - 2023"
        },

    ]
}
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempore architecto est iste nemo dolores, saepe soluta sequi ipsam, numquam praesentium assumenda corporis dolorum! Porro nostrum totam eveniet voluptas reiciendis!",
    items: [
        {
            company: "Code Laps Academy",
            degree: "Certified Web Developer ",
            duration: "2024"
        },
        {
            company: "Online Courser",
            degree: "Programming Course",
            duration: "2023"
        },
        {
            company: "Sitco ",
            degree: "Degree of computer Science",
            duration: "2018"
        },

    ]
}
const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum nam officia culpa magni, laudantium velit? Perferendis eos minus non dolores ipsam! Dolor expedita eligendi a nobis. Minus, aliquam porro.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "htm-5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascipt",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",

        },
        {
            icon: <SiNestjs />,
            name: "nest.js",


        }
    ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"
export default function Resume() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col w-full xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6" >
                        <TabsTrigger value="experience" >Exprience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full  ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{expirence.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {expirence.items.map((item, index) => {
                                            return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1">
                                                <span className="text-accent ">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.postion}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>

                                            </li>)
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full  ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1">
                                                <span className="text-accent ">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>

                                            </li>)
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full  ">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                {skills.skillList.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className=" text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className=" capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </TabsContent>
                        <TabsContent value="about" className="w-full  text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className=" text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.describtion}</p>
                                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl lg:flex">{item.fieldValue}</span>
                                        </li>
                                    })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}
