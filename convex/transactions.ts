import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createNewTransaction = mutation({
  args: {
    sender: v.string(),
    receiver: v.string(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("transactions", {
      sender: args.sender,
      receiver: args.receiver,
    });
  },
});

export const getTransactions = query({
  args: {},
  async handler(ctx, args) {
    return ctx.db.query("transactions").collect();
  },
});
