# BETTER-AUTH with Express.js

## Description
This project is a starting point for using better-auth with Express.js and Prisma.js (PostgreSQL).
It integrates the [oAuthProxy](https://www.better-auth.com/docs/plugins/oauth-proxy) plugin to implement authentication on the backend, making it easy to decouple authentication from your frontend. This setup works seamlessly with any frontend framework (like Next.js) and provides a secure, scalable foundation for modern web applications.

**Implements the following features:** Social Sign-in with Google

## BACKEND SETUP
1. Clone the repo and open it in your code editor
2. Create a new database
3. Follow [this step](https://www.better-auth.com/docs/authentication/google#get-your-google-credentials) in the better-auth documentation and set the redirect like this: ```bash http://localhost:3001/api/auth/callback/google```
4. Move .env.example to .env and provide necessary variables
5. Run the following commands
   
   ```bash
   npm install
   npx prisma generate
   npx prisma migrate dev --name init
   npm run dev
   ```
## FRONTEND SETUP
1. Install better-auth in your frontend project (Next.js in my case)
2. Create Client Instance
   
   ```typescript
   //lib/auth-client.ts
   import { createAuthClient } from "better-auth/react"
   export const { signIn, signUp, signOut, useSession } = createAuthClient({
       baseURL: "http://localhost:3001"
   })
   ```
4. Finally, to sign in with a social provider
   
   ```typescript
   await signIn.social({
       provider: "google",
       callbackURL: "http://localhost:3000/dashboard",
   })
   ```
## PREVIEW
https://www.loom.com/share/3a86f5a6b904430382d6823ab1a7a350?sid=e817c157-1302-4ebb-9a53-cc3f2d251e96
