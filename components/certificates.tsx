"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Certificates() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Active",
      description:
        "Demonstrates expertise in designing distributed systems and applications on AWS platform.",
      credentialId: "AWS-SAA-2024-001",
      verifyLink: "https://aws.amazon.com/verification",
      image: "/placeholder.svg?height=100&width=100",
      skills: ["Cloud Architecture", "AWS Services", "System Design"],
    },
    {
      id: 2,
      title: "Oracle Certified Professional Java SE",
      issuer: "Oracle Corporation",
      date: "2023",
      status: "Active",
      description:
        "Advanced Java programming skills and object-oriented programming principles.",
      credentialId: "OCP-JAVA-2023-456",
      verifyLink: "https://education.oracle.com/verification",
      image: "/placeholder.svg?height=100&width=100",
      skills: ["Java", "OOP", "Enterprise Development"],
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      status: "Active",
      description:
        "Proficiency in developing cloud solutions using Microsoft Azure services.",
      credentialId: "MS-AZ-204-2023-789",
      verifyLink: "https://learn.microsoft.com/verification",
      image: "/placeholder.svg?height=100&width=100",
      skills: ["Azure", "Cloud Development", "DevOps"],
    },
  ];

  return (
    <section id="certificates" className="py-20">
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
            Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Industry-recognized certifications demonstrating expertise across
            various technologies and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                        <img
                          src={certificate.image || "/placeholder.svg"}
                          alt={`${certificate.title} badge`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <CheckCircle className="h-5 w-5 text-green-500 bg-background rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-tight mb-1">
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {certificate.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{certificate.date}</span>
                        <Badge variant="outline" className="text-xs px-2 py-0">
                          {certificate.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {certificate.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Credential ID:</span>{" "}
                      {certificate.credentialId}
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent"
                      asChild
                    >
                      <Link
                        href={certificate.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Award className="mr-2 h-4 w-4" />
                        Verify Certificate
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <div className="bg-muted/50 rounded-lg p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold">Continuous Learning</span>
            </div>
            <p className="text-muted-foreground text-sm">
              I'm committed to staying current with industry trends and
              continuously expanding my skill set through professional
              certifications and ongoing education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
