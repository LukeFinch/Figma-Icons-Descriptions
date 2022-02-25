// import { on, showUI } from '@create-figma-plugin/utilities'

// import { ResizeWindowHandler } from './types'

import {icons} from './icons.json'


export default function () {
  
  const namings = icons.map((icon: any) => {
        return {name: icon.categories[0] + '/' + icon.name, tags: icon.tags}
      })

    
  
      //2075 is the max length
      //try going up by 500ish each time
      //if thats still an issue, go up by 250 and you should be fine
      //0-500
      //501-1000
      //1001-1500
      //1501-2075
      //Causes a memory issue because icons is so big, and figma is so big, need to refactor this to be better but it does the job for now
  namings.slice(0,500).forEach(icon => {
    const matches: SceneNode[] = figma.currentPage.findAll(node => node.name == icon.name && node.parent !== null && node.parent.type == "COMPONENT");

    matches.forEach(match  => {
      (match.parent as ComponentNode).description = icon.tags.join(', ')
    })
  })
  
 figma.closePlugin()

  


}
