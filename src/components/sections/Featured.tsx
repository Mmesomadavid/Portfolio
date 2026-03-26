"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

type Project = {
  id: number
  title: string
  image: string
  description: string
  skills: string[]
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Production-Grade Microservices Platform (Kubernetes)",
    image: "data:image/png;base64,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",
    description:
      "Built and deployed a production-grade microservices architecture designed to simulate a real-world, scalable backend system. The platform consists of multiple independent services (authentication, API gateway, payments, and notifications) containerized with Docker and orchestrated using Kubernetes.",
    skills: ["Kubernetes (EKS / K3s / GKE)", "Docker", "Terraform (Infrastructure as Code)", "Microservices architecture", "Prometheus",  "Grafana (Monitoring)", "ELK Stack (Logging)", "NGINX Ingress Controller", "Autoscaling & Load Balancing", "System Design & Architecture"],
  },
  {
    id: 2,
    title: "Fully Automated CI/CD Pipeline with Security (DevSecOps)",
    image: "data:image/png;base64,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",
    description:
      "Designed and implemented a fully automated CI/CD pipeline with integrated security controls to ensure safe and reliable software delivery. The pipeline automates code testing, container image building, vulnerability scanning, and deployment to production environments.",
    skills: ["GitHub Action",  "Docker", "Trivy (Container Security Scanning)", "CI/CD Pipeline Design"],
  },
  {
    id: 3,
    title: "Multi-Cloud Infrastructure with Terraform",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIoXHiQYQBCgwfpRo61kIhCVlpRVKfkvwzw&s",
    description:
      "Developed a cloud-agnostic infrastructure deployment system using Terraform to provision and manage resources across multiple cloud providers. The project demonstrates the ability to deploy identical environments on AWS and Azure, including networking, compute resources, and load balancing",
    skills: ["AWS (EC2, VPC, ALB, S3)", "Azure (VMs, Virtual Networks)", "Infrastructure design", "Cloud cost optimization"],
  },
  {
    id: 4,
    title: "Real-Time Monitoring & Alerting System",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv77yy73dn8y58ix23rz1.png",
    description:
      "Implemented a real-time monitoring and alerting system to track application and infrastructure health. Metrics were collected using Prometheus and visualized through Grafana dashboards, providing insights into system performance, resource utilization, and uptime.",
    skills: ["Prometheus", "Grafana", "Alertmanager", "System observability", "Performance monitoring"],
  },
  {
    id: 5,
    title: "Auto-Scaling Web App with Load Testing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWxE-lVCMSFXu2jNH-Ehydjf24UI5tbWg5Q&s",
    description:
      "Designed and deployed a scalable web application capable of handling variable traffic loads through dynamic auto-scaling. The application was deployed behind a load balancer and configured to scale horizontally based on CPU and memory usage",
    skills: ["Kubernetes / Cloud auto-scaling", "Load balancing", "Metrics analysis", "Traffic simulation"],
  },
  {
    id: 6,
    title: "Secrets Management & Secure Infrastructure",
    image: "data:image/jpeg;base64,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",
    description:
      "Built a secure secrets management system to eliminate hardcoded credentials and improve infrastructure security. Sensitive data such as API keys and database credentials were stored and managed using HashiCorp Vault and integrated into applications and CI/CD pipelines.",
    skills: ["HashiCorp Vault / AWS Secrets Manager", "Secrets lifecycle management", "CI/CD integration", "Infrastructure security best practices"],
  },
]

const ITEMS_PER_PAGE = 3

const Featured = () => {
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Project | null>(null)
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(sampleProjects.length / ITEMS_PER_PAGE)
  const paginatedProjects = sampleProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold">Featured</h2>
        <Button variant="outline" className="rounded-full">
          View all
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="p-4">
                  <Skeleton className="h-40 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4 mt-4" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                  <div className="flex gap-2 mt-4">
                    <Skeleton className="h-6 w-12 rounded-full" />
                    <Skeleton className="h-6 w-12 rounded-full" />
                  </div>
                </Card>
              ))
          : paginatedProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card
                      className="cursor-pointer overflow-hidden"
                      onClick={() => setSelected(project)}
                    >
                      <CardContent className="p-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-40 object-cover"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-slate-100 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {project.skills.length > 3 && (
                            <span className="px-2 py-1 bg-slate-200 text-xs rounded-full">
                              +{project.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>

                  {/* Hover Details */}
                  <HoverCardContent className="w-80">
                    <h4 className="font-bold">{project.title}</h4>
                    <p className="text-sm text-slate-600 mt-2">
                      {project.description}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
      </div>

      {/* Pagination */}
      {!loading && (
        <div className="flex justify-center mt-10 gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>
          <span className="px-3 py-1 text-sm font-medium">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}

      {/* Dialog for full project */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.title}</DialogTitle>
          </DialogHeader>
          <img
            src={selected?.image}
            alt={selected?.title}
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <p className="text-slate-700">{selected?.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {selected?.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Featured
