import type { Pet } from '../models/ts/Pet.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { categorySchema } from './categorySchema.ts'
import { tagTagSchema } from './tag/tagSchema.ts'
import { z } from 'zod/v4'

export const petSchema = z.object({
  id: z.int().optional(),
  signature: z
    .string()
    .regex(/^data:image\/(png|jpeg|gif|webp);base64,([A-Za-z0-9+/]+={0,2})$/)
    .optional(),
  name: z.string(),
  get category() {
    return categorySchema.optional()
  },
  photoUrls: z.array(z.string()),
  get tags() {
    return z.array(tagTagSchema).optional()
  },
  status: z.enum(['available', 'pending', 'sold']).describe('pet status in the store').optional(),
}) as unknown as ToZod<Pet>

export type PetSchema = Pet
