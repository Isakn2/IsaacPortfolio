import { Download, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Resume-specific data
const summary = `Results-oriented Data Analyst with expertise in Python, SQL, and JavaScript, recently self-constructed on .NET web apps. Proven ability to design, deploy, and interpret data-driven projects with a focus on machine learning, data visualization, and process optimization. Fluent in English, Spanish, and intermediate in Italian, with international work and academic experience. Adept at leveraging data insights to support business goals and improve operational efficiencies.`;

const techSkills = [
  {
    category: "Languages & Tools",
    items: [
      ".NET (C#, CSHTML)",
      "Python (Pandas, NumPy, Flask, Scikit-learn, TensorFlow)",
      "SQL (PostgreSQL, MySQL, SQLAlchemy, MongoDB, NoSQL)",
      "JavaScript (D3.js, Leaflet.js)",
      "HTML, CSS, VBA",
      "Tableau, Excel, AWS (S3, EC2)",
      "Flask, Shiny",
    ],
  },
  {
    category: "Platforms",
    items: [
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "Tableau Public",
      "Salesforce",
      "SAP",
    ],
  },
  {
    category: "Competencies",
    items: [
      "Data Cleaning",
      "Predictive Modeling",
      "Data Visualization",
      "ETL Pipelines",
      "KPI Analysis",
      "Statistical Analysis",
    ],
  },
];

const projects = [
  {
    title: "IsaacForms Web-app",
    bullets: [
      "Custom form builder app using ASP.NET Core, Blazor, PostgreSQL, and Clerk; supports drag-drop UI, reusable templates, response analytics, and live deployment for survey/data collection use.",
    ],
    liveUrl: "https://isaacforms-1.onrender.com/",
    githubUrl: "https://github.com/Isakn2",
  },
  {
    title: "User Management Web-app",
    bullets: [
      "ASP.NET Core and SQL Server app for managing users, including registration, authentication, and admin panel.",
    ],
    liveUrl: "http://usrmgt.somee.com/",
    githubUrl: "https://github.com/Isakn2",
  },
  {
    title: "BookStoreTester",
    bullets: [".NET web application for managing bookstore inventory."],
    liveUrl: "https://bookstore-app-449h.onrender.com/",
    githubUrl: "https://github.com/Isakn2",
  },
  {
    title: "Adult Income Classification",
    bullets: [
      "Built predictive model using XGBoost and neural networks; achieved 83% accuracy with optimized hyperparameters and data preprocessing techniques.",
    ],
    githubUrl: "https://github.com/elizromero/Project-4-adult-income",
  },
  {
    title: "Home Sales Analysis",
    bullets: [
      "Processed large datasets with Apache Spark to optimize query efficiency; created visualizations for real estate trends and pricing strategies.",
    ],
    githubUrl: "https://github.com/Isakn2/Home_Sales",
  },
  {
    title: "Spotify Challenge",
    bullets: [
      "Developed web app integrating data visualization with HTML, CSS, and JavaScript.",
    ],
    liveUrl: "https://soniamoretti.github.io/Final-Spotify-Challenge/",
    githubUrl: "https://github.com/Isakn2",
  },
  {
    title: "Leaflet Challenge",
    bullets: [
      "Interactive geospatial visualization using JavaScript and Leaflet.js to analyze geographic trends.",
    ],
    liveUrl: "https://isakn2.github.io/leaflet-challenge/",
    githubUrl: "https://github.com/Isakn2/leaflet-challenge",
  },
  {
    title: "CityBike Tableau Dashboard",
    bullets: [
      "Designed Tableau dashboard analyzing bike-sharing data, highlighting usage patterns and station efficiency.",
    ],
    liveUrl: "https://public.tableau.com/app/profile/isaac.silva/viz/CityBike_Jersey_City/Story#1",
  },
  {
    title: "Belly Button Biodiversity",
    bullets: [
      "Dynamic dashboard showcasing bacterial biodiversity using JavaScript, HTML, and CSS.",
    ],
    liveUrl: "https://isakn2.github.io/belly-button-challenge/",
    githubUrl: "https://github.com/Isakn2/belly-button-challenge",
  },
];

const education = [
  {
    degree:
      "B.S. Industrial Engineering with Minor in Systems Engineering",
    institution: "Tecnológico de Monterrey",
    date: "Aug 2011 – Dec 2016",
    description:
      "Graduated with honors (92/100); Excellence Performance Award (CENEVAL); International exchange at Reykjavik University (2014).",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Resume
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            My professional experience, education, and certifications.
          </p>
          <Button className="mt-6" variant="outline" asChild>
            <a href="/files/Isaac_Silva_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Full Resume
            </a>
          </Button>
        </div>

        <Tabs defaultValue="summary" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="mt-6">
            <p className="text-lg leading-relaxed">{summary}</p>
          </TabsContent>

          <TabsContent value="skills" className="mt-6 space-y-6">
            {techSkills.map((group) => (
              <div key={group.category}>
                <h3 className="font-semibold mb-2">{group.category}:</h3>
                <ul className="list-disc pl-5">
                  {group.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="mt-6 space-y-6">
            {projects.map((proj, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{proj.title}</CardTitle>
                    <div className="flex gap-2">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="mt-6 space-y-6">
            {education.map((edu) => (
              <Card key={edu.degree}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{edu.degree}</CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {edu.date}
                    </span>
                  </div>
                  <CardDescription>{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}