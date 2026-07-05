import type { Metadata } from "next";
import { projectBySlug } from "@/data/projects";

const meta = projectBySlug("air-mouse");

export const metadata: Metadata = {
    title: meta.title,
    description: meta.blurb,
};

export default function ProjectMetaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
