import { Client } from '@notionhq/client'

export default function (): Client {
  return new Client({
    auth: import.meta.env.SECRET_NOTION_KEY
  })
}
