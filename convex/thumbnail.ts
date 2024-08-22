import { v } from "convex/values";
import { mutation } from "./_generated/server";
//in this file, we are simply adding text data to database, but only if we are logged in, therefore we attac our user idto the data
export const createThumnail = mutation({
  args: { title: v.string() },
  handler: async (ctx, args) => {
    /*const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new Error("No user logged in!");
    }*/
    //below args must match with database schema.ts
    //thumbnails was an error until I added it to schema.ts
    //test with convex dashboard functions > run mutation
    await ctx.db.insert("thumbnails", {
      title: args.title,
      //userId: user.subject,
    });
  },
});
