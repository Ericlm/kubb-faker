import type { TagTag } from '../../models/ts/tag/Tag.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod/v4'

export const tagTagSchema = z.object({
  id: z.optional(z.int().min(5).max(7).default(1)),
  name: z.optional(z.string()),
}) as unknown as ToZod<TagTag>

export type TagTagSchema = TagTag
