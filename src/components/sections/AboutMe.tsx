"use client"

import { motion } from "framer-motion"
import type { Variants, Transition } from "framer-motion"
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card"
import { ArrowRight } from "lucide-react"
import MeImg from '../../assets/images/mex.jpg'

const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  },
}

const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column: Info */}
        <motion.div variants={itemVariant} className="flex flex-col justify-start">
          <span className="text-sm uppercase text-gray-500 mb-2 tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cloud Infrastructure Engineer | DevOps engineer
          </h2>
          <p className="text-gray-600 mb-6">
           I am a Cloud Infrastructure and DevOps Engineer focused on building scalable, resilient, and production-ready systems that don’t just work, but hold up under real-world pressure. My approach to engineering is rooted in automation, reliability, and efficiency. I design and implement infrastructure that is reproducible, observable, and secure by default. From containerization and orchestration to CI/CD pipelines and infrastructure as code, I prioritize systems that can scale seamlessly while minimizing human intervention. I am currently deepening my expertise across modern DevOps tooling and cloud platforms, with hands-on experience building and deploying distributed systems that reflect real production environments. Rather than stopping at theory, I focus on practical implementation — creating systems with monitoring, logging, automated deployments, and failure handling built in from the ground up. Beyond infrastructure, I bring a strong problem-solving mindset and an understanding of how engineering decisions impact business outcomes. Whether it’s reducing deployment time, improving system reliability, or optimizing cloud costs, I aim to deliver solutions that are both technically sound and strategically valuable. I am actively seeking opportunities where I can contribute to building high-impact systems, collaborate with strong engineering teams, and continue growing into a world-class DevOps engineer.
          </p>

          {/* Image container */}
          <div className="mb-6 w-full h-96 overflow-hidden rounded-3xl">
            <img
              src={MeImg}
              alt="About me"
              className="w-full h-full object-cover object-center"
              draggable="false"
            />
          </div>

          
        </motion.div>

        {/* Right Column: Cards Grid */}
        <motion.div
          variants={containerVariant}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: "Infrastructure Automation",
              desc: "Designing and deploying scalable cloud infrastructure using IaC and DevOps tools.",
              isDark: false,
            },
            {
              title: "Machine Learning Systems",
              desc: "Building end-to-end ML workflows, from data pipelines to model deployment in production.",
              isDark: false,
            },
            {
              title: "Generative AI & NLP",
              desc: "Exploring LLMs, conversational AI, and applied NLP for building next-gen intelligent assistants.",
              isDark: true,
            },
            {
              title: "CI/CD & MLOps",
              desc: "Implementing automated pipelines for reliable app and ML model deployment at scale.",
              isDark: false,
            },
          ].map((card, i) => (
            <motion.div key={i} variants={itemVariant}>
              <Card
                className={`relative hover:shadow-lg transition-shadow rounded-xl ${
                  card.isDark ? "bg-gray-900 text-white" : "border border-gray-200"
                } w-full h-64`}
              >
                {card.isDark && (
                  <div className="absolute top-0 right-0 bg-red-500 w-24 h-6 transform rotate-12 origin-top-right"></div>
                )}

                <CardContent className="flex flex-col justify-end h-full pb-6">
                  <div
                    className={`h-[2px] w-10 mb-2 ${
                      card.isDark ? "bg-white" : "bg-black"
                    }`}
                  ></div>

                  <CardTitle className="text-xl md:text-2xl mb-1">
                    {card.title}
                  </CardTitle>

                  <CardDescription
                    className={`text-sm ${
                      card.isDark ? "text-gray-200" : "text-gray-600"
                    } mb-3`}
                  >
                    {card.desc}
                  </CardDescription>

                  {card.isDark ? (
                    <motion.div
                      whileHover={{ scale: 1.5, x: 20, y: -20 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-end cursor-pointer"
                    >
                      <ArrowRight className="h-5 w-5 rotate-45 text-gray-900" />
                    </motion.div>
                  ) : (
                    <ArrowRight className="h-5 w-5 mt-2 self-end text-gray-400" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutMe
