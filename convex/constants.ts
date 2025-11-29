import { v } from 'convex/values'

export const DOC_TYPES = v.union(
  v.literal('performance'),
  v.literal('award'),
  v.literal('decoration')
)
