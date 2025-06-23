import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const add = mutation({
  args: {
    url: v.string(),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("crawled_pages", {
      url: args.url,
      text: args.text,
      status: "pending",
    });
  },
});

export const getPending = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("crawled_pages")
      .filter(q => q.eq(q.field("status"), "pending"))
      .collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("crawled_pages"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { status: args.status });
  },
});