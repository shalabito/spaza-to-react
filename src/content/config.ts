// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    
    // Video formats
    thumbnailImage: z.string(),
    videoThumbnail: z.string(),  // WebM
    videoMov: z.string(),        // MOV for Safari
    
    category: z.enum([
      'Brand Identity',
      'Creative Direction', 
      'Photography',
      'Web Development',
      'Campaign',
      'Product Design'
    ]),
    
    description: z.string(),
    status: z.enum(['published', 'draft']).default('published'),
  })
});

export const collections = {
  'projects': projectsCollection
};