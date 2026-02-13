export const dynamic = "force-dynamic";
export const revalidate = 0;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import Tweet from "@/components/Tweet";

export const runtime = "nodejs";

const CONTENT_PATH = path.join(process.cwd(), "content", "blog");

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_PATH)) return [];
  return fs
    .readdirSync(CONTENT_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

type Props = { params: Promise<{ slug: string }> };

function getPost(slug: string) {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  if (data?.published === false) return null;

  return {
    content,
    frontmatter: {
      title: String(data?.title ?? slug),
      description: String(data?.description ?? ""),
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(decodeURIComponent(slug));

  if (!post) notFound();

  return (
    <article className="container prose" style={{ paddingTop: 28, paddingBottom: 56 }}>
      <h1 style={{ marginBottom: 8 }}>{post.frontmatter.title}</h1>
      {post.frontmatter.description ? (
        <p style={{ marginTop: 0, color: "var(--muted)" }}>{post.frontmatter.description}</p>
      ) : null}

      <div style={{ height: 20 }} />

      <MDXRemote source={post.content} components={{ Tweet }} />
    </article>
  );
}
