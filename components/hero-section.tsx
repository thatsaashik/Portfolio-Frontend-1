"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center justify-center flex-grow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-block relative">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGd9KO6nt0G_g/profile-displayphoto-shrink_200_200/B4DZR1KxeFHEAY-/0/1737132547781?e=1748476800&v=beta&t=TS3CiIfUdjzmjXYtzgVvT27N_kypr9Z4EeN6mIy6iT8"
              alt="Profile"
              className="rounded-full border-4 border-primary h-[150px] w-[150px] object-cover"
            />
            <div className="absolute bottom-3 right-3 h-4 w-4 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-primary">Aashik </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Frontend Developer</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I build exceptional and accessible digital experiences for the web. Passionate about creating responsive,
            user-friendly interfaces with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button asChild size="lg">
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
            >
              View My Work
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Contact Me
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6 mb-16"
        >
          <Link
            href="https://github.com/thatsaashik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aashik-mansuri-86b97b24a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
      
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#projects"
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault()
            const projectsSection = document.getElementById("projects")
            if (projectsSection) {
              window.scrollTo({
                top: projectsSection.offsetTop - 80,
                behavior: "smooth",
              })
            }
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  )
}

