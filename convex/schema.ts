import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  transactions: defineTable({
    sender: v.string(),
    receiver: v.string(),
  }),
});
