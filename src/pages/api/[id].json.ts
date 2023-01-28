import { Client } from '@notionhq/client'

const notion = new Client({
  auth: import.meta.env.SECRET_NOTION_KEY,
})

export async function get({ params }) {
  const response = await notion.blocks.children.list({ block_id: params.id })

  const blocks = response.results.map(block => {
    const content = block[block.type].rich_text[0].plain_text
    let markup

    switch (block.type) {
      case 'heading_1':
        markup = 'h1'
        break
      case 'heading_2':
        markup = 'h2'
        break

      default:
        markup = 'p'
        break
    }

    return `<${markup}>${content}</${markup}>`
  })

  return {
    body: JSON.stringify({
      blocks,
    }),
  }
}
