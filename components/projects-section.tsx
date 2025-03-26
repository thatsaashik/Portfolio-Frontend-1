"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Import our animation components at the top
import { StaggerContainer, fadeInUpItem } from "@/components/animations"

const projects = [
  {
    id: 1,
    title: "Food Delevery",
    description:
      "A fully responsive food delivery platform with real-time order tracking, item customization, and secure payment integration for a seamless user experience.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww",
    tags: ["React", "JavaScript", "Tailwind CSS", "MongoDb","Express","NodeJS","HTML"],
    demoLink: "https://food-fe-3.onrender.com/",
    githubLink: "https://github.com/thatsaashik/food-be",
  },
  {
    id: 2,
    title: "Duo Studio",
    description: "Duo Studio is a sleek, responsive website with a modern UI and smooth user experience. 🚀",
    image: "https://cdn.dribbble.com/users/2054451/avatars/normal/f6dc1cb54333cc41fe06b5d7d693e82d.jpg?1679414502",
    tags: ["JAVASCRIPT", "CSS", "HTML" ,"GSAP"],
    demoLink: "https://thatsaashik.github.io/duo-studio/",
    githubLink: "https://github.com/thatsaashik/duo-studio",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data based on user location or search.",
    image: "https://plus.unsplash.com/premium_photo-1677744408402-6c198d22d528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMCUyMGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    tags: ["React", "OpenWeather API", "CSS", "HTML"],
    demoLink: "https://thatsaashik.github.io/weather-main-app/",
    githubLink: "https://github.com/thatsaashik/weather-main-app",
  },
  {
    id: 4,
    title: "CommunionHub",
    description: "CommunionHub is a responsive and visually appealing frontend built for seamless community interaction. 🚀" ,
    image: "https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React" ,"TypeScript"],
    demoLink: "https://v0-react-dark-theme-website.vercel.app/",
    githubLink: "https://github.com/thatsaashik/Communion-Hub",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("projects")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases different skills and technologies I've worked
            with.
          </p>
        </div>

        <StaggerContainer
          delay={0.2}
          staggerChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          threshold={0.2}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUpItem}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[200px] object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm" className="transition-transform hover:-translate-y-1">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="transition-transform hover:-translate-y-1">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="https://github.com/thatsaashik" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

