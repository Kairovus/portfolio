"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Engineering",
      institution: "University of Indonesia",
      location: "Depok, Indonesia",
      period: "2025 - Present",
      gpa: null,
      status: null,
      description: "",
      coursework: [
        "Distributed Systems",
        "Machine Learning",
        "Computer Networks",
        "Database Systems",
        "Software Engineering",
      ],
      achievements: ["Graduate Teaching Assistant"],
      image: "/placeholder.svg?height",
    },
    {
      id: 2,
      degree: "Bachelor of Information and Communication Technology",
      institution: "Asia e University",
      location: "Subang Jaya, Malaysia",
      period: "2023 - Present",
      gpa: "3.57 / 4",
      status: "Full Online Course Learning",
      description:
        "Learning Information Technology With The Focus On ICT Project Management and Information System",
      coursework: [
        "Computer Programming	",
        "Object Oriented Programming",
        "Computer Security",
        "Human Computer Interaction",
        "Information System Analysis & Design",
        "Computer Ethics and Cyberlaw",
      ],
      achievements: [null],
      image: "/placeholder.svg?height",
    },
    {
      id: 3,
      degree: "Professional in Information Technology",
      institution: "CEP CCIT FTUI",
      location: "Depok, Indonesia",
      period: "2023 - 2025",
      gpa: "3.48 / 4",
      status: "Graduated with Honours",
      description: "Full-Stack Developing Course Using Project Based Learning",
      coursework: [
        "Network System",
        "Object Oriented Programming",
        "GUI",
        "Full Stack Web Development",
        "API Developing and Utilisation",
        "Git and Version Control",
        "DevOps",
        "Android Development",
      ],
      achievements: [null],
      image: "/placeholder.svg?height",
    },
  ];

  return (
    <section id="education" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Strong academic foundation in computer science and software
            engineering from prestigious institutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeIn}
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Left Column - Institution Info */}
                    <div className="bg-primary/5 p-6 lg:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-background flex items-center justify-center shadow-sm">
                          <img
                            src={edu.image || "/placeholder.svg"}
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg leading-tight mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-semibold mb-2">
                            {edu.institution}
                          </p>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Grade:</span>
                          <Badge variant="secondary">{edu.gpa}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Column - Description & Coursework */}
                    <div className="p-6 lg:p-8 lg:col-span-2">
                      <p className="text-muted-foreground mb-6">
                        {edu.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold">Key Coursework</h4>
                          </div>
                          <div className="space-y-2">
                            {edu.coursework.map((course, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">
                                  {course}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold">Achievements</h4>
                          </div>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-border"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
