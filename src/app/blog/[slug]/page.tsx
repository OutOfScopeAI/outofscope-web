import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Tweet from "@/components/Tweet";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  if (data.published === false) notFound();

  return (
    <article className="section">
      <div className="container prose" style={{ maxWidth: 800 }}>
        <h1>{data.title}</h1>

        {data.description && (
          <p style={{ color: "var(--muted)" }}>
            {data.description}
          </p>
        )}

        <MDXRemote
  source={content}
  components={{
    Tweet,
  }}
/>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(CONTENT_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  return {
  title: data.title,
  description: data.description,
  alternates: {
    canonical: `https://outofscope.ai/blog/${params.slug}`,
  },
  openGraph: {
    locale: "tr_TR",
    type: "article",
  },
};

}
