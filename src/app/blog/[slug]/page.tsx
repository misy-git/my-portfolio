import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPostClient from "../../../components/blog/BlogPostClient";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));
  const html = content
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/^---$/gim, "<hr/>")
    .replace(/\n\n/gim, "</p><p>");
  const readTime = Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));
  return <BlogPostClient data={data as any} html={html} readTime={readTime} />;
}