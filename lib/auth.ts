import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // ADMIN USER
        if (
          credentials.email === "saeeann@gmail.com" &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            name: "Ahsan",
            email: "saeeann@gmail.com",
            role: "admin"
          };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
};
