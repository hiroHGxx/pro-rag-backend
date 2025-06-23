import { query } from "./_generated/server";
import { v } from "convex/values";

export const byEmbedding = query({
  args: {
    embedding: v.array(v.float64()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.vectorSearch("documents", "by_embedding", {
      vector: args.embedding,
      limit: 5,
    });
  },
});