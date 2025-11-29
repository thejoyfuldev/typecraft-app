import { mutation, query } from '@/convex/_generated/server'
import { getCurrentUserId } from '@/convex/helpers/auth'
import { v } from 'convex/values'

export const list = query({
  async handler(ctx) {
    const userId = await getCurrentUserId(ctx)

    const docs = await ctx.db
      .query('docs')
      .withIndex('byLastUpdated')
      .filter((f) => f.eq(f.field('ownerId'), userId))
      .filter((f) => f.eq(f.field('deletedAt'), undefined))
      .order('desc')
      .collect()

    return docs.filter((doc) => doc.description !== undefined)
  },
})

export const listTrash = query({
  async handler(ctx) {
    const userId = await getCurrentUserId(ctx)

    const docs = await ctx.db
      .query('docs')
      .withIndex('byDeletedAt')
      .filter((f) => f.eq(f.field('ownerId'), userId))
      .filter((f) => f.neq(f.field('deletedAt'), undefined))
      .order('desc')
      .collect()

    return docs
  },
})

export const create = mutation({
  args: { name: v.optional(v.string()) },
  async handler(ctx, { name }) {
    const userId = await getCurrentUserId(ctx)
    const now = Date.now()

    const docId = await ctx.db.insert('docs', {
      ownerId: userId,
      name,
      createdAt: now,
      updatedAt: now,
    })

    return docId
  },
})

export const emptyTrash = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getCurrentUserId(ctx)

    const trashedDocuments = await ctx.db
      .query('docs')
      .filter((f) => f.eq(f.field('ownerId'), userId))
      .filter((f) => f.neq(f.field('deletedAt'), undefined))
      .collect()

    for (const doc of trashedDocuments) {
      await ctx.db.delete(doc._id)
    }

    return { count: trashedDocuments.length }
  },
})

export const moveToTrash = mutation({
  args: { docId: v.id('docs') },
  async handler(ctx, { docId }) {
    const userId = await getCurrentUserId(ctx)
    const document = await ctx.db.get(docId)

    if (!document) {
      throw new Error('Document not found')
    }

    if (document.ownerId !== userId) {
      throw new Error('Unauthorized')
    }

    const now = Date.now()
    await ctx.db.patch(docId, {
      deletedAt: now,
      updatedAt: now,
    })
  },
})

export const restore = mutation({
  args: {
    docId: v.id('docs'),
  },
  handler: async (ctx, args) => {
    const userId = await getCurrentUserId(ctx)
    const document = await ctx.db.get(args.docId)

    if (!document) {
      throw new Error('Document not found')
    }

    if (document.ownerId !== userId) {
      throw new Error('Unauthorized')
    }

    const now = Date.now()
    await ctx.db.patch(args.docId, {
      deletedAt: undefined,
      updatedAt: now,
    })
  },
})

export const permanentlyDelete = mutation({
  args: {
    docId: v.id('docs'),
  },
  handler: async (ctx, args) => {
    const userId = await getCurrentUserId(ctx)
    const document = await ctx.db.get(args.docId)

    if (!document) {
      throw new Error('Document not found')
    }

    if (document.ownerId !== userId) {
      throw new Error('Unauthorized')
    }

    await ctx.db.delete(args.docId)
  },
})
