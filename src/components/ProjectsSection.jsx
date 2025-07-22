import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Pokemon DLKL",
        description: "A spinoff of the old time classic, Pokemon.",
        image: "/public/projects/project1.png",
        tags: ["Python", "Pygame", "Tiled"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Programming for Kids",
        description: "Taught Scratch to Primary 3 kids at West View primary school",
        image: "/public/projects/project2.png",
        tags: ["Scratch", "Volunteering"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Portfolio Website",
        description: "Yes, I am running out of projects to add. 許してください.",
        image: "/public/projects/project3.png",
        tags: ["React", "Vite", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/*Header*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                {/*Description*/}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a look at some of my recent projects. Each project was made
                    with time, care and attention, I hope you will enjoy them!
                </p>

                {/*Projects*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/*Images*/}
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                {/*Tags*/}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border bg-primary/10 rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                {/*Titles*/}
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                                {/*Descriptions*/}
                                <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>

                                {/*Links*/}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*Github*/}
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Rhysmond"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};