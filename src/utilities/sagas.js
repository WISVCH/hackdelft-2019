import { eventChannel } from 'redux-saga'

export const createElementEventChannel = (el, events) =>
  eventChannel(emit => {
    if (!(events instanceof Array)) { events = [events] }

    const emitEvents = events.map(event => () => emit(event))

    events.forEach((event, i) => {
      el.addEventListener(event, emitEvents[i])
    })

    return () => {
      events.forEach((event, i) => {
        el.removeEventListener(event, emitEvents[i])
      })
    }
  })
