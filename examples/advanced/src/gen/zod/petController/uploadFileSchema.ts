import type {
  UploadFilePathParams,
  UploadFileQueryParams,
  UploadFile200,
  UploadFileMutationRequest,
  UploadFileMutationResponse,
} from '../../models/ts/petController/UploadFile.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { apiResponseSchema } from '../apiResponseSchema.ts'
import { z } from 'zod/v4'

export const uploadFilePathParamsSchema = z.object({
  petId: z.coerce.number().int().describe('ID of pet to update'),
}) as unknown as ToZod<UploadFilePathParams>

export type UploadFilePathParamsSchema = UploadFilePathParams

export const uploadFileQueryParamsSchema = z
  .object({
    additionalMetadata: z.optional(z.string().describe('Additional Metadata')),
  })
  .optional() as unknown as ToZod<UploadFileQueryParams>

export type UploadFileQueryParamsSchema = UploadFileQueryParams

/**
 * @description successful operation
 */
export const uploadFile200Schema = apiResponseSchema as unknown as ToZod<UploadFile200>

export type UploadFile200Schema = UploadFile200

export const uploadFileMutationRequestSchema = z.instanceof(File) as unknown as ToZod<UploadFileMutationRequest>

export type UploadFileMutationRequestSchema = UploadFileMutationRequest

export const uploadFileMutationResponseSchema = uploadFile200Schema as unknown as ToZod<UploadFileMutationResponse>

export type UploadFileMutationResponseSchema = UploadFileMutationResponse
