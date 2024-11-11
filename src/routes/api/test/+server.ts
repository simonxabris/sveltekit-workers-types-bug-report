import puppeteer from "@cloudflare/puppeteer";
import type { RequestHandler } from "./$types";

export const GET = (async ({ platform }) => {
  await puppeteer.launch(platform!.env.BROWSER);
  return new Response("", { status: 200 });
}) satisfies RequestHandler;
