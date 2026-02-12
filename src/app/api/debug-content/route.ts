import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const dir = path.join(process.cwd(), "content", "blog");
  let exists = false;
  let files: string[] = [];
  try {
    exists = fs.existsSync(dir);
    if (exists) files = fs.readdirSync(dir);
  } catch (e: any) {
    return Response.json({ dir, exists, error: String(e?.message ?? e) }, { status: 500 });
  }
  return Response.json({ dir, exists, files });
}
