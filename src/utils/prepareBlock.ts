import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export default function(block: BlockObjectResponse) {
        if(block.type === 'image') return `<image src="${block.image.file.url}" class="inline-flex justify-center"/>`
      
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
      
}