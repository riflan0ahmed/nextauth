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
            passsword: "123456",
          };
        }

        return null;
        // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
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
