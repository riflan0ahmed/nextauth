import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "email",
          value: "riflan0ahmed@gmail.com",
        },
        password: { label: "Password", type: "password", value: "123456" },
      },
      async authorize(credentials: any, req: any) {
        // Add logic here to look up the user from the credentials supplied
        if (
          credentials.username === "riflan0ahmed@gmail.com" &&
          credentials.password === "123456"
        ) {
          return {
            id: 2,
            username: "riflan0ahmed@gmail.com",
            email: "riflan0ahmed@gmail.com",
            password: "123456",
          };
        }

        return null;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: "951268437",
  jwt: {
    secret: "951268437",
  },
});
