import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  docs: defineTable({
    ownerId: v.string(),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    content: v.optional(v.any()),
    createdAt: v.number(),
    updatedAt: v.number(),
    deletedAt: v.optional(v.number()),
  })
    .index('byOwner', ['ownerId'])
    .index('byLastUpdated', ['updatedAt'])
    .index('byDeletedAt', ['deletedAt']),
})
