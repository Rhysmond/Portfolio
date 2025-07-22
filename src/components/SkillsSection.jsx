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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={key}
                                className="bg-card p-6 rounded-lg shadow-xs card-hover"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-lg"> {skill.name}</h3>
                                    <Icon className="h-5 w-5 text-primary"/>
                                </div>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{width: skill.level + "%"}}
                                    />
                                </div>
                                <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};