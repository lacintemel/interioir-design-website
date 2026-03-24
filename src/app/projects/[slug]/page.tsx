import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getProjectBySlug,
  getAdjacentProjects,
  getAllProjectSlugs,
} from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Elena Voss Interior Design",
    };
  }

  return {
    title: `${project.title} | Elena Voss Interior Design`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Elena Voss Interior Design`,
      description: project.tagline,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return <ProjectDetailClient project={project} prev={prev} next={next} />;
}
