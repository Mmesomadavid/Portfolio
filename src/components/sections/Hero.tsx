"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Star, Plus, Github, Linkedin, Twitter,Code2 } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card"
import meImg from "../../assets/images/mex.jpg"
import BannerImg from "../../assets/images/banner.jpg"

const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Banner */}
      <div className="relative w-full">
        {/* Banner */}
        <div className="w-full h-36 sm:h-48 md:h-60 lg:h-64 bg-slate-200 overflow-hidden rounded-xl">
          <img
            src={BannerImg}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile Avatar */}
        <div className="absolute left-1/2 sm:left-6 -bottom-10 sm:-bottom-14 transform -translate-x-1/2 sm:translate-x-0">
          <Avatar className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 border-4 border-white shadow-lg">
            <AvatarImage
              src={meImg}
              className="object-cover h-full w-full"
            />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Profile Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 sm:mt-20 px-4 sm:px-6 md:px-12 max-w-5xl w-full mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center sm:text-left">
          Mmesoma David
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-600 text-center sm:text-left">
          Cloud Infrastructure Engineer | DevOps Engineer | DevSecOps | MlOps | Freelance Web Developer
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <Button className="gap-2 px-6 h-11 sm:h-12 rounded-full">
            <Github className="h-5 w-5 fill-white" />
            Check Out My GitHub
          </Button>
          <Button className="gap-2 px-6 h-11 sm:h-12 rounded-full">
            <Code2 className="h-5 w-5 fill-white" />
            Explore My work
          </Button>

          {/* HoverCard Follow */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="outline"
                className="border-black/50 h-11 sm:h-12 rounded-full"
              >
                <Plus />
                Follow
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 flex flex-col items-center gap-4">
              <p className="text-sm font-semibold text-slate-700">
                Follow me on:
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/mmesoma-david/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-slate-700 hover:text-blue-600 transition"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="text-xs mt-1">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/chukwunoyelu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-slate-700 hover:text-black transition"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="text-xs mt-1">X(Twitter)</span>
                </a>
                <a
                  href="https://github.com/Mmesomadavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-slate-700 hover:text-black transition"
                >
                  <Github className="h-6 w-6" />
                  <span className="text-xs mt-1">GitHub</span>
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-6">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-slate-900">$10k+</div>
            <div className="text-xs text-slate-500">Earned in Contracts</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-slate-900">3x</div>
            <div className="text-xs text-slate-500">Hired</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-lg sm:text-xl font-bold text-slate-900">
              <Star className="h-5 w-5 fill-current" />
              5.00
            </div>
            <div className="text-xs text-slate-500">Rating for the job</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-slate-900">3+</div>
            <div className="text-xs text-slate-500">Years Of Experience</div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">About</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-justify sm:text-left">
            I am a Cloud Infrastructure and DevOps Engineer focused on building scalable, resilient, and production-ready systems that don’t just work, but hold up under real-world pressure. My approach to engineering is rooted in automation, reliability, and efficiency. I design and implement infrastructure that is reproducible, observable, and secure by default. From containerization and orchestration to CI/CD pipelines and infrastructure as code, I prioritize systems that can scale seamlessly while minimizing human intervention. I am currently deepening my expertise across modern DevOps tooling and cloud platforms, with hands-on experience building and deploying distributed systems that reflect real production environments. Rather than stopping at theory, I focus on practical implementation — creating systems with monitoring, logging, automated deployments, and failure handling built in from the ground up. Beyond infrastructure, I bring a strong problem-solving mindset and an understanding of how engineering decisions impact business outcomes. Whether it’s reducing deployment time, improving system reliability, or optimizing cloud costs, I aim to deliver solutions that are both technically sound and strategically valuable. I am actively seeking opportunities where I can contribute to building high-impact systems, collaborate with strong engineering teams, and continue growing into a world-class DevOps engineer.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Python",
              "Jupyter Notebooks",
              "React",
              "Typescript",
              "MLOps",
              "Model Deployment",
              "Linux",
              "Bash/Shell Scripting",
              "Git & GitHub/GitLab",
              "CI/CD (GitHub Actions, GitLabCI, Jenkins)",
              "Docker",
              "Kubernetes",
              "Helm",
              "Terraform",
              "Ansible",
              "Prometheus",
              "Grafana",
              "Loki",
              "AWS (EC2, S3, Lambda, EKS, SageMaker)",
              "Google Cloud (GCP)",
              "Azure",
              "NGINX",
              "Networking & Security",
              "Monitoring & Logging (ELK, Loki, Datadog)",
              "ArgoCD",
              "Service Mesh (Istio, Linkerd)",
              "Cloudflare",
              "Databases (PostgreSQL, MongoDB, Redis)",
              "API Development",
              "Serverless Frameworks",
              "Notion",
              "Google Meet",
              "Microsoft Teams",
              "Notion",
              "Team work & Collaboration"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs sm:text-sm rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
