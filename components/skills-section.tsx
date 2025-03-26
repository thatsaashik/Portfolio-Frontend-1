"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Layers, Palette, Terminal, TestTube } from "lucide-react"
// Import our animation components at the top
import { FadeIn, StaggerContainer, fadeInLeftItem } from "@/components/animations"

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 60 },
      { name: "TypeScript", level: 30 },
      { name: "React", level: 65 },
      { name: "Next.js", level: 20 },
      { name: "Tailwind CSS", level: 70 },
  
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 55 },
      { name: "Express", level: 50 },
      { name: "MongoDB", level: 65 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    icon: <TestTube className="h-5 w-5" />,
    skills: [

      { name: "React Testing Library", level: 70 },
  
    ],
  },
  {
    id: "other",
    label: "Other",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "Accessibility", level: 80 },
      { name: "SEO", level: 75 },
      { name: "Performance Optimization", level: 80 },
      { name: "UI/UX Design", level: 70 },
    ],
  },
]

export function SkillsSection() {
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

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Replace the section title with FadeIn component */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and tools throughout my career. Here's an overview of my
              technical skills.
            </p>
          </FadeIn>
        </div>

        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden md:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {/* Replace the skills rendering with StaggerContainer */}
              {/* Inside the TabsContent component, repla ce the div with className="grid gap-6" with: */}
              <StaggerContainer className="grid gap-6" delay={0.1} staggerChildren={0.1}>
                {category.skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={fadeInLeftItem}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={
                          isVisible
                            ? {
                                width: `${skill.level}%`,
                                transition: {
                                  duration: 0.8,
                                  delay: index * 0.1 + 0.3,
                                },
                              }
                            : { width: 0 }
                        }
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.5 } } : { opacity: 0, y: 20 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
          >
            <Code className="h-5 w-5 text-primary" />
            <span>Always learning new technologies</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

