"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { initMouseEffect } from "./mouse-effect"
import Image from "next/image"
import {
  Moon,
  Sun,
  Mail,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  Download,
  ExternalLink,
  Phone,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, Badge, Separator } from "@/components/ui/card"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const cleanup = initMouseEffect();
    return () => cleanup && cleanup();
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  const skills = [
    "Python",
    "Django",
    "Machine Learning",
    "MySQL",
    "SQLite3",
    "Pillow",
    "Git & GitHub",
    "C",
    "HTML",
    "CSS",
    "JavaScript"
  ]

  const projects = [
    {
      title: "Crop Recommendation System",
      description:
        "ML-powered app that suggests optimal crops based on soil and climate data. Built with Django & Python.",
      shortDescription: "ML-powered crop recommendation system",
      tech: ["Python", "Django", "ML", "HTML", "CSS", "JS"],
      github: "https://github.com/kkraddi111/Crop-recommendation-system",
      features: [
        "Machine Learning algorithm for crop prediction",
        "Soil and climate data analysis",
        "User-friendly web interface",
        "Real-time recommendations",
      ],
      installation:
        "Clone the repository, install dependencies with pip install -r requirements.txt, and run python manage.py runserver",
      usage: "Enter soil parameters and climate data to get crop recommendations",
      challenges: "Implementing accurate ML models and handling diverse soil data",
      learnings: "Advanced Django development and machine learning integration",
    },
    {
      title: "Quiz-Management System",
      description: "Interactive quiz platform with user login and result tracking. Built with PHP and MySQL.",
      shortDescription: "Interactive quiz platform",
      tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      github: "https://github.com/kkraddi111/Quiz-Management-System",
      features: [
        "User authentication and authorization",
        "Quiz creation and management",
        "Real-time result tracking",
        "Admin dashboard",
      ],
      installation: "Import the database schema, configure database settings, and run the PHP server",
      usage: "Create quizzes, manage users, and track quiz results",
      challenges: "Ensuring data security and handling concurrent user access",
      learnings: "PHP development and database management",
    },
    {
      title: "E-Learning Management System",
      description: "Responsive platform for online learning, with user-friendly UI for students and instructors.",
      shortDescription: "Responsive platform for online learning",
      tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      github: "https://github.com/kkraddi111/E-Learning-Management-System",
      features: [
        "Course creation and management",
        "User roles and permissions",
        "Interactive learning modules",
        "Progress tracking and reporting",
      ],
      installation: "Set up the database, configure server settings, and deploy the application",
      usage: "Create courses, enroll students, and track learning progress",
      challenges: "Designing a scalable and user-friendly learning platform",
      learnings: "PHP web development and database management",
    },
    {
      title: "To-Do Application",
      description:
        "A Python-based task management application with features for task management, priority handling, and data persistence.",
      shortDescription: "Python-based task management application",
      tech: ["Python", "SQLite", "PyQt", "File I/O"],
      github: "https://github.com/kkraddi111/to-do",
      features: [
        "Add, edit, and delete tasks",
        "Priority levels and due dates",
        "Local storage persistence",
        "User-friendly interface",
      ],
      installation: "Clone the repository and run 'pip install -r requirements.txt' to install dependencies",
      usage: "Add tasks, set priorities, and track progress",
      challenges: "Implementing efficient data storage and creating an intuitive desktop interface",
      learnings: "Python scripting and data persistence techniques",
    },
    {
      title: "Calorie Tracker",
      description:
        "Health-focused web app to track daily calorie intake, food database integration, and progress visualization with charts.",
      shortDescription: "Health-focused web app to track daily calorie intake",
      tech: ["Python", "Django", "JavaScript", "Chart.js", "SQLite"],
      github: "https://github.com/kkraddi111/calorie-tracker",
      features: [
        "Daily calorie intake tracking",
        "Food database integration",
        "Progress visualization with charts",
        "User authentication",
      ],
      installation: "Set up the database, install dependencies, and run the Django server",
      usage: "Track daily calorie intake and visualize progress",
      challenges: "Integrating food database and creating interactive charts",
      learnings: "Django development and data visualization",
    },
    {
      title: "Cold Storage Management System",
      description:
        "A system designed to manage inventory, temperature, and other critical parameters for cold storage facilities.",
      shortDescription: "Inventory and temperature management for cold storage",
      tech: ["Python", "Django", "MySQL", "IoT (simulated)"],
      github: "https://github.com/kkraddi111/Cold-Storage-Management-System",
      features: [
        "Real-time temperature monitoring",
        "Inventory tracking and management",
        "Automated alerts for critical conditions",
        "Reporting and analytics",
      ],
      installation: "Clone the repository, set up MySQL database, install Python dependencies, and run Django server.",
      usage: "Monitor cold storage conditions, manage inventory, and generate reports.",
      challenges: "Integrating sensor data and ensuring data integrity in a real-time environment.",
      learnings: "Database design, backend development with Django, and IoT concepts.",
    },
  ]

  const experience = [
    {
      type: "work",
      title: "Software Developer Intern",
      company: "Techciti Software Consulting Pvt. Ltd.",
      duration: "2 months",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      type: "education",
      title: "MCA (Pursuing)",
      company: "Basaveshwar Engineering College, 2023-2025",
      duration: "",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      type: "education",
      title: "BCA",
      company: "STC Arts and Commerce College, 2020-2023",
      duration: "",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#191919] transition-colors duration-300">
      <div className="min-h-screen backdrop-blur-[1px] bg-background/80 text-foreground transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 py-8" suppressHydrationWarning>
          {/* Header */}
          <header className="text-center mb-12 relative hero-gradient py-20 px-4 rounded-b-3xl backdrop-blur-sm bg-background/95">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="absolute top-0 right-0"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="avatar-wrapper mb-6 animate-float relative">
              <div className="absolute inset-0 rounded-full bg-black/30 z-0" />
              <Image
                src="/Kiran-avatar.jpg"
                alt="Kiran Raddi Avatar"
                width={200}
                height={200}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover object-[center_35%] border-4 border-black shadow-2xl relative z-10"
                priority
              />
            </div>

            <h1 className="text-5xl font-bold mb-3 animate-fade-in">
              Kiran Raddi
            </h1>
            <h2 className="text-2xl mb-4 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Python Developer & MCA Student
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              I love building robust Python applications and exploring AWS Cloud. Let's create something amazing
              together!
            </p>

            <nav className="flex flex-wrap justify-center gap-4 mt-12">
              {["About", "Skills", "Projects", "Experience", "Resume", "Contact"].map((item) => (
                <Button 
                  key={item} 
                  variant="ghost" 
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </Button>
              ))}
            </nav>
          </header>

          {/* About Section */}
          <section id="about" className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="section-hover border-transparent hover:border-border backdrop-blur-sm bg-card/95">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">About Me</h4>
                <p className="mb-6 text-muted-foreground">
                  Hi! I'm Kiran from Jamkhandi, India. I'm passionate about Python development and always eager to
                  learn and grow. Currently pursuing my MCA and building cool projects in my free time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Jamkhandi, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      MCA Student, Basaveshwar Engineering College
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Card className="section-hover backdrop-blur-sm bg-card/95">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Card className="section-hover border-transparent hover:border-border">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Projects</h4>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden project-card gradient-border">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold">{project.title}</h4>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                            >
                              {selectedProject === index ? "Hide Details" : "View Details"}
                            </Button>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs skill-badge">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {selectedProject === index && (
                        <div className="border-t p-6 space-y-4">
                          <div>
                            <h5 className="font-semibold mb-2">Description</h5>
                            <p className="text-muted-foreground">{project.description}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Key Features</h5>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Installation & Setup</h5>
                            <p className="text-sm font-mono p-3 rounded bg-muted text-muted-foreground">
                              {project.installation}
                            </p>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Usage</h5>
                            <p className="text-muted-foreground">{project.usage}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Challenges & Solutions</h5>
                            <p className="text-muted-foreground">{project.challenges}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Key Learnings</h5>
                            <p className="text-muted-foreground">{project.learnings}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-12 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Card className="section-hover border-transparent hover:border-border relative overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">
                  Experience & Education
                </h4>
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <div key={index} className="flex gap-4 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex-shrink-0 w-10 h-10 bg-muted rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-accent">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.company}</p>
                        {item.duration && <p className="text-sm text-muted-foreground">{item.duration}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* Resume Section */}
          <section id="resume" className="mb-12 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <Card className="section-hover">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Resume</h4>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="outline" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1Kyxv4MxUo3vUOQ1K9wUhe9duYhLcbf9-/view?usp=sharing" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Online
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://drive.google.com/uc?export=download&id=1Kyxv4MxUo3vUOQ1K9wUhe9duYhLcbf9-"
                      download="Kiran_Raddi_Resume.pdf"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-12 animate-fade-in" style={{ animationDelay: "1.4s" }}>
            <Card className="section-hover">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Contact</h4>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors duration-300">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:ksraddi@gmail.com" className="font-medium notion-link">
                          ksraddi@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors duration-300">
                      <Phone className="w-5 h-5 text-muted-foreground transition-colors duration-300" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+916361030122" className="font-medium notion-link">
                          +91 6361030122
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Button variant="outline" className="justify-start bg-transparent hover:scale-105 transition-transform duration-300" asChild>
                      <a href="https://www.linkedin.com/in/kiran-raddi-69480b374" target="_blank" rel="noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start bg-transparent hover:scale-105 transition-transform duration-300" asChild>
                      <a href="https://github.com/kkraddi111" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 animate-fade-in backdrop-blur-sm bg-background/95 rounded-t-3xl" style={{ animationDelay: "1.6s" }}>
            <Separator className="mb-4" />
            <p className="text-muted-foreground">&copy; 2025 Kiran Raddi</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
