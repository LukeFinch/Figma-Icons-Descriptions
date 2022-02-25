import { render, useWindowResize } from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'

import { ResizeWindowHandler } from './types'



fetch("https://fonts.google.com/metadata/icons", {
  "headers": {
    "accept": "application/json, text/plain, */*",
  },
  "method": "GET",
})
.then(response => console.log(response))


function Plugin() {
  function onWindowResize (windowSize: { width: number; height: number }) {
    emit<ResizeWindowHandler>('RESIZE_WINDOW', windowSize)
  }
  useWindowResize(onWindowResize, {
    minWidth: 120,
    minHeight: 120,
    maxWidth: 320,
    maxHeight: 320,
    resizeBehaviorOnDoubleClick: 'minimize'
  })
  return null
}

export default render(Plugin)
