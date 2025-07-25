import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/*Header*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                {/*Paragraph*/}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    This year, my current full-time availability is from
                    <span className="text-primary"> 5th May - 10th August</span> while my part-time availability is from
                    <span className="text-primary"> 5th May - 12th December</span>.
                    I always welcome opportunities to challenge myself, if you have anything for me, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:chengrhysmond@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        chengrhysmond@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Telegram</h4>
                                    <a
                                        href="https://t.me/Rhyssyboy"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        @Rhyssyboy
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a
                                        href="https://www.google.com/maps/place/National+University+of+Singapore/@1.2976547,103.7741167,972m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31da1a56784202d9:0x488d08d6c1f88d6b!8m2!3d1.2976493!4d103.7766916!16zL20vMDFxNDYw?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        Singapore, NUS
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/rhysmond-cheng-34103329a/" target="_blank">
                                    <Linkedin className="hover:text-primary"/>
                                </a>
                                <a href="https://github.com/Rhysmond" target="_blank">
                                    <Github className="hover:text-primary"/>
                                </a>
                                <a href="https://www.instagram.com/rhyssyboy/" target="_blank">
                                    <Instagram className="hover:text-primary"/>
                                </a>
                                <a href="https://www.facebook.com/rhysmond.cheng.1/" target="_blank">
                                    <Facebook className="hover:text-primary"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Contact Form*/}
                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Rhysmond Cheng..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="chengrhysmond@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};