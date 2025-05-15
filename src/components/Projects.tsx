import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

// Define the Project type
type Project = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	liveUrl?: string;
	githubUrl?: string;
};

// Sample project data
const projects: Project[] = [
	{
		id: 1,
		title: "Machine Learning Customer Segmentation",
		description:
			"Developed a customer segmentation model using K-means clustering algorithm to identify distinct customer groups based on purchasing behavior and demographics.",
		technologies: [
			"Python",
			"Scikit-Learn",
			"Pandas",
			"Matplotlib",
			"Seaborn",
		],
		image: "/placeholder.svg",
		githubUrl: "https://github.com/isaacsilva/customer-segmentation",
	},
	{
		id: 2,
		title: "Sales Prediction Dashboard",
		description:
			"Created an interactive dashboard for sales forecasting using time series analysis and machine learning models to predict future sales trends.",
		technologies: ["Python", "Streamlit", "Prophet", "Pandas", "Plotly"],
		image: "/placeholder.svg",
		liveUrl: "https://sales-prediction-dashboard.herokuapp.com",
		githubUrl: "https://github.com/isaacsilva/sales-prediction",
	},
	{
		id: 3,
		title: "NLP Sentiment Analysis Tool",
		description:
			"Built a sentiment analysis tool that processes customer reviews and social media comments to determine sentiment polarity and key topics.",
		technologies: ["Python", "NLTK", "SpaCy", "Transformers", "Flask"],
		image: "/placeholder.svg",
		githubUrl: "https://github.com/isaacsilva/sentiment-analysis",
	},
	{
		id: 4,
		title: "Computer Vision Object Detection",
		description:
			"Implemented a real-time object detection system using deep learning models to identify and track objects in video streams.",
		technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "Keras"],
		image: "/placeholder.svg",
		githubUrl: "https://github.com/isaacsilva/object-detection",
	},
];

export default function Projects() {
	const [visibleProjects, setVisibleProjects] = useState(3);
	const hasMoreProjects = visibleProjects < projects.length;

	const loadMoreProjects = () => {
		setVisibleProjects((prev) => prev + 3);
	};

	return (
		<section id="projects" className="py-16 bg-muted/30">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center text-center mb-10">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						My Projects
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
						Explore my portfolio of data analysis and web development
						projects.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects
						.slice(0, visibleProjects)
						.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
							/>
						))}
				</div>
				{hasMoreProjects && (
					<div className="flex justify-center mt-10">
						<Button
							onClick={loadMoreProjects}
							variant="outline"
							size="lg"
						>
							Load More Projects
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}