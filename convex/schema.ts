import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  crawled_pages: defineTable({
    url: v.string(),
    text: v.string(),
    status: v.string(),
  }),
  documents: defineTable({
    text: v.string(),
    embedding: v.array(v.float64()),
  }).vectorIndex("by_embedding", { vectorField: "embedding", dimensions: 768 }),
});