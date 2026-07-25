import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categoryKey: z.string().optional(),
    image: z.string(),
    order: z.number().default(0),
    lang: z.enum(['ru', 'en']).default('ru'),
    role: z.string().optional(),
    year: z.string().optional(),
    client: z.string().optional(),
    tags: z.array(z.string()).default([]),
    appStoreUrl: z.string().optional(),
    googlePlayUrl: z.string().optional(),
    demoUrl: z.string().optional(),
  }),
})

export const collections = { portfolio }
