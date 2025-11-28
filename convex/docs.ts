import { query } from '@/convex/_generated/server'
import { getCurrentUserId } from '@/convex/helpers/auth'

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

    return docs
  },
})
