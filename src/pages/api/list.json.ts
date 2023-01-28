import createNotionClient from "../../utils/createNotionClient"

export async function get() {
  const client = createNotionClient()

  const response = await client.search({
    filter: {
      value: 'page',
      property: 'object'
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time'
    }
  })

  const articles = response.results.map(async page => {
    const blocks = await client.blocks.children.list({ block_id: page.id })

    return {
      id: page.id,
      address: page.properties.Adresse.rich_text[0].plain_text,
      name: page.properties.Name.title[0].plain_text,
      date: page.properties.Date.date.start,
      header: blocks.results.filter(block => block.type === 'paragraph').at(0).paragraph.rich_text[0].plain_text
    }
  })

  return {
    body: JSON.stringify(await Promise.all(articles))
  }
}
