import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
	{
		id: "data",
		name: "Data Analysis",
		skills: [
			{ name: "Python", level: 95 },
			{ name: "R", level: 80 },
			{ name: "SQL", level: 92 },
			{ name: "Pandas", level: 92 },
			{ name: "NumPy", level: 88 },
			{ name: "Scikit-learn", level: 85 },
			{ name: "Tableau", level: 90 },
			{ name: "Power BI", level: 88 },
			{ name: "Excel", level: 95 },
			{ name: "Statistical Analysis", level: 92 },
		],
	},
	{
		id: "web",
		name: "Web Development",
		skills: [
			{ name: "HTML/CSS", level: 92 },
			{ name: "JavaScript", level: 90 },
			{ name: "React", level: 83 },
			{ name: "TypeScript", level: 82 },
			{ name: "Node.js", level: 78 },
			{ name: "Express", level: 75 },
			{ name: "MongoDB", level: 80 },
			{ name: "Next.js", level: 75 },
			{ name: "Tailwind CSS", level: 85 },
			{ name: "Git", level: 90 },
		],
	},
	{
		id: "ml",
		name: "Machine Learning",
		skills: [
			{ name: "Regression", level: 88 },
			{ name: "Classification", level: 90 },
			{ name: "Clustering", level: 85 },
			{ name: "Neural Networks", level: 75 },
			{ name: "NLP", level: 80 },
			{ name: "TensorFlow", level: 70 },
			{ name: "PyTorch", level: 70 },
			{ name: "Time Series Analysis", level: 83 },
			{ name: "Model Deployment", level: 78 },
			{ name: "Feature Engineering", level: 85 },
		],
	},
];

interface Skill {
	name: string;
	icon: string;
}

export default function Skills() {
	const [, setActiveTab] = useState("data");

	const skills: Skill[] = [
		{ name: "JavaScript", icon: "📜" },
		{ name: "TypeScript", icon: "🔷" },
		{ name: "React", icon: "⚛️" },
		{ name: "Node.js", icon: "🟢" },
		{ name: "Python", icon: "🐍" },
		{ name: "SQL", icon: "🗃️" },
		{ name: "CSS/SCSS", icon: "🎨" },
		{ name: "HTML", icon: "📄" },
		{ name: "Git", icon: "🔄" },
		{ name: "Data Analysis", icon: "📊" },
		{ name: "Machine Learning", icon: "🤖" },
		{ name: "Data Visualization", icon: "📈" },
	];

	return (
		<section id="skills" className="py-16 bg-background">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center justify-center text-center mb-10">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						My Skills
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
						Technical skills and competencies I&apos;ve developed throughout my
						career.
					</p>
				</div>

				<Tabs defaultValue="data" className="w-full max-w-4xl mx-auto">
					<TabsList className="grid w-full grid-cols-3">
						{skillCategories.map((category) => (
							<TabsTrigger
								key={category.id}
								value={category.id}
								onClick={() => setActiveTab(category.id)}
							>
								{category.name}
							</TabsTrigger>
						))}
					</TabsList>

					{skillCategories.map((category) => (
						<TabsContent key={category.id} value={category.id} className="mt-6">
							<Card className="p-6">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
									{category.skills.map((skill) => (
										<div
											key={skill.name}
											className="flex flex-col items-center p-4 border rounded-lg hover:border-primary transition-colors"
										>
											<div className="font-medium mb-2">{skill.name}</div>
											<div className="w-full bg-muted rounded-full h-2.5 mb-1">
												<div
													className="bg-primary h-2.5 rounded-full"
													style={{ width: `${skill.level}%` }}
												></div>
											</div>
											<Badge variant="outline" className="mt-1">
												{skill.level}%
											</Badge>
										</div>
									))}
								</div>
							</Card>
						</TabsContent>
					))}
				</Tabs>

				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{skills.map((skill) => (
							<Card key={skill.name} className="hover:shadow-lg transition-shadow">
								<CardContent className="p-4 flex items-center space-x-2">
									<span
										className="text-2xl"
										role="img"
										aria-label={skill.name}
									>
										{skill.icon}
									</span>
									<span className="font-medium">{skill.name}</span>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}