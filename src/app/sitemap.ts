import fs from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");

export default function sitemap() {
  const files = fs.readdirSync(CONTENT_PATH);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    return {
      url: `https://outofscope.ai/blog/${slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://outofscope.ai",
      lastModified: new Date(),
    },
    ...posts,
  ];
}
