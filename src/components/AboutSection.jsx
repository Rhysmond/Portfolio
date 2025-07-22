import { Code, Gamepad, Calculator } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                {/*Header*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/*Left Side*/}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Computer Scientist & Learner
                        </h3>

                        <p className="text-muted-foreground">
                            As an avid learner of Computer Science, I enjoy creating programmes to challenge and
                            improve myself as a programmer. My notable projects include a Pokemon-inspired game developed
                            with the help of Pygame, contributing to a React-based Telegram analytics app and this
                            Portfolio website.
                        </p>

                        <p className="text-muted-foreground">
                            I am currently a 2nd year undertaking a Computer Science and Mathematics double major
                            program at the National University of Singapore. In the future, I plan to specialize in
                            AI, machine learning, and cybersecurity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="/RESUME.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                My Resume
                            </a>
                        </div>
                    </div>
                    {/*Right Side*/}
                    <div className="grid grid-cols-1 gap-6">
                        {/*First Row*/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web developer</h4>
                                    <p className="text-muted-foreground">
                                        Developing web applications with React and Vite.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*Second Row*/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Gamepad className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Game Developer</h4>
                                    <p className="text-muted-foreground">
                                        Creating fun, simple games through modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*Third Row*/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Calculator className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Mathematician</h4>
                                    <p className="text-muted-foreground">
                                        Well-versed in linear algebra, calculus and statistics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};