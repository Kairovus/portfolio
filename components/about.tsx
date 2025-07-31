"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Code2,
  Database,
  Globe,
  Lightbulb,
  Rocket,
  Server,
  Users,
} from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Solution-Oriented",
      description:
        "I enjoy solving complex problems with elegant, scalable solutions that are easy to maintain and future-proof.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Flexible Data Architecture Expertise",
      description:
        "Proficient in relational, ORM-based, and cloud databases such as MySQL, Prisma, Supabase, and Firebase.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Coordination",
      description:
        "Team-oriented and adaptable, I offer new perspectives whether leading or collaborating.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Quick Adaptability",
      description:
        "Dependable under pressure, I meet both fixed deadlines and urgent requests without compromise.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">A Passionate Learner</h3>
            <p className="text-muted-foreground mb-6">
              I'm a junior full-stack developer with a passion for solving
              complex problems through simple, scalable solutions. I enjoy
              working in collaborative teams, adapt quickly to challenges, and
              bring a fresh perspective to every project. Whether it’s building
              robust APIs, working with cloud databases, or delivering on tight
              deadlines.
            </p>
            <p className="text-muted-foreground mb-6">
              My software development journey began through the CCIT program at
              FTUI. From there, I explored countless courses on YouTube and
              continuously sharpened my skills by building small projects
              whether for assignments or personal interest. I enjoy creating
              things I find meaningful, both as a builder and as a user.Outside
              of coding, I’m passionate about martial arts, gaming, and
              storytelling, interests that often inspire how I approach
              problem-solving and design.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <div key={index} className="animate-in">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
