import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.AUTH_GITHUB_ID;
const githubSecret = process.env.AUTH_GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error(
    "githubId or githubSecret are not defined in the environnement"
  );
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
};

export default NextAuth(authOptions);
