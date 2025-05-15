import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Isaac Silva
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Data Scientist & Machine Learning Engineer
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I specialize in building intelligent systems that transform complex
              data into actionable insights. With expertise in machine learning,
              statistical analysis, and data visualization, I help businesses make
              data-driven decisions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href="#projects">
                  View My Work{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume{" "}
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/isaacsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/isaacsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:contact@isaacsilva.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <img
                src="/profile-photo.jpg"
                alt="Isaac Silva"
                width={400}
                height={400}
                className="object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}