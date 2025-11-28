import { MutationCtx, QueryCtx } from '../_generated/server'

export async function getCurrentUserId(
  ctx: QueryCtx | MutationCtx
): Promise<string> {
  const identity = await ctx.auth.getUserIdentity()

  if (!identity) {
    throw new Error('Unauthenticated')
  }

  return identity.subject
}
