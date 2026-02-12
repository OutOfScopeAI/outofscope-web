import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDateISO } from "@/lib/formatDate";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");

type Post = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
};

function getPosts(): Post[] {
  if (!fs.existsSync(CONTENT_PATH)) return [];
  const files = fs.readdirSync(CONTENT_PATH).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_PATH, file), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      description: data.description ? String(data.description) : undefined,
      date: data.date ? String(data.date) : undefined,
    };
  });

  posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return posts;
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <h1 className="sectionTitle" style={{ fontSize: 34, marginBottom: 8 }}>
          Blog
        </h1>
        <p className="sectionLead" style={{ marginBottom: 18 }}>
          Notes from Out of Scope AI Labs.
        </p>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {posts.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="editorialRow">
              <div className="editorialMeta">{formatDateISO(p.date)}</div>

              <div style={{ minWidth: 0 }}>
                <div className="editorialTitle">{p.title}</div>
                {p.description ? (
                  <div className="editorialDesc">{p.description}</div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}