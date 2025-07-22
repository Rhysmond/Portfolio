import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const scrollRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const rect = scrollRef.current.getBoundingClientRect();
            const midpoint = window.innerHeight / 2;

            if (rect.top < midpoint) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rhysmond</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Cheng</span>
                        {/*<br/>*/}
                        {/*<span className="opacity-0 animate-fade-in"> こんにちは、</span>*/}
                        {/*<span className="text-primary opacity-0 animate-fade-in-delay-1">リスモンド</span>*/}
                        {/*<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">です</span>*/}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        As an <span className="text-primary">aspiring</span> computer scientist, I build apps to better myself.
                        <br/>
                        I'm a sophomore at <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/" target="_blank"
                           rel="noopener noreferrer"
                           className="text-primary underline hover:text-primary/80 transition-colors">
                        NUS</a> pursuing a double major in Computer Science and Mathematics,
                        <br/>
                        with a focus on <span className="text-primary">AI</span> and <span className="text-primary">computer security</span>.
                    </p>
                    <div className="pt-3 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div
                ref={scrollRef}
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary animate-bounce"/>
            </div>
        </section>
    )
};