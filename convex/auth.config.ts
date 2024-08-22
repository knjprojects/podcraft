const authConfig = {
    providers: [
      {//the domain value was gotten after we went to clerk dashboard of our app, and created a JWT template for convex, and got an issuer url
        domain: 'https://legible-parrot-24.clerk.accounts.dev',//"https://fond-sawfly-54.clerk.accounts.dev",
        applicationID: "convex",
      },//after pasting our domain we must runnpx convex dev, then install clerkjs if haven't but NOT the convex documentation one
      //run npm install @clerk/nextjs, then ge our clerk publishable key if haven't 
    ]
  };
  
  export default authConfig;