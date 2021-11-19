import { animateScroll } from 'react-scroll'

export const scrollToBottom = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 0
  })
}
export const scrollToBottomDelay = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 250
  })
}
