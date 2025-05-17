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

// Actual project data with your links
const projects: Project[] = [
	{
		id: 1,
		title: "IsaacForms Web-app",
		description:
			"Custom form builder app using ASP.NET Core, Blazor, PostgreSQL, and Clerk; supports drag-drop UI, reusable templates, response analytics, and live deployment for survey/data collection use.",
		technologies: [
			"ASP.NET Core",
			"Blazor",
			"PostgreSQL",
			"Clerk Auth",
			"C#",
		],
		image: "/images/Isaacforms.png",
		liveUrl: "https://isaacforms-1.onrender.com/",
		githubUrl: "https://github.com/Isakn2/IsaacForms",
	},
	{
		id: 2,
		title: "User Management Web-app",
		description:
			"ASP.NET Core and SQL Server app for managing users, including registration, authentication, and admin panel.",
		technologies: ["ASP.NET Core", "SQL Server", "C#", "Bootstrap"],
		image: "/images/Screenshot 2025-05-14 at 22.30.09.png",
		liveUrl: "http://usrmgt.somee.com/",
		githubUrl: "https://github.com/Isakn2/UserMgt",
	},
	{
		id: 3,
		title: "BookStoreTester",
		description:
			".NET web application for managing bookstore inventory.",
		technologies: [".NET", "C#", "Entity Framework", "SQL"],
		image: "/images/Booktester.png",
		liveUrl: "https://bookstore-app-449h.onrender.com/",
		githubUrl: "https://github.com/Isakn2/Bookstore_app/tree/main/BookStoreTester",
	},
	{
		id: 4,
		title: "Weather Analysis Dashboard",
		description:
			"Python-based weather analysis using APIs and data visualization to explore relationships between weather variables and latitude across global cities.",
		technologies: [
			"Python",
			"Pandas",
			"Matplotlib",
			"APIs",
			"Data Visualization"
		],
		image: "/images/Weather1.png",
		githubUrl: "https://github.com/Isakn2/python-api-challenge/blob/main/WeatherPy/WeatherPy.ipynb",
	},
	{
		id: 5,
		title: "Happiness Report Analysis",
		description:
			"In-depth analysis of global happiness data, uncovering factors influencing life satisfaction across different countries.",
		technologies: ["Python", "Data Analysis", "Pandas", "Visualization"],
		image: "/images/HappinessReport.png",
		githubUrl: "https://github.com/Isakn2/Project_1",
	},
	{
		id: 6,
		title: "Spotify Challenge",
		description:
			"Developed web app integrating data visualization with HTML, CSS, and JavaScript.",
		technologies: ["HTML", "CSS", "JavaScript", "D3.js"],
		image: "/images/Spotify1.png",
		liveUrl: "https://soniamoretti.github.io/Final-Spotify-Challenge/",
		githubUrl: "https://github.com/soniamoretti/Final-Spotify-Challenge",
	},
	{
		id: 7,
		title: "Leaflet Challenge",
		description:
			"Interactive geospatial visualization using JavaScript and Leaflet.js to analyze geographic trends.",
		technologies: ["JavaScript", "Leaflet.js", "GeoJSON", "HTML/CSS"],
		image: "/images/Leaflet_Earthquake_map.png",
		liveUrl: "https://isakn2.github.io/leaflet-challenge/",
		githubUrl: "https://github.com/Isakn2/leaflet-challenge",
	},
	{
		id: 8,
		title: "CityBike Tableau Dashboard",
		description:
			"Designed Tableau dashboard analyzing bike-sharing data, highlighting usage patterns and station efficiency.",
		technologies: ["Tableau", "Data Visualization", "Analytics"],
		image: "/images/Tableau.png",
		liveUrl: "https://public.tableau.com/app/profile/isaac.silva/viz/CityBike_Jersey_City/Story#1",
	},
	{
		id: 9,
		title: "Belly Button Biodiversity",
		description:
			"Dynamic dashboard showcasing bacterial biodiversity using JavaScript, HTML, and CSS.",
		technologies: ["JavaScript", "D3.js", "HTML/CSS", "Plotly.js"],
		image: "/images/Bellybutton1.png",
		liveUrl: "https://isakn2.github.io/belly-button-challenge/",
		githubUrl: "https://github.com/Isakn2/belly-button-challenge",
	},
	{
		id: 10,
		title: "Home Sales Analysis",
		description:
			"Processed large datasets with Apache Spark to optimize query efficiency; created visualizations for real estate trends and pricing strategies.",
		technologies: ["Apache Spark", "PySpark", "SQL", "Data Visualization"],
		image: "images/Homesales.png",
		githubUrl: "https://github.com/Isakn2/Home_Sales/blob/main/Home_Sales_colab.ipynb",
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