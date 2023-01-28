import { Client } from "@notionhq/client";

const notion = new Client({
  auth: import.meta.env.SECRET_NOTION_KEY,
});

export async function get({ params, request }) {
  const response = await notion.search({
    filter: {
      value: "page",
      property: "object",
    },
    sort: {
      direction: "ascending",
      timestamp: "last_edited_time",
    },
  });

  return {
    body: JSON.stringify(
      response.results.map((page) => ({
        id: page.id,
        address: page.properties.Adresse.rich_text[0].plain_text,
        name: page.properties.Name.title[0].plain_text,
        date: page.properties.Date.date.start,
      }))
    ),
  };
}
