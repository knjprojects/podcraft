//https://docs.convex.dev/quickstart/nextjs
//first file we created and added to our database with command line, pulling sample data from sampleDta.jsonl
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});
//after testing our api with const tasks=useQuery(api.tasks.get) in page.tsx , we now move forward with schema setup for rest of our app
//we simujltaneously worked on users.ts and schema.ts to make sure we have our schema files in place
//we therefore worked on crud functions in users.ts, but that's only cxallable with webhooks, so we added webhooks with http.ts after
