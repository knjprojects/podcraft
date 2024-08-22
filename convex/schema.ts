//in this file we defined the fieldname for our podcasts and our users
//we came here after realizing that yes we can fetch data from convex with the tasks api example
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    user: v.id("users"),
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    audioUrl: v.optional(v.string()),
    audioStorageId: v.optional(v.id("_storage")),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id("_storage")),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voicePrompt: v.string(),
    imagePrompt: v.string(),
    voiceType: v.string(),
    audioDuration: v.number(),
    views: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "podcastTitle" })
    .searchIndex("search_body", { searchField: "podcastDescription" }),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  }),
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  thumbnails: defineTable({
    title: v.string(),
    //userId: v.string(),
  }),
});
//great, now lets create our createUser functions for our user schema we just defined
//after user crud operations are performed with webhook integration we move on
//after alot of props configuration and form setting up, we are now ready to start the podcastgenerating step
//the first step is to make sure openai is connected, so let us connect to openai
