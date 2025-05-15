import { Download } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Sample resume data
const experience = [
  {
    id: 1,
    position: "Senior Data Analyst",
    company: "TechCorp Analytics",
    date: "2022 - Present",
    description:
      "Lead data analyst responsible for transforming complex datasets into actionable business insights. Developed automated reporting dashboards that improved decision-making efficiency by 30%.",
    achievements: [
      "Implemented predictive models that improved sales forecasting accuracy by 22%",
      "Created interactive Tableau dashboards for executive stakeholders",
      "Mentored junior analysts and led a team of 3 data specialists",
    ],
  },
  {
    id: 2,
    position: "Data Analyst",
    company: "Digital Insights Inc.",
    date: "2019 - 2022",
    description:
      "Analyzed customer behavior data and market trends to optimize marketing strategies and product development. Collaborated with cross-functional teams to implement data-driven solutions.",
    achievements: [
      "Built a customer segmentation model that increased conversion rates by 15%",
      "Developed SQL queries and Python scripts to automate data cleaning processes",
      "Created comprehensive reports that identified $1.2M in cost-saving opportunities",
    ],
  },
  {
    id: 3,
    position: "Web Developer",
    company: "Creative Web Solutions",
    date: "2017 - 2019",
    description:
      "Designed and developed responsive websites and web applications for clients across various industries. Focused on creating intuitive user experiences with clean, efficient code.",
    achievements: [
      "Developed an e-commerce platform that increased client sales by 45%",
      "Implemented SEO best practices that improved site traffic by 60%",
      "Created and maintained documentation for 12+ client websites",
    ],
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    institution: "University of Technology",
    date: "2019 - 2021",
    description:
      "Specialized in advanced statistical methods, machine learning, and data visualization. Graduated with honors.",
    courses: [
      "Advanced Machine Learning",
      "Big Data Analytics",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    date: "2015 - 2019",
    description:
      "Focused on software development, algorithms, and database systems. Completed a capstone project on predictive analytics.",
    courses: [
      "Database Systems",
      "Web Development",
      "Algorithm Design",
      "Software Engineering",
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2022",
    description:
      "Comprehensive program covering the complete data analysis process using various tools and techniques.",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "2021",
    description:
      "Certification validating expertise in using Azure cloud services for implementing and running machine learning workloads.",
  },
  {
    id: 3,
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2020",
    description:
      "Certification demonstrating proficiency in building visualizations, dashboards, and analyzing data with Tableau.",
  },
  {
    id: 4,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2020",
    description:
      "Comprehensive program covering React fundamentals, hooks, state management, and building responsive applications.",
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
          <Button className="mt-6" variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Full Resume
          </Button>
        </div>

        <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-6 space-y-6">
            {experience.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{job.position}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {job.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="mt-6 space-y-6">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {edu.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  <div className="mt-2">
                    <strong className="text-sm font-medium">Key Courses:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.courses.map((course, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 border rounded-lg hover:border-primary transition-colors"
                    >
                      <h3 className="font-medium">{cert.name}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm mt-2">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}