import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t py-6 md:py-0">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
					© {currentYear} Isaac Cecilio Silva Gutierrez. All rights reserved.
				</p>
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<a
							href="https://github.com/Isakn"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<Github className="h-5 w-5" />
						</a>
					</Button>
					<Button variant="ghost" size="icon" asChild>
						<a
							href="https://linkedin.com/in/isaacsg"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-5 w-5" />
						</a>
					</Button>
					<Button variant="ghost" size="icon" asChild>
						<a href="mailto:isak.silva91@gmail.com" aria-label="Email">
							<Mail className="h-5 w-5" />
						</a>
					</Button>
				</div>
			</div>
		</footer>
	);
}