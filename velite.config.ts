import { defineConfig, s } from 'velite'

// URL dostu isimler (slug) oluşturmak için yardımcı fonksiyon
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    clean: true
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'blog/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          description: s.string().max(999), // SEO için kritik
          date: s.isodate(),
          published: s.boolean().default(true),
          category: s.enum(['vibe-coding', 'ml-systems', 'industry-ai']),
          content: s.markdown(), // s.mdx() yerine şimdilik daha hızlı olan markdown
          slug: s.string().optional()
        })
        .transform(data => ({
          ...data,
          slug: data.slug || slugify(data.title)
        }))
    }
  }
})