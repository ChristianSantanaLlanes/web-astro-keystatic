// @ts-ignore
import { defineCollection, reference, z } from 'astro:content';

const games = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    poster: z.string().optional(),
    trailer: z.string().optional(),
    description: z.string().optional(),
    caracteristicas: z.array(reference('caracteristicas')).optional(),
    plataformas: z.array(reference('plataformas')).optional(),
    generos: z.array(reference('generos')).optional(),
    vistas: z.array(reference('vistas')).optional(),
    companias: z.array(reference('companias')).optional(),
  })
})
const caracteristicas = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string()
  })
})
const plataformas = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string()
  })
})
const generos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string()
  })
})
const vistas = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string()
  })
})
const companias = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string()
  })
})

export const collections = { games, caracteristicas, plataformas, generos, vistas, companias };
