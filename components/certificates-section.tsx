"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Import our animation components at the top
import { FadeIn, StaggerContainer, scaleItem } from "@/components/animations"

const certificates = [
  {
    id: 1,
    title: "Full Stack Development Placement Guarante ",
    issuer: "Internshala",
    date: "June 2024",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React,DSA,NodeJS,Express,Mongodb,TailwindCSS.",
    image: "https://training-uploads.internshala.com/certificates/GRADUATION-dftlj2aayui.jpg?t=1740909546",
    link: "https://trainings.internshala.com/s/v/3605953/b4e68d10",
  },
  {
    id: 2,
    title: "N.S.D.C",
    issuer: "NSDC",
    date: "June  2024",
    description: "Certified in Full Stack Development by NSDC and Internshala Trainings. Skilled in building responsive web applications using MERN stack technologies.",
    image: "https://training-uploads.internshala.com/nsdc-certificate-images/carstjwkw30.jpg",
    link: "https://trainings.internshala.com/s/v/3606306/6f57c933",
  },
  {
    id: 3,
    title: "React JS",
    issuer: "Internshala",
    date: "June 2024",
    description: "I am glad to share that I have successfully completed Mastering React Js course from Internshala Trainings. Check out my certificate here!",
    image: "https://training-uploads.internshala.com/certificates/COC-gbyvwf8zvx9.jpg?t=1742901746",
    link: "https://trainings.internshala.com/s/v/3569233/87aed7b8",
  },
  {
    id: 4,
    title: "NodeJS/Express/MongoDB",
    issuer: "Internshala",
    date: "June 2024",
    description: "I am glad to share that I have successfully completed Mastering Node.js, Express.js and MongoDB course from Internshala Trainings. Check out my certificate here!",
    image: "https://training-uploads.internshala.com/certificates/COC-drbmhu3t5xa.jpg?t=1742901896",
    link: "https://trainings.internshala.com/s/v/3579969/4ccca4ce",
  },
]

export function CertificatesSection() {
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

    const section = document.getElementById("certificates")
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
    <section id="certificates" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Replace the section title with FadeIn component */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm constantly learning and improving my skills. Here are some of the certificates I've earned along the
              way.
            </p>
          </FadeIn>
        </div>

        {/* Replace the certificates container with StaggerContainer */}
        <StaggerContainer
          delay={0.2}
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          threshold={0.2}
        >
          {certificates.map((certificate) => (
            <motion.div key={certificate.id} variants={scaleItem}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                <div className="overflow-hidden h-[150px]">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{certificate.issuer}</span>
                  </div>
                  <CardTitle className="text-lg">{certificate.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{certificate.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription>{certificate.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full transition-transform hover:-translate-y-1"
                  >
                    <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

