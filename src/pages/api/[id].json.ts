import createNotionClient from "../../utils/createNotionClient"
import prepareBlock from "../../utils/prepareBlock"

export async function get({ params }) {
  const client = createNotionClient()

  const article = await client.pages.retrieve({ page_id: params.id })
  const children = await client.blocks.children.list({ block_id: params.id })

  const blocks = children.results.map(prepareBlock)

  return {
    body: JSON.stringify({
      title: article.properties.Name.title[0].plain_text,
      blocks,
    }),
  }
}
