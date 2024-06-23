"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Front-End Developer",
        description: "As a Frontend Developer, I specialize in creating the visual and interactive elements of websites and web applications. I translate design mockups into code using HTML, CSS, and JavaScript, ensuring that the user interface is responsive, accessible, and performs well on various devices and browsers. I optimize web performance, enhance user experience, and implement interactive features. Utilizing frameworks and libraries like React and Tailwind CSS, I ensure the site is efficient, maintainable, and user-friendly",
        href: "#",
    },
    {
        num: "02",
        title: "Back-End Developer",
        description:
            "As a Backend Developer, I focus on building the server-side logic and database management for web applications. I utilize frameworks like Next.js, NestJS, and Node.js to create scalable, efficient, and secure backends. I handle data storage and retrieval with MongoDB, ensuring robust and optimized database interactions. My role includes creating APIs, managing server-side processes, and ensuring the overall performance and security of the application, enabling a seamless and reliable experience for users.",
        href: "#",
    },
];

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col  justify-center gap-6 group ">
                            <div className="flex w-full items-center justify-between mb-2">
                                <div className="text-5xl  font-extrabold text-outline text-transparent group-hover:text-outline-hover transtion-all duration-500">{service.num}</div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ">
                                    <BsArrowDownRight className=" text-primary text-3xl" />
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transtion-all duration-500 ">{service.title}</h2>
                            <p className="text-white/70 ">{service.description}</p>
                            <div className="border-b border-white/20 w-full "></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
