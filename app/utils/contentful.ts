import * as contentful from "contentful";

export const contentClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE!,
  accessToken: process.env.CONTENTFUL_API!,
});