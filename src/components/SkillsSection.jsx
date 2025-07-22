import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Web Development
    { name: "HTML/CSS", level: 90, category: "webdev" },
    { name: "Javascript", level: 60, category: "webdev" },
    { name: "React/Vite", level: 50, category: "webdev" },

    // Languages
    { name: "Python", level: 90, category: "languages" },
    { name: "Java", level: 80, category: "languages" },
    { name: "C++", level: 40, category: "languages" },

    // Technical
    { name: "Git/Github", level: 75, category: "technical" },
    { name: "MATLAB", level: 50, category: "technical" },
    { name: "Microsoft Office Suite", level: 90, category: "technical" },

    // Fun
    { name: "Volleyball", level: 80, category: "fun" },
    { name: "Running", level: 75, category: "fun" },
    { name: "日本語", level: 1, category: "fun" },
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
                    {filteredSkills.map((skill, key) =>(
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
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
                    ))}
                </div>
            </div>
        </section>
    );
};