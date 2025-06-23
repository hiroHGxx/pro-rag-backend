import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const add = mutation({
  args: {
    text: v.string(),
    embedding: v.array(v.float64()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("documents", {
      text: args.text,
      embedding: args.embedding,
    });
  },
});