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

const testimonials = defineCollection({
  loader: glob({ base: './src/content/testimonials', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    rating: z.number().min(1).max(5).default(5),
    order: z.number().default(0),
    lang: z.enum(['ru', 'en']).default('ru'),
    avatar: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    projectUrl: z.string().optional(),
  }),
})

export const collections = { portfolio, testimonials }
