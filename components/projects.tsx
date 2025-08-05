"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Book Haven Library App",
      description:
        "A full-featured CRUD app for library management built using html, css, and jsp.",
      tags: ["HTML", "CSS", "JAVA", "MYSQL"],
      codeLink: "https://github.com/Kairovus/BookHaven",
      liveLink: null,
      image: null,
    },
    {
      title: "Sigma Shoes E-commerce ",
      description:
        "An E-commerce website made with java servlet with full CRUD feature",
      tags: ["JAVA", "CSS", "MYSQL"],
      codeLink: "https://github.com/Kairovus/Sigma-Shoes",
      liveLink: null,
      image: null,
    },
    {
      title: "Notello Notes App",
      description:
        "An Android Note-Taking App made using Android Studio With Java",
      tags: ["Android", "Java"],
      codeLink: "https://github.com/Kairovus/Notello-Notes-App",
      liveLink: null,
      image: null,
    },
    {
      title: "Steam Proxy App",
      description: "A web-based js application that fetches steam user data.",
      tags: ["JS", "Express", "API"],
      codeLink: "https://github.com/Kairovus/Notello-Notes-App",
      liveLink: null,
      image: null,
    },
    {
      title: "Market API Google Cloud",
      description: "A market API using Express from Google Cloud database",
      tags: ["JS", "Express", "API", "Google", "Cloud"],
      codeLink: "https://github.com/Kairovus/Market-API-Google-Cloud",
      liveLink: null,
      image: null,
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Hover animation variants
  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects showcasing
              various technologies and skills
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="project-card"
              >
                <motion.div variants={hoverVariants}>
                  <Card className="overflow-hidden h-full flex flex-col cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardContent className="project-content flex-1 flex flex-col p-5">
                      <motion.h3
                        className="text-lg font-bold"
                        layoutId={`title-${index}`}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-muted-foreground mt-2 flex-1"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-2 mt-3"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tags.length - 3} more
                          </Badge>
                        )}
                      </motion.div>
                      <motion.div
                        className="flex gap-2 mt-4"
                        initial={{ y: 10, opacity: 0.8 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" variant="outline" asChild>
                            <Link
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-1 h-4 w-4" /> Code
                            </Link>
                          </Button>
                        </motion.div>
                        {project.liveLink && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="sm" variant="outline" asChild>
                              <Link
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-1 h-4 w-4" /> Live
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
