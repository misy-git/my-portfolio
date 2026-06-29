import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPageClient from "../../components/blog/BlogPageClient";

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags,
      readTime: Math.max(1, Math.round(content.trim().split(/\s+/).length / 200)),
    };
  });
  return <BlogPageClient posts={posts} />;
}
