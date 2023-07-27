import { authMiddleware } from "@clerk/nextjs";

// to protect all routes
export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
