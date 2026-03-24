import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Code,
    CodeXml,
    Github,
    Calculator,
    Volleyball,
    JapaneseYen
} from "lucide-react";
import { DiJavascript } from "react-icons/di";
import { FaReact, FaPython, FaJava, FaMicrosoft, FaRunning  } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
    // Web Development
    { name: "HTML/CSS", level: 90, category: "webdev", icon: CodeXml },
    { name: "Javascript", level: 60, category: "webdev", icon: DiJavascript },
    { name: "React/Vite", level: 50, category: "webdev", icon: FaReact },

    // Languages
    { name: "Python", level: 90, category: "languages", icon: FaPython },
    { name: "Java", level: 80, category: "languages", icon: FaJava },
    { name: "C++", level: 40, category: "languages", icon: TbBrandCpp },

    // Technical
    { name: "Git/Github", level: 75, category: "technical", icon: Github },
    { name: "MATLAB", level: 50, category: "technical", icon: Calculator },
    { name: "Microsoft Office Suite", level: 90, category: "technical", icon: FaMicrosoft },

    // Fun
    { name: "Volleyball", level: 80, category: "fun", icon: Volleyball },
    { name: "Running", level: 75, category: "fun", icon: FaRunning },
    { name: "日本語", level: 1, category: "fun", icon: JapaneseYen },
]

const categories = ["all", "webdev", "languages", "technical", "fun"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/*Header*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                {/*Category Filter*/}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/*Skills*/}
                <div className="flex flex-wrap justify-center gap-8">
                    {filteredSkills.map((skill, key) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={key}
                                className="group relative flex flex-col items-center w-[calc((100%-5*2rem)/6)]"
                            >
                                <Icon className="h-14 w-14 text-primary transition-transform duration-300 group-hover:scale-125"/>
                                <span className="mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};