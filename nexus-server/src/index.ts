import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { auth } from "./lib/auth";

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

serve(app, () => {
    console.log(`Server is running on http://localhost:8080`);
})