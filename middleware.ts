import arcjet, { createMiddleware, shield } from "@arcjet/next";

export const config = {
  // all routes except for static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({
      mode: "LIVE"
    }),
  ],
});

export default createMiddleware(aj);