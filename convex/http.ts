// ===== reference links =====
// https://www.convex.dev/templates (open the link and choose for clerk than you will get the github link mentioned below)
// https://github.dev/webdevcody/thumbnail-critique/blob/6637671d72513cfe13d00cb7a2990b23801eb327/convex/schema.ts


//https://docs.convex.dev/auth/clerk
//https://dashboard.clerk.com/apps/app_2hHfx2KK5axWx8T1cBXqWVaL6nA/instances/ins_2hHfx7y8ZonsQefY0UmACzsLhSU/jwt-templates
//after gett9=ing an issuer url from clerk for convex above: paste it into our auth.config.ts, 
//then inside our clerk provider, we wrapped convexwith clerkprovider and sent it props, so then we protected our routes with the clerk middleware.ts
//we can follow this code using this link starter template : https://www.convex.dev/templates/clerk and view the repo
//clerk uses svix to .... so npm install svix
import type { WebhookEvent } from "@clerk/nextjs/server";
import { httpRouter } from "convex/server";
import { Webhook } from "svix";//for clerk 

import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";

const handleClerkWebhook = httpAction(async (ctx, request) => {
  const event = await validateRequest(request);
  if (!event) {
    return new Response("Invalid request", { status: 400 });
  }
  switch (event.type) {//this webvhook is called once a user is authenticated on the login screen
    case "user.created":
      await ctx.runMutation(internal.users.createUser, {//calling our createUser on convex connecting clerk user to our convex database users
        clerkId: event.data.id,
        email: event.data.email_addresses[0].email_address,
        imageUrl: event.data.image_url,
        name: event.data.first_name!,
      });
      break;//at this point, we write the rest of our crud functions for our convex database for users, and then also write the webhooks to call them here
    case "user.updated"://if a user is updated on clerk, it will call update user with the info on convex
      await ctx.runMutation(internal.users.updateUser, {
        clerkId: event.data.id,
        imageUrl: event.data.image_url,
        email: event.data.email_addresses[0].email_address,
      });
      break;
    case "user.deleted":
      await ctx.runMutation(internal.users.deleteUser, {
        clerkId: event.data.id as string,
      });
      break;
  }
  return new Response(null, {
    status: 200,
  });
});

const http = httpRouter();

http.route({
  path: "/clerk",
  method: "POST",
  handler: handleClerkWebhook,
});

const validateRequest = async (
  req: Request
): Promise<WebhookEvent | undefined> => {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!;
  //we have to get a webhook secret from clerk and add it to convex dashboard settings
  //HOWEVER, as you've seen when trying to create a stripe webhook secret for my plural agency/allinone website I first needed to deploy my website online
  //TODO : UPDATE WEBHOOK SECRET, let's also add catch all routes for clerk signin compoennets in our nextjs app directory, not api directory like kindeAuth and next-auth
  //
  if (!webhookSecret) {
    throw new Error("CLERK_WEBHOOK_SECRET is not defined");
  }
  const payloadString = await req.text();
  const headerPayload = req.headers;
  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };
  const wh = new Webhook(webhookSecret);
  const event = wh.verify(payloadString, svixHeaders);
  return event as unknown as WebhookEvent;
};

export default http;