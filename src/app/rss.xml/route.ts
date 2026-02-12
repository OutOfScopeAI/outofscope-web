import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");
const SITE = "https://outofscope.ai";

function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toUtcString(dateLike: unknown) {
  const d = new Date(String(dateLike ?? ""));
  if (Number.isNaN(d.getTime())) return new Date().toUTCString();
  return d.toUTCString();
}

export async function GET() {
  const files = fs.existsSync(CONTENT_PATH)
    ? fs.readdirSync(CONTENT_PATH).filter((f) => f.endsWith(".mdx"))
    : [];

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_PATH, file), "utf8");
      const { data } = matter(raw);

      // published false ise dışarı at
      if (data?.published === false) return null;

      const title = String(data?.title ?? slug);
      const description = String(data?.description ?? "");
      const date = data?.date ?? new Date().toISOString();
      const category = data?.category ? String(data.category) : "";

      const url = `${SITE}/blog/${slug}`;

      return {
        slug,
        title,
        description,
        date,
        category,
        url,
      };
    })
    .filter(Boolean) as Array<{
    slug: string;
    title: string;
    description: string;
    date: unknown;
    category: string;
    url: string;
  }>;

  // tarihe göre yeni → eski
  posts.sort((a, b) => new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime());

  // çok uzamasın (ör: son 30)
  const items = posts.slice(0, 30).map((p) => {
    return `
<item>
  <title>${escapeXml(p.title)}</title>
  <link>${p.url}</link>
  <guid>${p.url}</guid>
  <pubDate>${toUtcString(p.date)}</pubDate>
  ${p.category ? `<category>${escapeXml(p.category)}</category>` : ""}
  <description>${escapeXml(p.description)}</description>
</item>`.trim();
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Out of Scope AI Labs</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml("Uygulamalı yapay zekâ notları ve AI-native sistem tasarımı.")}</description>
    <language>tr-tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
